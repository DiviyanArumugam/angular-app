import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-vsm',
  templateUrl: './main-vsm.component.html',
  styleUrls: ['./main-vsm.component.css']
})
export class MainVsmComponent implements OnInit {

  componentToShow = 'main';

  constructor() { }

  ngOnInit() {
  }

  setMain() {
    this.componentToShow = 'main';
  }
  setAbout() {
    this.componentToShow = 'about';
  }
  setRegister() {
    this.componentToShow = 'register';
  }

}
