import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService {
    private username = 'vikash1993';
    private client_id = 'f3ca086283616c9768ac';
    private client_secret = '46c99745768434504311ddd2aca26a9516018296';

    constructor(private _http: Http){
        console.log('git service');
    }

    getUser(){
        return this._http.get('https://api.github.com/users/' + this.username)
        .map(res => res.json());
    }

    getRepos(){
        return this._http.get('https://api.github.com/users/' + this.username+ '/repos')
        .map(res => res.json());
    }

    updateUsername(username: string){
        this.username = username;
    }
}