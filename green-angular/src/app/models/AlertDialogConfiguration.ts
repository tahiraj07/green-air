export interface AlertDialogConfiguration {
    title: string;
    confirmOnly: boolean;
    message: string;
    confirmButton: string;
    submessages?: string[];
    cancelButton?: string;
    headerStyles?: {
        [styleName: string]: string;
    };
    bodyStyles?: {
        [styleName: string]: string;
    };
    messageStyles?: {
        [styleName: string]: string;
    };
    submessageStyles?: {
        [styleName: string]: string;
    };
    cancelButtonStyles?: {
        [styleName: string]: string;
    };
    confirmButtonStyles?: {
        [styleName: string]: string;
    };
    data?: any;
    headerClasses?: string[];
}
