import { ContactPageService } from './contact-page.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit, OnDestroy {

  formSubmit: FormGroup | any;

  validForm: boolean = false;

  private subscription: Subscription[] = []

  constructor(private fb: FormBuilder, private contactService: ContactPageService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.formSubmit = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      note: ['', Validators.required]
    })
  }

  get name() {
    return this.formSubmit.get('name');
  }

  get email() {
    return this.formSubmit.get('email');
  }

  get note() {
    return this.formSubmit.get('note');
  }

  sendContact() {
    this.subscription.push(
      this.contactService.sendContact(this.name.value, this.email.value, this.note.value).subscribe(res => {
        alert('Your contact is saved to our website.');
      })
    )
  }

  ngOnDestroy(): void {
      this.subscription.forEach(sub => { sub.unsubscribe() })
  }

}
