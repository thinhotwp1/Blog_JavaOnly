import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Java Only';
  isHomeActive: boolean  = true ;
  isBackendActive: boolean  = false ;
  isFrontendActive: boolean  = false ;
  isAboutActive: boolean  = false ;
  isDevopsActive: boolean  = false ;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHomeActive = event.url === '/';
        this.isBackendActive = event.url.includes('/backend'); // Nếu trang chứa backend sẽ trả về boolean này là true
        this.isFrontendActive = event.url.includes('/frontend'); // Nếu trang chứa frontend sẽ trả về boolean này là true
        this.isAboutActive = event.url.includes('/about'); // Nếu trang chứa about sẽ trả về boolean này là true
        this.isDevopsActive = event.url.includes('/devops'); // Nếu trang chứa devops sẽ trả về boolean này là true
      }
    });
  }
}
