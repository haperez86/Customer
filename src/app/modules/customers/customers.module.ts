import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';

import { ApiModule } from 'src/services/customerService';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material.module';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CustomersComponent } from './list-customers/customers.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomersComponent,
    DeleteCustomerComponent,
    AddCustomerComponent

  ],
  imports: [
    CommonModule,
    CustomersRoutingModule, 
    MatDialogModule,  
    MaterialModule,
    FormsModule,
    ApiModule
  ],providers: [
  ]
})
export class CustomersModule { }
