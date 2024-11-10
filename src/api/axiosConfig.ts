import axios from 'axios';
import { attachedFiles } from '../constants/types';

const SERVER_URL = process.env.REACT_APP_SERVER_URL || ""

export const axiosInstance = axios.create({
  baseURL: SERVER_URL,
  // withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Objects to define all the axios requests to the server divided by entities.
const emailsRequests = {
    getAllEmails: async (user: string)  => {
      return axiosInstance.get(`/api/get-emails/${user}`);
    },
    getAllSentEmails: async (user: string)  => {
      return axiosInstance.get(`/api/get-emails/sent/${user}`);
    },
    getAllReceivedEmails: async (user: string)  => {
      return axiosInstance.get(`/api/get-emails/received/${user}`);
    },
    addNewEmail: async (emailDetails: FormData)  => {
      return axiosInstance.post('/api/add-email', emailDetails,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        }
      );
    },
}

const contactRequest = {
  getAllContact: async ()  => {
    return axiosInstance.get('/api/get-contacts');
  },
}

export {
  emailsRequests,
  contactRequest
};
