import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumsComponent],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumsComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
