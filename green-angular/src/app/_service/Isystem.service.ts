import { Injectable } from '@angular/core';
import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import * as moment from 'moment';

import { NotificationsService } from './notifications.service';
import { BaseResponseModel } from '../models/BaseResponseModel';
import { UtilService } from './util.service';
import { HttpStatus } from '../enums/HttpStatus.enum';
import { ISYSTEM_EXCLUSIONS } from '../constants/IsystemExclusions';
import { EMPTY } from 'rxjs';

const httpOptions = {
  // withCredentials: true,
  observe: 'response' as 'response'
};

@Injectable({
  providedIn: 'root'
})
export class IsystemService {

  
  private baseUrl = UtilService.IsystemUrl();
  private exclusions = ISYSTEM_EXCLUSIONS.slice(); 
  private exclusionUrl = UtilService.IsystemBypassUrl();

  constructor(
    private http: HttpClient
  ) { }

  post<T = HttpResponseBase>(file: string, body: any, options?: any) {
    return this.http.post<T>(this.getFullPath(file), body, httpOptions).pipe(
      map(res => res.body)
    );
  }

  get<T = HttpResponseBase>(file: string, params?: any) {
    return this.http.get<T>(this.getFullPath(file), {observe: 'response' as 'response', params}).pipe(
      map(res => res.body)
    );
  }

  getBlob(file: string, params?: any) {
    return this.http.get(this.getFullPath(file), {params, responseType: 'blob'});
  }

  getImage(key: string) {
    return this.http.get(`${this.baseUrl}/OPS/getImage.php`, {params: {key}, responseType: 'blob'});
  }

 
  private getFullPath(file: string) {
    return `${this.exclusions.some(url => file.includes(url)) ? this.exclusionUrl : this.baseUrl}/${file}`;
  }
}
