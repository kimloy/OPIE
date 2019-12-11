import { Component } from '@angular/core';
import { Form } from './form/form.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'opie-app';
  storedForm: Form[] = []

  onFormAdded(form) {
    this.storedForm.push(form);
  }
}
