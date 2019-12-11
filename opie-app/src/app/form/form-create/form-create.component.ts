import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import { Location} from '@angular/common';
import {MatOption, MatSelectChange} from '@angular/material';
import { Form } from '../form.model';
import { FormService } from '../form.service';

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
  @ViewChild(FormGroupDirective, {static: false}) formGroupDirective: FormGroupDirective;

  constructor(public formService: FormService) {}

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
      patientAssist: new FormControl('', [Validators.required]),
      patientTime: new FormControl('', [Validators.required]),
      patientAssistance: new FormControl('', [Validators.required])
    });
  }

  selectedGender(value) {
    this.patientGender = value.source.value;
  }

  selected(value, i) {
    this.patientSpeed[i] =  value.source.value;
    console.log(value.source.value);
  }

  onSaveForm() {
    if (this.patientForm.invalid) {
      return;
    }
    this.formService.addForm(this.patientId, this.date, this.patientAge, this.patientGender, this.patientFirstName, this.patientLastName,
                            this.patientSpeed, this.patientTime, this.patientAssist, this.patientAssistance);
    this.patientForm.reset();
    this.formGroupDirective.resetForm();
  }

  public hasError = (controlId: string, errorId: string) => {
    return this.patientForm.controls[controlId].invalid;
  }
}
