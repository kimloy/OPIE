import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {FormListComponent} from './form/form-list/form-list.component';
import {FormCreateComponent} from './form/form-create/form-create.component';

const route: Routes = [
  {path: 'list', component: FormListComponent},
  {path: '', component: FormCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
