import { Form } from './form.model';
import {Injectable} from '@angular/core';
import { Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class FormService {
  private forms: Form [] = [];
  private formUpdate = new Subject<Form[]>();

  constructor(private http: HttpClient) {
  }

  getForms() {
    this.http.get<{message: string, forms: any}>('http://localhost:3000/api/forms')
      .pipe(map((formData) => {
        return formData.forms.map(form => {
          return {
            id: form._id,
            Pid: form.Pid,
            dv: form.dv,
            gender: form.gender,
            age: form.age,
            FN: form.FN,
            LN: form.LN,
            speed1: form.speed1,
            speed2: form.speed2,
            speed3: form.speed3,
            time1: form.time1,
            time2: form.time2,
            time3: form.time3,
            assistD1: form.assistD1,
            assistD2: form.assistD2,
            assistD3: form.assistD3,
            Assistance: form.Assistance
          };
        });
      }))
      .subscribe((transformedForm) => {
        this.forms = transformedForm;
        this.formUpdate.next([...this.forms]);
      });
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
    this.http.post<{message: string, formId: string}>('http://localhost:3000/api/forms', form).subscribe((responseData) => {
      const id = responseData.formId;
      form.id = id;
      this.forms.push(form);
      this.formUpdate.next([...this.forms]);
    });
  }

 deleteForm(formId: string) {
   this.http.delete('http://localhost:3000/api/forms/' + formId)
     .subscribe(() => {
       const updatedForm = this.forms.filter(form => form.id !== formId);
       this.forms = updatedForm;
       this.formUpdate.next([...this.forms]);
     });
 }
}
