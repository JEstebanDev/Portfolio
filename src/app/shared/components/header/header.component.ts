import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
declare function runGame(): any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    runGame();
    this.typeMessage();
  }
  @ViewChild('mHTML') mHTML!: ElementRef;

  messages: string[] = ['FullStack Developer', 'UI & UX Designer'];
  currentMessageIndex = 0;
  currentStr = '';

  typeMessage(): void {
    if (!this.messages[this.currentMessageIndex]) {
      this.currentMessageIndex = 0;
    }
    this.currentStr = this.messages[this.currentMessageIndex];
    const parts = this.currentStr.split('');
    let part = '';
    let currentLetterIndex = 0;
    const int1 = setInterval(() => {
      if (!parts[currentLetterIndex]) {
        this.currentMessageIndex++;
        setTimeout(() => {
          this.deleteMessage(part);
        }, 500);
        clearInterval(int1);
      } else {
        part += parts[currentLetterIndex++];
        this.mHTML.nativeElement.innerHTML = part;
      }
    }, 100);
  }

  deleteMessage(str: string): void {
    const parts = str.split('');
    const int = setInterval(() => {
      if (parts.length === 0) {
        setTimeout(() => {
          this.typeMessage();
        }, 500);
        clearInterval(int);
      } else {
        parts.pop();
        str = parts.join('');
        this.mHTML.nativeElement.innerHTML = str;
      }
    }, 50);
  }
}
