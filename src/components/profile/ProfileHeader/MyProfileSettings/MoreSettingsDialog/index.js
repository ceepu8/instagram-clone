import { Transition } from '@headlessui/react'
import { Pressable } from '@react-aria/interactions'
import { Fragment, useEffect, useState } from 'react'

import { Button, LineBreak, Link } from '@/components/base'
import Dialog, { DialogContent, DialogTrigger } from '@/components/base/Dialog'
import { SettingsIcon } from '@/components/icons'
import { useLogout } from '@/hooks/query/auth'
import { cn } from '@/utils'

const LogoutSuccessDialog = ({ open }) => {
  const handleLogout = useLogout()

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (open) handleLogout()
    }, 1000)
    return () => clearTimeout(timer)
  }, [open])

  const renderLogoutSuccessDialogContent = () => {
    return (
      <div className="flex flex-col items-center pb-2 pt-6">
        <h1 className="text-xl">Logging Out</h1>
        <p className="text-comment">You need to log back in</p>
        <LineBreak className="mt-6 w-full" />
        <Pressable onClick={() => handleLogout()}>
          <span
            className={cn(
              'inline-flex cursor-pointer select-none appearance-none items-center justify-center gap-x-2 focus:outline-none',
              'h-8 px-4 text-sm text-default',
              'transition-colors duration-150 ease-linear'
            )}
          >
            Log in
          </span>
        </Pressable>
      </div>
    )
  }

  return (
    <Dialog isOpen={open} onClose={null}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-100"
        enterFrom="opacity-0 scale-110"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-100"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-110"
      >
        <DialogContent className="min-w-[420px]">
          {renderLogoutSuccessDialogContent()}
        </DialogContent>
      </Transition.Child>
    </Dialog>
  )
}

const MoreSettingsDialog = () => {
  const [open, setOpen] = useState(false)
  const [openLogoutSuccess, setOpenLogoutSuccess] = useState(false)

  const ITEM_LIST = [
    {
      key: 'apps-and-websites',
      label: 'Apps and Websites',
      onClick: null,
    },
    {
      key: 'qr-code',
      label: 'QR Code',
      onClick: null,
    },
    {
      key: 'notifications',
      label: 'Notifications',
      onClick: null,
    },
    {
      key: 'settings-and-privacy',
      label: 'Settings and Privacy',
      onClick: null,
    },
    {
      key: 'supervision',
      label: 'Supervision',
      onClick: null,
    },
    {
      key: 'log-out',
      label: 'Log out',
      onClick: () => {
        setOpen(false)
        setOpenLogoutSuccess(true)
      },
    },
    {
      key: 'cancel',
      label: 'Cancel',
      onClick: () => {
        setOpen(false)
      },
    },
  ]

  const trigger = (
    <DialogTrigger
      className={cn(
        'transition-colors duration-150 ease-linear',
        'text-btn-ghost hover:text-btn-ghost-hover disabled:text-btn-ghost-hover',
        'order-3 md:order-last'
      )}
    >
      <SettingsIcon size={24} />
    </DialogTrigger>
  )

  const renderItem = (item) => {
    return (
      <div key={item.key} className="flex w-full items-center justify-center py-3">
        <Button variant="ghost" bold={false} {...{ ...item }}>
          {item.label}
        </Button>
      </div>
    )
  }

  const content = (
    <div className="flex flex-col items-center divide-y divide-divide">
      {ITEM_LIST.map(renderItem)}
    </div>
  )

  return (
    <>
      <Dialog isOpen={open} onClose={setOpen} trigger={trigger}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-100"
          enterFrom="opacity-0 scale-110"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-110"
        >
          <DialogContent className="min-w-[420px]">{content}</DialogContent>
        </Transition.Child>
      </Dialog>
      <LogoutSuccessDialog open={openLogoutSuccess} setOpen={setOpenLogoutSuccess} />
    </>
  )
}

export default MoreSettingsDialog
