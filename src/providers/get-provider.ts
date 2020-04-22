import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetProvider {
	server: string = "http://localhost:80/teamfunds/server_api/"; // default
	serverSC: string = "https://www.sofascore.com/"
	// if you test in real device "http://localhost" change use the your IP	
    // server: string = "http://192.199.122.100/IONIC4_CRUD_LOGINREGIS_PHP_MYSQL/server_api/"; 

	constructor(public http : Http) {

	}

	postData(body, file){
		let type = "application/json; charset=UTF-8";
		let headers = new Headers({ 'Content-Type': type });
		let options = new RequestOptions({ headers: headers });

		return this.http.post(this.server + file, JSON.stringify(body), options)
		.map(res => res.json());
	}

  	getData(file) {

  		//let type = "application/json; charset=UTF-8";
		//let headers = new Headers({ 'Content-Type': type });
		let headers = new Headers();
		//let options = new RequestOptions({ headers: headers });

		return this.http.get(this.server + file, { headers: headers })
		.map(res => res.json());

  	}

  	 getDataSC(file) {

  		//let type = "application/json; charset=UTF-8";
		//let headers = new Headers({ 'Content-Type': type });
		let headers = new Headers();
		//let options = new RequestOptions({ headers: headers });

		return this.http.get(this.serverSC + file, { headers: headers })
		.map(res => res.json());

  	}


	
}