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
      console.log(res);
//      this.username = this.anggota.username;
      console.log(res);

      if(!this.anggota){

        this.navCtrl.push('LoginPage');

      }else{

        this.username = this.anggota.username;
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
  		};

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
        console.log("POSTDATA loadCustomer");
  			for(let customer of data.result){
  				this.customers.push(customer);
  			}
  			resolve(true);
  		});
  	});
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
