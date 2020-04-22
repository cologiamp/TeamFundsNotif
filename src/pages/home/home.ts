import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PostProvider } from '../../providers/post-provider';
import { Storage } from '@ionic/Storage';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {


  anggota: any;
  username: string;
  apikey: any;
  
  customers: any = [];
  limit: number = 13; // LIMIT GET PERDATA
  start: number = 0;


  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	private postPvdr: PostProvider,
    private storage: Storage,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  ionViewWillEnter(){
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
        this.loadLiveGames();      

      }
    });
  
  }


  loadLiveGames(){
  	return new Promise(resolve => {
  		let body = {
  			aksi : 'getdata',
  			limit : this.limit,
  			start : this.start,
        	apikey: this.apikey
  		};

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
        console.log("POSTDATA loadCustomer");
        if(data.success){
          for(let customer of data.result){
            this.customers.push(customer);
          }
          resolve(true);
        }else{

          alert(data.msg);
          this.prosesAutoLogout();

        }

  		});
  	});
  }

  async prosesAutoLogout(){
    this.storage.clear();
    this.navCtrl.setRoot('LoginPage');
    //this.router.navigate(['/login']);
    const toast = await this.toastCtrl.create({
        message: 'Too many active sessions, please log in again',
        duration: 3000
      });
    toast.present();
  }

}
