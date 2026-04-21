import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddCustomerComponent } from './add-customer.component';
import { CustomerAPIService } from 'src/services/customerService';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('AddCustomerComponent', () => {
  let component: AddCustomerComponent;
  let fixture: ComponentFixture<AddCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCustomerComponent ],
      imports: [ 
        RouterTestingModule, 
        ReactiveFormsModule, 
        HttpClientModule 
      ],
      providers: [ CustomerAPIService, MatDialogRef, MAT_DIALOG_DATA ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call create method', () => {
    spyOn(component, 'create');
    component.create();
    expect(component.create).toHaveBeenCalled();
  });

});