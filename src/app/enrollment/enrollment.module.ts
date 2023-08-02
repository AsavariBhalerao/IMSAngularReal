import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrollmentRoutingModule } from './enrollment-routing.module';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';;
import { OrderModule } from 'ngx-order-pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    EnrollmentRoutingModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule,
    FormsModule
  ]
})
export class EnrollmentModule { }
