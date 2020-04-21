import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { PostProvider } from '../../providers/post-provider';
import { Storage } from '@ionic/Storage';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username: string;
  password: string;


  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   private postPvdr: PostProvider,
   private storage: Storage,
   public toastCtrl: ToastController) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  async prosesLogin(){

    if(this.username != "" && this.username != ""){
      let body = {
        username: this.username,
        password: this.password,
        aksi: 'login'
      };

      this.postPvdr.postData(body, 'proses-api.php').subscribe(async data =>{
        var alertpesan = data.msg;
        if(data.success){

          this.storage.set('session_storage', data.result);
          //this.router.navigate(['/customer']);
          this.navCtrl.setRoot('CustomerPage');
          const toast = await this.toastCtrl.create({
    		    message: 'Login Succesfully.',
    		  	duration: 2000
    		  });
    		  toast.present();
    		  this.username = "";
    		  this.password = "";
          console.log(data);

        }else{

          const toast = await this.toastCtrl.create({
    		    message: alertpesan,
    		    duration: 2000
    		  });
        	  toast.present();
            }
          });

      }else{
        const toast = await this.toastCtrl.create({
  		message: 'Username or Password Invalid.',
  		duration: 2000
  	  });
  	  toast.present();
      }
  }

  formRegister(){
  	this.navCtrl.push('RegisterPage');
  	//this.router.navigate(['/register']);
  }

  formCustomer(){
  	this.navCtrl.setRoot('CustomerPage');
    //this.router.navigate(['/customer']);
  }


}
