 

export interface DocumentType {
    description: string;
    docTypeID: number;
}

export interface AttributeOption {
    optionID: number;
    name: string;
    description: string;
}
 

export interface DocumentAttribute {
    attrID: number;
    label: string;
    typeOfAttribute: string;
    length: number;
    S3B_path?: string;
    imageData?: any;
    docAttrID: number;
    expirationTime: number;
    value: string;
    required: boolean;
    hidden: boolean;
    systemGenerated?: number;
    cropped?: boolean;
    options?: AttributeOption[]; 
}

export interface DocumentData {
    docID: number;
    cid: string;
    docListID: number;
    docName: string;
    docStatus: string;
    docSchema: string;
    docType: DocumentType;
    docTypes: DocumentType[],
    addMore: number,
    attributes: DocumentAttribute[],
    guidelines: string[];
    thinkificCourse?: string;
    docStatusID: number;
    uploaderUserId: number;
    reviewerUserId: number;
    reviewDate: string;
    uploadDate: string;
    replacementDocId: number;
    expiring: string;
    docUser: number;
    name?: string;
    state?: string;
    reviewer?: string;
    expdate?: string;
    datecreated: string
    docTypeID: string;
    expired: string;
    action?: {
        label: string;
        link: string;
    }
    history?: DocumentData[];
    chain?: DocumentData[];
    expanded?: boolean;
    rejectionReason: string;
    expirationDate?: string;
    status?: string;
}
