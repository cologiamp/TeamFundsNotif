import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PostProvider } from '../../providers/post-provider';
import { Storage } from '@ionic/Storage';

/**
 * Generated class for the CustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html',
})
export class CustomerPage {

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
    console.log('ionViewDidLoad CustomerPage');
  }


  ngOnInit() {
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
        this.loadCustomer();      

      }
    });
  
  }

  addCustomer(){

  	this.navCtrl.push('AddCustomerPage');

  }

  updateCustomer(id,name,desc){

  	this.navCtrl.push('AddCustomerPage', {
  		'id': id,
  		'name': name,
  		'desc': desc
  	});

  	//this.router.navigate(['/addcustomer/' + id + '/' + name + '/' + desc]);
  }

  showCustomer(id,name,desc){

  	this.navCtrl.push('ShowCustomerPage', {
  		'id': id,
  		'name': name,
  		'desc': desc
  	});
  	
  	//this.router.navigate(['/showcustomer/' + id + '/' + name + '/' + desc]);
  }

  doRefresh(event){
  	setTimeout(() =>{
  		this.ionViewWillEnter();
  		event.target.complete();
  	}, 500);
  }

  loadData(event:any){
  	this.start += this.limit;
  	setTimeout(() =>{
  	this.loadCustomer().then(()=>{
  		event.target.complete();
  	});
  	}, 500);
  }

  delCustomer(id){

  	let body = {
  			aksi : 'delete',
  			customer_id : id
  		};

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
  			this.ionViewWillEnter();
  		});

  }

  loadCustomer(){
  	return new Promise(resolve => {
  		let body = {
  			aksi : 'getdata',
  			limit : this.limit,
  			start : this.start,
        apikey: this.apikey
  		};

  		this.postPvdr.postDataCustomer(body, 'proses-api.php').subscribe(data => {
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

  async prosesLogout(){
    this.storage.clear();
    this.navCtrl.setRoot('LoginPage');
    //this.router.navigate(['/login']);
    const toast = await this.toastCtrl.create({
        message: 'logout succesful',
        duration: 3000
      });
    toast.present();
  }

}
