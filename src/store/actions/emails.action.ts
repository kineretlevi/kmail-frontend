import { emailsRequests } from '../../api/axiosConfig'
import { appUser, attachedFiles, emailStructure } from '../../constants/types'
import { updateAllEmails } from '../slices/emails.slice'
import { updatePageState } from '../slices/page.slice'
import { updateUiState } from '../slices/ui.slice'
import { AppDispatch } from '../store'

export const fetchAllEmailsData = (user: string) => {
    return async(dispatch: AppDispatch) => {
        const fetchAllEmails = async(): Promise<{[key: string]: emailStructure[]}> => {
            console.log("in fetch all emails");
            
            const allEmailsRes = await emailsRequests.getAllEmails(user);
            const allSentEmailRes = await emailsRequests.getAllSentEmails(user);
            const allReceivedEmailsRes = await emailsRequests.getAllReceivedEmails(user);

            if (allEmailsRes.status !== 200 && allSentEmailRes.status !== 200 && allReceivedEmailsRes.status !== 200) {
                throw new Error('Could not fetch user emails')
            }

            return {allEmailsRes: allEmailsRes.data, allSentEmailRes: allSentEmailRes.data, allReceivedEmailsRes: allReceivedEmailsRes.data}
        }

        try {
             dispatch(updateUiState({
                status: "pending",
                title: "Pending",
                message: "loading data..."
            }))
            const emailsFromDb = await fetchAllEmails();
            const newEmails = {
                allEmails: emailsFromDb.allEmailsRes,
                sentEmails: emailsFromDb.allSentEmailRes,
                receivedEmails: emailsFromDb.allReceivedEmailsRes
            }
            console.log("newEmails", newEmails)
            dispatch(updateAllEmails(newEmails))
            dispatch(updateUiState({
                status: "success",
                title: "Success!",
                message: "Fetching all emails data succeeded"
            }))
        } catch (error) {
            dispatch(updateUiState({
                status: "error",
                title: "Error!",
                message: "Fetching all emails data failed"
            }))

        }
    }
}

export const postNewEmail = (emailDetails: FormData) => {
    return async(dispatch: AppDispatch) => {
        const postUserNewEmail = async() => {
            const postEmail = await emailsRequests.addNewEmail(emailDetails);

            if (postEmail.status !== 201 ) {
                throw new Error('Could not post new email')
            }

            return postEmail
        }

        try {
             dispatch(updateUiState({
                status: "pending",
                title: "Pending",
                message: "loading data..."
            }))
            const res = await postUserNewEmail();
            if (res.status === 201) {
                dispatch(fetchAllEmailsData(appUser))
                dispatch(updatePageState({ page: 'All' }))
            }
        } catch (error) {
            dispatch(updateUiState({
                status: "error",
                title: "Error!",
                message: "Fetching all emails data failed"
            }))
        }
    }
}