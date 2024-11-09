import { useEffect } from 'react'
import { useAppSelector } from '../../store/store.hook'
import EmailTable from '../mailTable/emailTable/EmailTable'
import ContactTable from '../mailTable/contactTable/ContactTable'
import EmailStructure from '../emailStructure/EmailStructure'

interface IContentFactoryProps {}

const ContentFactory: React.FC<IContentFactoryProps> = () => {
  const page = useAppSelector((state) => state.page.page)
  const emailDetails = useAppSelector((state) => state.emailDetails.emailDetails)
  const { allEmails, receivedEmails, sentEmails } = useAppSelector((state) => state.emails)

  useEffect(() => {
    console.log('allEmails', allEmails)
    console.log('receivedEmails', receivedEmails)
    console.log('sentEmails', sentEmails)
  })

  return page === 'All' ? (
    <EmailTable emails={allEmails} />
  ) : page === 'Sent' ? (
    <EmailTable emails={sentEmails} />
  ) : page === 'Received' ? (
    <EmailTable emails={receivedEmails} />
  ) : page === 'Contacts' ? (
    <ContactTable />
  ) : page === 'Email' ? (
    <EmailStructure emailDetails={emailDetails} />
  ) : (
    <EmailStructure />
  )
}

export default ContentFactory
