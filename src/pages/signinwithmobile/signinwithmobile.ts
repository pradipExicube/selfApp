import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SigninwithsmsPage } from '../signinwithsms/signinwithsms';

@Component({
  selector: 'page-home',
  templateUrl: 'signinwithmobile.html'
})
export class SigninwithmobilePage {

  public mobile:any='';
  public password:any='';
  public errorMobile:any;
  public errorPassword:any;

  constructor(public navCtrl: NavController) {
  }

  public crossFunction(){
    this.navCtrl.pop();
  }

  public signinwithSMS(){
    this.navCtrl.push(SigninwithsmsPage);
  }

  public signinwithMobile(){
      if( this.mobile == '' ||this.mobile ==null || this.mobile == undefined || this.password == '' ||this.password ==null || this.password == undefined ){

      if(this.mobile == '' || this.mobile ==null || this.mobile == undefined){

          this.errorMobile = 'animated shake';
          setTimeout(() => {
            this.errorMobile=''
          }, 1000);

      }else if(this.password == '' ||this.password ==null || this.password == undefined){

          this.errorPassword='animated shake';
          setTimeout(() => {
            this.errorPassword=''
          }, 1000);

      }
    } else{

    }
  }

}
