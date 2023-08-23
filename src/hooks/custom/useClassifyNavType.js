import { useRouter } from 'next/router'
import { useState } from 'react'

import { SIDEBAR_MENU_KEYS } from '@/constants/Keys'
import { checkRouteActive } from '@/utils'

export const useClassifyNavType = () => {
  const [navSelected, setNavSelected] = useState(null)
  const router = useRouter()

  const OPEN_PANEL_ITEMS = [SIDEBAR_MENU_KEYS.SEARCH, SIDEBAR_MENU_KEYS.NOTIFICATIONS]

  const getActive = (item) => {
    if (OPEN_PANEL_ITEMS.includes(item.key)) {
      return item.key === navSelected
    }

    if (!navSelected) {
      return checkRouteActive(router, item.route)
    }
    return false
  }

  return { navSelected, setNavSelected }
}
