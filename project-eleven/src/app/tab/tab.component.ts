import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
})
export class TabComponent implements OnInit {
  @Input()
  book: any;
  @Input()
  idx: number = 1;
  currentTab = 1;
  constructor() {}

  ngOnInit(): void {}
  isTabSelected(tabIndex: number) {
    return this.currentTab === tabIndex;
  }
  onTabChange(event: any, tabIndex: number) {
    event.preventDefault(); //to stop flicker
    this.currentTab = tabIndex;
    console.log('Tab Selected ' + this.currentTab);
  }
}