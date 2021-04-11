import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { BindingComponent } from './binding/binding.component';
@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    TemplateFormsComponent,
    SignupFormComponent,
    BindingComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'', component:Child1Component},
      {path:'forms' ,component:TemplateFormsComponent},
      {path:'binding' ,component:BindingComponent}
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }