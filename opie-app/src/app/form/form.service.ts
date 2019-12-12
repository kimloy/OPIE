import { Form } from './form.model';
import {Injectable} from '@angular/core';
import { Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class FormService {
  private forms: Form [] = [];
  private formUpdate = new Subject<Form[]>();

  constructor(private http: HttpClient) {
  }

  getForm() {
    return [...this.forms]; // Spread operator that gets the values of an array and create a new array with them
  }

  getFormUpdateListener() {
    return this.formUpdate.asObservable();
  }

  addForm(patientId, date, patientAge, patientGender, patientFirstName, patientLastName,
          patientSpeed, patientTime, patientAssist, patientAssistance) {
    const form: Form = {
      id: null,
      Pid: patientId,
      dv: date,
      age: patientAge,
      gender: patientGender,
      FN: patientFirstName,
      LN: patientLastName,
      speed1: patientSpeed[0],
      speed2: patientSpeed[1],
      speed3: patientSpeed[2],
      time1: patientTime[0],
      time2: patientTime[1],
      time3: patientTime[2],
      assistD1: patientAssist[0],
      assistD2: patientAssist[1],
      assistD3: patientAssist[2],
      Assistance: patientAssistance
    };
    this.forms.push(form);
    this.formUpdate.next([...this.forms]);
  }
}
