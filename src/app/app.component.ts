import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private translate: TranslateService,
  ) {
    const lng = localStorage.getItem('language');
    if (!lng || lng === null) {
      localStorage.setItem('language', 'en');
    }
    this.translate.use(localStorage.getItem('language'));
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
  
      this.platform.backButton.subscribe(async () => {
        console.log('asd', this.router.url, 'ad', this.router.isActive('/tabs/', true))
        if (this.router.url.includes('/tabs/') || this.router.url.includes('/login')) {
          navigator['app'].exitApp();
        }
      });
      this.statusBar.backgroundColorByHexString('#006a2b');
      this.splashScreen.hide();
    });
  }
}
