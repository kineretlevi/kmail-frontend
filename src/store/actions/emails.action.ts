import { emailsRequests } from '../../api/axiosConfig'
import { emailStructure } from '../../constants/types'
import { IEmailsState, updateAllEmails } from '../slices/emails.slice'
import { updateUiState } from '../slices/ui.slice'
import { AppDispatch } from '../store'

export const fetchAllEmailsData = (user: string, emails: IEmailsState) => {
    return async(dispatch: AppDispatch) => {
        const fetchAllEmails = async(): Promise<{[key: string]: emailStructure[]}> => {
            const allEmailsRes = await emailsRequests.getAllEmails(user);
            const allSentEmailRes = await emailsRequests.getAllSentEmails(user);
            const allReceivedEmailsRes = await emailsRequests.getAllReceivedEmails(user);

            if (allEmailsRes.status !== 200 && allSentEmailRes.status !== 200 && allReceivedEmailsRes.status !== 200) {
                throw new Error('Could not fetch user emails')
            }

            return {allEmailsRes: allEmailsRes.data, allSentEmailRes: allSentEmailRes.data, allReceivedEmailsRes: allReceivedEmailsRes.data}
        }

        try {
            const emailsFromDb = await fetchAllEmails();
            const newEmails = {
                allEmails: emailsFromDb.allEmailsRes,
                sentEmails: emailsFromDb.allSentEmailRes,
                receivedEmails: emailsFromDb.allReceivedEmailsRes
            }
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

// export const fetchSentEmailsData = (user: string, emails: IEmailsState) => {
//     return async(dispatch: AppDispatch) => {
//         const fetchAllSentEmails = async(): Promise<emailStructure[]> => {
//             const res = await emailsRequests.getAllSentEmails(user);
                        
//             if (res.status !== 200) {
//                 throw new Error('Could not fetch the emails user sent')
//             }

//             return res.data
//         }

//         try {
//             const allSentEmailsOfUser = await fetchAllSentEmails();
//             const newEmails = {
//                 allEmails: emails.allEmails,
//                 sentEmails: allSentEmailsOfUser,
//                 receivedEmails: emails.receivedEmails
//             }
//             dispatch(updateSentEmails(newEmails))
//             dispatch(updateUiState({
//                 status: "success",
//                 title: "Success!",
//                 message: "Fetching all sent emails data succeeded"
//             }))
//         } catch (error) {
//             dispatch(updateUiState({
//                 status: "error",
//                 title: "Error!",
//                 message: "Fetching all sent emails data failed"
//             }))

//         }
//     }
// }

// export const fetchReceivedEmailsData = (user: string, emails: IEmailsState) => {
//     return async(dispatch: AppDispatch) => {
//         const fetchAllReceivedEmails = async(): Promise<emailStructure[]> => {
//             const res = await emailsRequests.getAllReceivedEmails(user);
                        
//             if (res.status !== 200) {
//                 throw new Error('Could not fetch the emails user received')
//             }

//             return res.data
//         }

//         try {
//             const allReceivedEmailsOfUser = await fetchAllReceivedEmails();
//             const newEmails = {
//                 allEmails: emails.allEmails,
//                 sentEmails: emails.sentEmails,
//                 receivedEmails: allReceivedEmailsOfUser
//             }
//             dispatch(updateSentEmails(newEmails))
//             dispatch(updateUiState({
//                 status: "success",
//                 title: "Success!",
//                 message: "Fetching all received emails data succeeded"
//             }))
//         } catch (error) {
//             dispatch(updateUiState({
//                 status: "error",
//                 title: "Error!",
//                 message: "Fetching all received emails data failed"
//             }))

//         }
//     }
// }