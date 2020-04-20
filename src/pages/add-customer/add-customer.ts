import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostProvider } from '../../providers/post-provider';

/**
 * Generated class for the AddCustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-customer',
  templateUrl: 'add-customer.html',
})
export class AddCustomerPage {

  name_customer: string = "";
  desc_customer: string = "";
  id: number;

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams, 
  	private postPvdr: PostProvider){

  	this.id = navParams.get('id');
    this.name_customer = navParams.get('name');
    this.desc_customer = navParams.get('desc');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCustomerPage');
  }

  ngOnInit() {
  	/*
  	this.actRoute.params.subscribe((data: any) =>{
  		this.id = data.id;
  		this.name_customer = data.name;
  		this.desc_customer = data.desc;
  		console.log(data);
  	});
  	*/
  }

  createdProses(){
  	return new Promise(resolve => {
  		let body = {
  			aksi : 'add',
  			name_customer : this.name_customer,
  			desc_customer : this.desc_customer,
  		};

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
  			//this.router.navigate(['/customer']);
  			this.navCtrl.setRoot('CustomerPage');
  			console.log('OK');
  		});
  	});

  }

  updateProses(){
  	return new Promise(resolve => {
  		let body = {
  			aksi : 'update',
  			customer_id : this.id,
  			name_customer : this.name_customer,
  			desc_customer : this.desc_customer,
  		};

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
  			//this.router.navigate(['/customer']);
  			this.navCtrl.setRoot('CustomerPage');
  			console.log('OK');
  		});
  	});

  }

}
