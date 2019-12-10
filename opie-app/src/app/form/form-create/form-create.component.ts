import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location} from '@angular/common';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
})
export class FormCreateComponent implements OnInit{
  public patientForm: FormGroup;

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
