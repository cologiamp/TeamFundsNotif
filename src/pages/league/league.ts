import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PostProvider } from '../../providers/post-provider';
import { GetProvider } from '../../providers/get-provider';
import { Storage } from '@ionic/Storage';

/**
 * Generated class for the LeaguePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-league',
  templateUrl: 'league.html',
})
export class LeaguePage {

  anggota: any;
  username: string;
  apikey: any;
  
  customers: any = [];
  league: any;
  limit: number = 13; // LIMIT GET PERDATA
  start: number = 0;

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	private postPvdr: PostProvider,
  	private getPvdr: GetProvider,
    private storage: Storage,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaguePage');
  }

  ionViewWillEnter(){
  	this.loadLeague();  

  	/*
    this.storage.get('session_storage').then((res)=>{
      this.anggota = res;
      console.log('session_storage');
      console.log(res);

      if(!this.anggota){

        this.navCtrl.setRoot('LoginPage');

      }else{

        this.username = this.anggota.username;
        this.apikey = this.anggota.apikey;
        this.customers = [];
        this.start = 0;
        this.loadLeague();      

      }
    });
    */
  
  }


  loadLeague(){
  	return new Promise(resolve => {
  		let body = {
  			aksi : 'getdata',
  			limit : this.limit,
  			start : this.start,
  			apikey: this.apikey
  		};
  	//https://www.sofascore.com/u-tournament/40/season/26784/json
  	//https://www.sofascore.com/u-tournament/40/season/26784/json
	// 	this.getPvdr.getData('proses-api-get.php/u-tournament/40/season/26784/json').subscribe(data => {
 	this.getPvdr.getDataSC('u-tournament/40/season/26784/json').subscribe(data => {

        console.log("getData loadCustomer");
        console.log(data);
        alert(JSON.stringify(data));
        	/*
  			for(let customer of data.result){
  				this.customers.push(customer);
  			}
  			*/
  			resolve(true);
  		});
  	});
  }


}
