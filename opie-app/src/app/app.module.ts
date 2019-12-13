import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormCreateComponent} from './form/form-create/form-create.component';
import { FormListComponent } from './form/form-list/form-list.component';
import { HeaderComponent} from './header/header.component';
import {
  MatInputModule,
  MatCardModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatToolbarModule,
  MatTableModule,
  MatSelectModule,
  MatExpansionModule,
  MatButtonModule
} from '@angular/material';
import {AppRoutingModule} from './app-routing.module';
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    AppComponent,
    FormCreateComponent,
    HeaderComponent,
    FormListComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatCardModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatToolbarModule,
        MatTableModule,
        MatSelectModule,
        FormsModule,
        MatExpansionModule,
        MatButtonModule,
        HttpClientModule,
        MatIconModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
