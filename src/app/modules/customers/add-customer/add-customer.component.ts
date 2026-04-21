import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Customer, CustomerAPIService } from 'src/services/customerService';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent  {
  customerForm : Customer = {
     id : 0,
      name :'pedrito',
       address :'', 
       city:'',
        state:'', 
       zip:'', 
       phone:'',
        email:'', 
        notes:''};

      
 
  constructor(private customerService:CustomerAPIService,
      private router: Router,
    private route: ActivatedRoute,
    public dialogRef: MatDialogRef<AddCustomerComponent>,
    //reads the data from the parent component that invokes our dialog.
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) {
      if(data.customer){
        this.customerForm = data.customer;
      }   
    
  }
  create() {
    console.info('Strating Customer create'+ JSON.stringify(this.customerForm));   
    this.customerService.createcustomer(this.customerForm).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
      
    }); 
    if(this.dialogRef){  
       this.dialogRef.close();
    }
    console.info('Customer created, going to customers list');
    window.location.reload();
    //this.router.navigate(['/customers']);
} 
closeDialog(){
  this.dialogRef.close();
}
}
