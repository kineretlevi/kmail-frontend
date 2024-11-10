import { emailsRequests } from '../../api/axiosConfig'
import { attachedFiles, emailStructure } from '../../constants/types'
import { updateAllEmails } from '../slices/emails.slice'
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

export const postNewEmail = (sender: string, receiver: string, subject: string, body: string, files: attachedFiles[]) => {
    return async(dispatch: AppDispatch) => {
        const postUserNewEmail = async() => {
            console.log("files");
            
            const postEmail = await emailsRequests.addNewEmail(sender, receiver, subject, body, files);

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
            await postUserNewEmail();
            // dispatch(updateUiState({
            //     status: "success",
            //     title: "Success!",
            //     message: "Fetching all emails data succeeded"
            // }))
        } catch (error) {
            dispatch(updateUiState({
                status: "error",
                title: "Error!",
                message: "Fetching all emails data failed"
            }))
        }
    }
}