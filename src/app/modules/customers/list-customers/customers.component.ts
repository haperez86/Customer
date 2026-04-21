import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Customer, CustomerAPIService } from 'src/services/customerService';

import { MatDialog } from '@angular/material/dialog';
import { DeleteCustomerComponent } from '../delete-customer/delete-customer.component';
import { AddCustomerComponent } from '../add-customer/add-customer.component';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit{
  
  allDatasource!: Customer[];
  dataSource = new MatTableDataSource<Customer>(this.allDatasource);

  col: string[] = ['id', 'name', 'email', 'position','actions'];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;   

  
  constructor(private customerService:CustomerAPIService, public dialog: MatDialog) {   
    this.findAllCustomers();
    
  }
  ngOnInit(){}
  

  findAllCustomers(){
    this.customerService.getAllcustomers().subscribe((data)=>{
      console.log(data);
      this.dataSource = new MatTableDataSource<Customer>(data);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })
  } 

  openDeleteModal(id: number) {
    const dialogRef = this.dialog.open(DeleteCustomerComponent, {
      width: '250px',
      data: { id },
    });
 
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.info(`Filtering customers after delete customer with id ${id}`);       
        this.dataSource.data = this.dataSource.data.filter( (customer) => customer.id !== id);  
      }
    });
  }

  openEditModal(customer: any){
    const dialogRef = this.dialog.open(AddCustomerComponent, {
      width: '900px',
      data: { customer },
    });
 
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.info(`Filtering customers after delete customer with id ${customer.id}`);       
        this.dataSource.data = this.dataSource.data.filter( (customer) => customer.id !== customer.id);  
      }
    });

  }
}
