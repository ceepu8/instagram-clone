import { useRouter } from 'next/router'

import { Heading, LineBreak } from '@/components/base'
import { Footer } from '@/components/layout'

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
    'edit-profile': {
      label: 'Edit Profle',
      component: View1,
    },
    'language-preferences': {
      label: 'Language Preferences',
      component: View2,
    },
    'apps-and-websites': {
      label: 'Apps and websites',
      component: View2,
    },
    'email-notifications': {
      label: 'Email Notifications',
      component: View2,
    },
    'push-notifications': {
      label: 'Push Notifications',
      component: View2,
    },
    'what-you-see': {
      label: 'What you see',
      component: View2,
    },
    'who-can-see-your-content': {
      label: 'Who can see your content',
      component: View2,
    },
    'how-others-can-interact-with-you': {
      label: 'How others can interact with you',
      component: View2,
    },
    supervision: { label: 'Supervision', component: View2 },
    help: { label: 'Help', component: View2 },
  }

  const Component = !router.query.tab
    ? faqList['edit-profile'].component
    : faqList[router.query.tab].component

  return (
    <div className="flex h-full flex-col">
      <div className="flex h-full w-full pt-4">
        <div className="flex w-[235px] flex-col gap-y-4 overflow-y-auto pl-5 pr-2 pt-2 md:w-[315px] md:pr-5">
          <AccountsCenterSection />
          <AccountFAQ faqList={faqList} />
        </div>
        <LineBreak className="my-0 h-full w-[1px]" />
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
