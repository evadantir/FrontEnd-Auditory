import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

	accountAPIUrl: string = "http://localhost:2222/";
	
	register(nim: string, email: string, accountName: string, password: string) {
		return this.http.post(this.accountAPIUrl, JSON.stringify({ nim, email, accountName, password}))
            .map((response: Response) => {
				
			});
	}
	
    login(username: string, password: string) {
        return this.http.get(this.accountAPIUrl).map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}