import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location} from '@angular/common';
import {MatOption, MatSelectChange} from '@angular/material';
import { Form } from '../form.model';

export interface PatientForm {
  trail: number;
}

export interface Speed {
  value: string;
  viewValue: string;
}

export interface Gender {
  value: string;
  viewValue: string;
}

const ELEMENT_DATA: PatientForm[] = [
  {trail: 1}, {trail: 2}, {trail: 3}
];

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
})
export class FormCreateComponent implements OnInit {
  patientId = '';
  date = '';
  patientAge = '';
  gender: Gender[] = [{value: 'male-0', viewValue: 'Male'},
                             {value: 'female-1', viewValue: 'Female'}];
  patientGender = '';
  patientFirstName = '';
  patientLastName = '';
  public patientSpeed: any = [];
  public patientTime: any = [];
  public patientAssist: any = [];
  patientAssistance = '';
  // tslint:disable-next-line:max-line-length
  @Output() formCreated = new EventEmitter<Form>(); // Making a event emitter that will emit the data from this component to the list component

  public patientForm: FormGroup;
  speed: Speed[] = [{value: 'comfortable-0', viewValue: 'Comfortable'},
                    {value: 'maximum-1', viewValue: 'Maximum'}];
  displayedColumns: string [] = ['trail', 'speed', 'time', 'assistiveDevices'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {

    this.patientForm = new FormGroup({
      patientId: new FormControl('', [Validators.required]),
      dateOfVisit: new FormControl('', [Validators.required]),
      patientFN: new FormControl('', [Validators.required]),
      patientLN: new FormControl('', [Validators.required]),
      patientAge: new FormControl('', [Validators.required]),
      patientAssistance: new FormControl('', [Validators.required])
    });
  }

  selectedGender(value) {
    this.patientGender = value.source.value;
  }

  selected(value, i) {
    this.patientSpeed[i] =  value.source.value
    console.log(value.source.value);
  }

  onSaveForm() {
      const form: Form = {
        patientId: this.patientId,
        date: this.date,
        patientGender: this.patientGender,
        patientAge: this.patientAge,
        patientFirstName: this.patientFirstName,
        patientLastName: this.patientLastName,
        patientSpeed1: this.patientSpeed[0],
        patientSpeed2: this.patientSpeed[1],
        patientSpeed3: this.patientSpeed[2],
        patientTime1: this.patientTime[0],
        patientTime2: this.patientTime[1],
        patientTime3: this.patientTime[2],
        patientAssist1: this.patientAssist[0],
        patientAssist2: this.patientAssist[1],
        patientAssist3: this.patientAssist[2],
        patientAssistance: this.patientAssistance
      };
      this.formCreated.emit(form);
  }

  public hasError = (controlId: string, errorId: string) => {
    return this.patientForm.controls[controlId].hasError(errorId);
  }
}
