import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Topics } from '../../interface/topics.interface';

@Component({
  selector: 'app-side-bar-project',
  templateUrl: './side-bar-project.component.html',
  styles: [],
})
export class SideBarProjectComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() listProject!: Topics[];
  @Output() selected = new EventEmitter<String[]>();
  constructor() {}

  ngOnInit(): void {}
  onCheckboxChange(event: any) {
    const topics = this.form.controls['topics'] as FormArray;
    if (event.target.checked) {
      topics.push(new FormControl(event.target.value));
    } else {
      const index = topics.controls.findIndex(
        (x) => x.value === event.target.value
      );
      topics.removeAt(index);
    }
    this.selected.emit(this.form.value.topics);
  }
}
