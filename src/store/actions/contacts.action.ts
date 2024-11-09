import { contactRequest } from '../../api/axiosConfig'
import { contactDetails } from '../../constants/types'
import { updateContactsState } from '../slices/contacts.slice'
import { updateUiState } from '../slices/ui.slice'
import { AppDispatch } from '../store'

export const fetchContactsData = () => {
    return async(dispatch: AppDispatch) => {
        const fetchContacts = async(): Promise<contactDetails[]> => {
            const res = await contactRequest.getAllContact();
                        
            if (res.status !== 200) {
                throw new Error('Could not fetch contact details')
            }

            return res.data
        }

        try {
            dispatch(updateUiState({
                status: "pending",
                title: "Pending",
                message: "loading data..."
            }))
            const contactsData = await fetchContacts();
            dispatch(updateContactsState(contactsData))
            dispatch(updateUiState({
                status: "success",
                title: "Success!",
                message: "Fetching contacts data succeeded"
            }))
        } catch (error) {
            dispatch(updateUiState({
                status: "error",
                title: "Error!",
                message: "Fetching contacts data failed"
            }))

        }
    }
}