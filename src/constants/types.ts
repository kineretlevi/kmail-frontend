export type emailStructure = {
    id: string,
    sender: string,
    receiver: string,
    subject: string,
    body: string,
    createdAt: Date,
    attachedFile: attachedFiles[]
}

export type appEmailStructure = {
    sender: string,
    receiver: string,
    subject: string,
    body: string,
    attachedFile: attachedFiles[]
}

export type attachedFiles = {
    id: string,
    filename: string,
    fileContent: ArrayBuffer
}

export type userDetailes = {
    id: string,
    name: string,
    password: string,
    contacts: contactDetails[]
}

export type contactDetails = {
    id: string,
    name: string,
    createdAt: Date
}

export const appUser = "kineret@kmail.com"

export type pageType = "All" | "Sent" | "Received" | "Contacts" | "New Email" | "Email"