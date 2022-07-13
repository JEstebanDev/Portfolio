import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styles: [],
})
export class SideBarComponent implements OnInit {
  showItems: boolean = false;
  showContact: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
