import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
import { SigninwithmobilePage } from '../pages/signinwithmobile/signinwithmobile';
import { InitialPageModule } from '../pages/initial/initial.module';

//page module
import {SigninwithsmsPageModule} from '../pages/signinwithsms/signinwithsms.module';

@NgModule({
  declarations: [
    MyApp,
    SigninwithmobilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    InitialPageModule,
    SigninwithsmsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SigninwithmobilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
