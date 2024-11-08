import axios from 'axios';
import { attachedFiles } from '../constants/types';

const SERVER_URL = process.env.REACT_APP_SERVER_URL || ""
console.log("SERVER_URL", SERVER_URL)

export const axiosInstance = axios.create({
  baseURL: SERVER_URL,
  // withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Objects to define all the axios requests to the server divided by entities.
const emailsRequests = {
    getEmails: async ()  => {
      return axiosInstance.get('/api/get-emails');
    },
    addNewEmail: async (sender: string, receiver: string, subject: string, body: string, files: attachedFiles[])  => {
      return axiosInstance.post('/api/add-email', 
        {
          sender: sender, 
          receiver: receiver, 
          subject: subject,
          body: body,
          files: files,
        }
      );
    },
    // func2: async (attributes) => {
    //     return axiosInstance.post('/api/route', 
    //         {
    //           paramName1: param1,
    //           paramName2: param2,
    //         },
    //     );
    // },
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
