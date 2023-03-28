import { Component, OnInit } from '@angular/core';
declare function runGame(): any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  constructor() {}
  text!: HTMLElement;
  words = ['Full Stack Developer', 'Front End Developer', 'Back End Developer'];
  ngOnInit(): void {
    runGame();
    this.text = document.querySelector('.typing-text')!;
    this.setType(this.text, this.words);
  }

  setType(element: HTMLElement, words: string[]) {
    const LETTER_TYPE_DELAY = 75;
    const WORD_STAY_DELAY = 2000;
    const DIRECTION_FORWARDS = 0;
    const DIRECTION_BACKWARDS = 1;
    let direction = DIRECTION_FORWARDS;
    let wordIndex = 0;
    let letterIndex = 0;
    let wordTypeInterval: any;

    startTyping();

    function startTyping() {
      wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
    }

    function typeLetter() {
      const word = words[wordIndex];
      if (direction === DIRECTION_FORWARDS) {
        letterIndex++;
        if (letterIndex === word.length) {
          direction = DIRECTION_BACKWARDS;
          clearInterval(wordTypeInterval);
          setTimeout(startTyping, WORD_STAY_DELAY);
        }
      } else if (direction === DIRECTION_BACKWARDS) {
        letterIndex--;
        if (letterIndex === 0) {
          nextWord();
        }
      }
      const textToType = word.substring(0, letterIndex);
      element.textContent = textToType;
    }

    function nextWord() {
      letterIndex = 0;
      direction = DIRECTION_FORWARDS;
      wordIndex++;

      if (wordIndex === words.length) {
        wordIndex = 0;
      }
    }
  }
}
