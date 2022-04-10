import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomValidatorDirective } from './custom-validator.directive';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CustomValidatorDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CustomValidatorDirective
  ]
})
export class SharedModule { }
