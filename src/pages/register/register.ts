import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { PostProvider } from '../../providers/post-provider';
import { Storage } from '@ionic/Storage';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  username: string = "";
  password: string = "";
  confirm_password: string = "";

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	private postPvdr: PostProvider,
  	private storage: Storage,
  	public toastCtrl: ToastController
  	) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }


  async prosesRegister(){
    // validation done
    if(this.username==""){
    	
        const toast = await this.toastCtrl.create({
          message: 'Username is required',
          duration: 3000
        });
        toast.present();

    }else if(this.password==""){

        const toast = await this.toastCtrl.create({
          message: 'Password is required',
          duration: 3000
        });
        toast.present();

    }else if(this.password!=this.confirm_password){

        const toast = await this.toastCtrl.create({
          message: 'Invalid password',
          duration: 3000
        });
        toast.present();

    }else{

      let body = {
        username: this.username,
        password: this.password,
        aksi: 'register'
      };

      this.postPvdr.postData(body, 'proses-api.php').subscribe(async data =>{
        var alertpesan = data.msg;
        
        if(data.success){

          this.navCtrl.push('LoginPage');
          //this.router.navigate(['/login']);
          const toast = await this.toastCtrl.create({
            message: 'Register succesful',
            duration: 3000
          });
          toast.present();

        }else{
          const toast = await this.toastCtrl.create({
            message: alertpesan,
            duration: 3000
          });
          toast.present();
        }

      });

    }
  
  }

  formLogin(){
  	this.navCtrl.push('LoginPage');
  	//this.router.navigate(['/login']);
  }

}
