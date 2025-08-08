import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Principal } from '../principal/principal';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Principal,
  ],
  exports:[
  CommonModule,
  Principal,
  ],
  providers:[
    provideHttpClient(),
  ]
})
export class SharedModule { }

