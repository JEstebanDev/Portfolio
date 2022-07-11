import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styles: [],
})
export class ContactFormComponent implements OnInit {
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  contact: FormGroup = this.formBuilder.group({
    name: [, Validators.required],
    email: [, [Validators.required, Validators.pattern(this.emailPattern)]],
    message: [, Validators.required],
  });

  emailText = 'This field is required';
  validate(variable: string) {
    if (this.contact.controls['email'].errors != null) {
      if (this.contact.controls['email'].errors!['pattern'] != null) {
        this.emailText = 'The format of the email should be ejemplo@gmail.com';
      }
      if (this.contact.controls['email'].errors!['required'] != null) {
        this.emailText = 'This field is required';
      }
    }
    return (
      this.contact.controls[variable].errors &&
      this.contact.controls[variable].touched
    );
  }
}
