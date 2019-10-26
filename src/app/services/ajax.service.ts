import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AjaxService {
    constructor(public http: HttpClient) { }

    public async get<T>(url: string, params?: {}) {
        const headers = {
            'Content-type': 'application/json; charset=UTF-8'
        };

        return this.http.get<T>(url, { headers, params }).toPromise();
    }

    public async post<T>(url: string, body: any = {}) {
        const options = {
            headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        };

        return this.http.post<T>(url, body, options).toPromise();
    }

    public async put<T>(url: string, body: any = {}) {
        const options = {
            headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        };

        return this.http.put<T>(url, body, options).toPromise();
    }

    public async downloadFile(url: string, type: string) {
        const options = {
            responseType: 'blob' as 'blob'
        };

        return this.http.get(url, options).toPromise();
    }

}
