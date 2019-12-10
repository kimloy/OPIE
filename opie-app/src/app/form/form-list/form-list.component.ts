import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})

export class FormListComponent {
  /*patientData = [{
    title: 'Patient Data',
    name: 'Paul',
    time: '10'
  }];*/
  @Input () patientData = []; // Input binds to the form created from the parent component form-created
}
