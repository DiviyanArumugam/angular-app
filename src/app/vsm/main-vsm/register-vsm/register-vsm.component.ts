import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-register-vsm',
  templateUrl: './register-vsm.component.html',
  styleUrls: ['./register-vsm.component.css']
})
export class RegisterVsmComponent implements OnInit {

  vsmForm = this.fb.group({
    name: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    emailId: ['', Validators.compose([Validators.required, Validators.pattern(/^.+@cognizant\.com$/)])],
    id: ['', Validators.compose([Validators.required, Validators.pattern(/^\d{6}$/)])],
    assessDetails: this.fb.group({
      appsCount: [''],
      projectCode: [''],
      projectName: [''],
    }),
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.vsmForm.value);
  }

}
