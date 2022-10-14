import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import * as constant from './constants';
import { BehaviorSubject } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';



declare var $: any;


@Injectable()
export class HttpService {
    public readonly apiEndpoint: String;
    constructor(
        private router: Router, public http: HttpClient, public toastr: ToastrService,
        @Inject(DOCUMENT) public document: any, public fb: FormBuilder,
    ) {
        this.apiEndpoint = environment.apiBaseUrl;
    }

    postData(url, payload) {
        return this.http.post<any>(this.apiEndpoint + url, payload);
    }

    getData(url) {
        return this.http.get<any>(this.apiEndpoint + url);
    }

    getDataParams(url, payload) {
        var id = payload.videoId
        var form_data = new FormData();

        for (var key in payload) {
            form_data.append(key, payload[key]);

        }
        return this.http.post<any>(this.apiEndpoint + url + '/' + id, form_data);
    }
    getDataParamsList(url, obj?, isLoading?: boolean) {

        let params = new HttpParams();
        if (obj) {
            Object.keys(obj).forEach(key => {
                if (obj[key] !== '' && obj[key] !== undefined) {
                    params = params.set(key, obj[key]);
                }
            });
        }
        return this.http.get<any>(this.apiEndpoint + url, { params: params, reportProgress: isLoading });

    }
    getDetailsById(url, id) {
        return this.http.get<any>(this.apiEndpoint + url + '/' + id);
    }

    deleteById(url, id) {
        return this.http.delete(this.apiEndpoint + url + '/' + id);
    }
}

