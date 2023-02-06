import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutsComponent } from './layouts/layouts.component';
import { LayoutsRoutingModule } from './layouts-routing.module';

@NgModule({
  declarations: [LayoutsComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutsRoutingModule,
  ],
  exports: [LayoutsComponent],
})
export class CustomLayoutsModule {}
