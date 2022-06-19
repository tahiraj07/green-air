import { Injectable } from '@angular/core'; 
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  private static _baseUrl = environment.BASE_URL;
  constructor() { }

  static IsProduction(): boolean {
    return environment.production;
  }
  static IsystemBypassUrl(): string {
    return `${this._baseUrl}`;
  }
  static IsystemUrl(): string {
    return `${this._baseUrl}`;
  }
 
  static DocumentUrl(): string {
    return `${this._baseUrl}/document`;
  }

  static DocumentJavaUrl(): string {
    return `${this._baseUrl}/documents`;
  }

  static JWTUrl(): string {
    return `${this._baseUrl}/jwt`;
  }

  static SearchengineUrl(): string {
    return `${this._baseUrl}/searchengine`;
  }

  static OnboardingUrl(): string {
    return `${this._baseUrl}/onboarding`;
  } 

  static JavaAuthUrl(): string {
    return `${this._baseUrl}/auth`;
  }

  static ShiftUrl(): string {
    return `${this._baseUrl}/shift`;
  }

  static MobileScreenUrl(): string {
    return `${this._baseUrl}/mobilescreenservice`;
  }

  static PayrollServiceUrl(): string {
    return `${this._baseUrl}/payroll`;
  }
}
