import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-register-fego',
  templateUrl: './register-fego.component.html',
  styleUrls: ['./register-fego.component.css']
})
export class RegisterFegoComponent implements OnInit {

  items = Array.from({length: 100000}).map((_, i) => `Item ${i}`);

  constructor() { }

  ngOnInit() {
  }

}
