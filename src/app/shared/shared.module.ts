import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';



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
    CommonModule
  ]
})
export class SharedModule { }
