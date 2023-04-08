import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HomeModule } from './home/home.module';
import { ExampleRoutingModule } from './example-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ExampleRoutingModule
  ]
})
export class ExampleModule {}
