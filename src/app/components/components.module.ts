import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementComponent } from './increment/increment.component';
import { FormsModule } from '@angular/forms';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    IncrementComponent,
    DoughnutComponent
  ],
  exports: [
    IncrementComponent,
    DoughnutComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ChartsModule
  ]
})
export class ComponentsModule { }
