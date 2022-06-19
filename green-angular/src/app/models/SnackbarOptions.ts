import { MatSnackBarConfig } from '@angular/material/snack-bar';

export interface SnackbarOptions {
    message: string;
    skip?: boolean;
    buttonName?: string;
    options: MatSnackBarConfig;
}
