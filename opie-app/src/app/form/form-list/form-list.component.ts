import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { Form } from '../form.model';
import {FormService} from '../form.service';
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})

export class FormListComponent implements OnInit, OnDestroy {
  patientData: Form[] = []; // Input binds to the form created from the parent component form-created
  private formSub: Subscription;
  constructor(public formService: FormService) {}

  ngOnInit(): void {
    this.formService.getForms();
    this.formSub = this.formService.getFormUpdateListener().subscribe((forms) => {
      this.patientData = forms;
    });
  }

  onDelete(formId: string) {
    this.formService.deleteForm(formId);
  }

  ngOnDestroy() {
    this.formSub.unsubscribe();
  }
}
