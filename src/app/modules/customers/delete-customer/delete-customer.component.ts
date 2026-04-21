import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerAPIService } from 'src/services/customerService';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {
 
  constructor(
    public dialogRef: MatDialogRef<DeleteCustomerComponent>,
    //reads the data from the parent component that invokes our dialog.
    @Inject(MAT_DIALOG_DATA) public data: any,
    private customerService:CustomerAPIService) {

    }
 
  ngOnInit(): void {}
 
  confirmDelete() {
   this.customerService.deletecustomer(this.data.id).subscribe(() => {
      this.dialogRef.close(this.data.id);
    });
  }
}

