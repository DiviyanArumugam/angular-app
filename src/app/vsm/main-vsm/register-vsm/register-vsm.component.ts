import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-register-vsm',
  templateUrl: './register-vsm.component.html',
  styleUrls: ['./register-vsm.component.css']
})
export class RegisterVsmComponent implements OnInit {

  vsmForm = this.fb.group({
    name: ['', Validators.required],
    id: [''],
    assessDetails: this.fb.group({
      appsCount: [''],
      projectCode: [''],
      projectName: [''],
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.vsmForm.value);
  }

}
