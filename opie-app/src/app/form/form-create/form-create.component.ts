import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location} from '@angular/common';

export interface PatientForm {
  task: number;
}

export interface Speed {
  value: string;
  viewValue: string;
}

const ELEMENT_DATA: PatientForm[] = [
  {task: 1}, {task: 2}, {task: 3}
];

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
})
export class FormCreateComponent implements OnInit {
  public patientForm: FormGroup;
  public patientTime: any = {};
  speed: Speed[] = [{value: 'comfortable-0', viewValue: 'Comfortable'},
                    {value: 'maximum-1', viewValue: 'Maximum'}];
  displayedColumns: string [] = ['task', 'speed', 'time'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
    this.patientForm = new FormGroup({
      patientId: new FormControl('', [Validators.required]),
      dateOfVisit: new FormControl('', [Validators.required]),
      patientFN: new FormControl('', [Validators.required]),
      patientLN: new FormControl('', [Validators.required])
    });
  }

  public hasError = (controlId: string, errorId: string) => {
    return this.patientForm.controls[controlId].hasError(errorId);
  }

}
