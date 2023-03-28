import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [],
})
export class NavComponent implements OnInit {
  constructor(private route: Router) {
    route.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.router = event.url.split('/', 2)[1];
      });
  }
  router: string = '';
  ngOnInit() {
    this.router = this.route.url.split('/', 2)[1];
  }
  mobileNavbar: boolean = false;
  navbar() {
    this.mobileNavbar = !this.mobileNavbar;
  }
  hidePopup() {
    this.mobileNavbar = false;
  }
}
