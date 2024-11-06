export type emailStructure = {
    id: string,
    sender: string,
    receiver: string,
    subject: string,
    body: string,
    createdAt: Date,
    attachedFiles: attachedFiles[]
}

export type attachedFiles = {
    id: string,
    name: string,
    file: string
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
}