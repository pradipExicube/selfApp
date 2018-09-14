import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SigninwithsmsPage } from '../signinwithsms/signinwithsms';

@Component({
  selector: 'page-home',
  templateUrl: 'signinwithmobile.html'
})
export class SigninwithmobilePage {

  constructor(public navCtrl: NavController) {

  }

  public crossFunction(){
    this.navCtrl.pop();
  }

  public signinwithSMS(){
    this.navCtrl.push(SigninwithsmsPage);
  }

}
