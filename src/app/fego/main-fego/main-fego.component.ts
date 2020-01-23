import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-fego',
  templateUrl: './main-fego.component.html',
  styleUrls: ['./main-fego.component.css']
})
export class MainFegoComponent implements OnInit {

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
