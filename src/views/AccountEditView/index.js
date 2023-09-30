import { useRouter } from 'next/router'

import { Heading, LineBreak } from '@/components/base'
import { Footer } from '@/components/layout'
import { ACCOUNT_EDIT_VIEW_TAB } from '@/constants/Keys'

import AccountFAQ from './AccountFAQ'
import AccountsCenterSection from './AccountsCenterSection'

const View1 = () => {
  return (
    <Heading bold={false} className="pl-12 pt-8">
      Edit Profile
    </Heading>
  )
}

const View2 = () => {
  return (
    <Heading bold={false} className="pl-12 pt-8">
      Language Preferences
    </Heading>
  )
}

const AccountEditView = () => {
  const router = useRouter()

  const faqList = {
    [ACCOUNT_EDIT_VIEW_TAB.PROFILE]: {
      label: 'Edit Profile',
      component: View1,
    },
    [ACCOUNT_EDIT_VIEW_TAB.LANGUAGE]: {
      label: 'Language Preferences',
      component: View2,
    },
    [ACCOUNT_EDIT_VIEW_TAB.APPS]: {
      label: 'Apps and Websites',
      component: View2,
    },
    [ACCOUNT_EDIT_VIEW_TAB.EMAIL]: {
      label: 'Email Notifications',
      component: View2,
    },
    [ACCOUNT_EDIT_VIEW_TAB.PUSH]: {
      label: 'Push Notifications',
      component: View2,
    },
    [ACCOUNT_EDIT_VIEW_TAB.DISPLAY]: {
      label: 'What You See',
      component: View2,
    },
    [ACCOUNT_EDIT_VIEW_TAB.CONTENT_PRIVACY]: {
      label: 'Who Can See Your Content',
      component: View2,
    },
    [ACCOUNT_EDIT_VIEW_TAB.INTERACTIONS]: {
      label: 'How Others Can Interact with You',
      component: View2,
    },
    [ACCOUNT_EDIT_VIEW_TAB.SUPERVISION]: {
      label: 'Supervision',
      component: View2,
    },
    [ACCOUNT_EDIT_VIEW_TAB.HELP]: {
      label: 'Help',
      component: View2,
    },
  }

  const { component: Component } = faqList[router.query.tab || 'edit-profile'] || {}

  return (
    <div className="flex h-full flex-col">
      <div className="flex h-full max-h-screen w-full">
        <div className="flex w-[235px] flex-col gap-y-4 overflow-y-auto py-4 pl-5 pr-2 md:w-[315px] md:pr-5">
          <AccountsCenterSection />
          <AccountFAQ faqList={faqList} />
        </div>
        <LineBreak className="my-0 mt-4 h-full w-[1px]" />
        <div className="flex flex-1 flex-col">
          <div className="flex-1">
            <Component />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default AccountEditView
