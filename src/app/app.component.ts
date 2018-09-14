import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { SigninwithmobilePage } from '../pages/signinwithmobile/signinwithmobile';
import { InitialPage } from '../pages/initial/initial';
import { SigninwithsmsPage } from '../pages/signinwithsms/signinwithsms';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SigninwithsmsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

