import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [],
})
export class NavComponent implements OnInit {
  constructor(private route: Router) {}
  router: string = '';
  ngOnInit() {
    this.router = this.route.url.split('/', 2)[1];
  }
}
