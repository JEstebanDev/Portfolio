import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-snippet-contact',
  templateUrl: './snippet-contact.component.html',
  styles: [],
})
export class SnippetContactComponent implements OnInit {
  @Input() contact!: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
