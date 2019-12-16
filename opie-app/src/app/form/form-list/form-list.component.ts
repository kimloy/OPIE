import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { Form } from '../form.model';
import {FormService} from '../form.service';
import { Subscription} from 'rxjs';
import {any} from 'codelyzer/util/function';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})

export class FormListComponent implements OnInit, OnDestroy {
  patientData: Form[] = []; // Input binds to the form created from the parent component form-created
  SearchField: Form[] = [];
  private formSub: Subscription;
  patentId = '';
  patientFN = '';
  patientLN = '';
  gaitSpeed = [];
  constructor(public formService: FormService) {}

  ngOnInit(): void {
    this.formService.getForms();
    this.formSub = this.formService.getFormUpdateListener().subscribe((forms) => {
      this.patientData = forms;
      this.onSearch();
    });
  }

  onSearch() {
    console.log(this.SearchField);
    console.log(this.patientData);
    this.SearchField = [];
    if (this.patentId !== '') {
      for (let i = 0; i < (this.patientData.length); i++) {
        // tslint:disable-next-line:triple-equals
        if (this.patientData[i].Pid == this.patentId) {
          this.SearchField.push(this.patientData[i]);
        }
      }

      for (let i = 0; i < (this.SearchField.length); i++) {
        const time1 = parseFloat(this.SearchField[i].time1);
        const time2 = parseFloat(this.SearchField[i].time2);
        const time3 = parseFloat(this.SearchField[i].time3);
        const average = (time1 + time2 + time3) / 3;
        this.gaitSpeed[i] = {};
        this.gaitSpeed[i].gS = Number((6 / average).toFixed(3));
      }
      this.patentId = '';
    } else if (this.patientFN !== '' && this.patientLN) {
      for (let i = 0; i < (this.patientData.length); i++) {
        if ((this.patientData[i].FN === this.patientFN) && (this.patientData[i].LN === this.patientLN)) {
          this.SearchField[i] = this.patientData[i];
        }
      }
      this.patientLN = '';
      this.patientFN = '';
    }
    console.log(this.SearchField);
    console.log(this.gaitSpeed);
  }

  onDelete(formId: string) {
    this.formService.deleteForm(formId);
  }

  ngOnDestroy() {
    this.formSub.unsubscribe();
  }
}
