import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  NgForm,
} from '@angular/forms';
import { rangeValidator, emailMatchValidator } from '../my-validator';
import { StoreService } from '../store.service';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit {
  employeeFormGroup: FormGroup;

  empRecord: any = {
    firstName: 'Surya',
    lastName: 'Kesavan',
    email: 'surya@gmail.com',
    mobile: '1234567890',
  };

  constructor(private fb: FormBuilder,private store:StoreService) {
    this.employeeFormGroup = this.fb.group({
      firstName: [this.empRecord.firstName, [Validators.required, Validators.minLength(3)]],
      lastName: [this.empRecord.lastName],
      emailGroup: this.fb.group(
        {
          email: [this.empRecord.email, [Validators.required, Validators.email]],
          confirmEmail: ['', [Validators.required, Validators.email]],
        },
        { validators: emailMatchValidator }
      ),
      mobile: [this.empRecord.mobile],
      sendNotification: ['email'],
      range: ['', [rangeValidator(10, 20)]],
    });
  }

  ngOnInit(): void {}
  get firstName() {
    return this.employeeFormGroup.get('firstName')!;
  }
  get range() {
    return this.employeeFormGroup.get('range')!;
  }
  get email() {
    return this.employeeFormGroup.get('email')!;
  }
  get emailGroup() {
    return this.employeeFormGroup.get('emailGroup')!;
  }
  get mobile(){
    return this.employeeFormGroup.get('mobile')!;
  }

  loadEmployee(){
    let data ={
      firstName: 'Ram',
      lastName: 'Kumar',
      mobile:'8976543456',
      range: '15'
    }
    this.employeeFormGroup.patchValue(data);
  }

  doNotification(msgtype:any){
    if(msgtype === 'sms'){
      let mobileControl = this.employeeFormGroup.get('mobile');
      mobileControl?.setValidators([Validators.required,rangeValidator(6000000000,9999999999)]);
      mobileControl?.updateValueAndValidity();
    }
  }
  storing(formdata:NgForm){
    console.log(formdata);
    this.store.pushData(formdata);
  }
}