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
  constructor(public formService: FormService) {}

  ngOnInit(): void {
    this.formService.getForms();
    this.formSub = this.formService.getFormUpdateListener().subscribe((forms) => {
      this.patientData = forms;
    });
  }

  onSearch() {
    if (this.patentId !== '') {
      for (let i = 0; i < (this.patientData.length); i++) {
        // tslint:disable-next-line:triple-equals
        if (this.patientData[i].Pid == this.patentId) {
          this.SearchField[i] = this.patientData[i];
        }
      }
      this.patentId = '';
    }
    else if (this.patientFN !== '' && this.patientLN) {
      for (let i = 0; i < (this.patientData.length); i++)
      {
        if ((this.patientData[i].FN === this.patientFN) && (this.patientData[i].LN === this.patientLN))
        {
          this.SearchField[i] = this.patientData[i];
        }
      }
      this.patientLN = '';
      this.patientFN = '';
    }
  }

  onDelete(formId: string) {
    this.formService.deleteForm(formId);
  }

  ngOnDestroy() {
    this.formSub.unsubscribe();
  }
}
