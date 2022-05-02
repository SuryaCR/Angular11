import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 
    console.log('Constructor works');
  }

  ngOnInit(): void {
    console.log('OnInit works');
  }
  
}
