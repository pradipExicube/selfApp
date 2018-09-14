import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SigninwithsmsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signinwithsms',
  templateUrl: 'signinwithsms.html',
})
export class SigninwithsmsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public crossFunction(){
    this.navCtrl.pop();
  }

}
