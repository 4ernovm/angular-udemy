import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-directive',
  templateUrl: './details-directive.component.html',
  styles: [".white-text { color: white; }"],
})
export class DetailsDirectiveComponent implements OnInit {

  isVisible: boolean = false;
  logs: Date[] = [];

  constructor() { }

  ngOnInit() {
  }

  addLog() {
    console.log(this);
    this.logs.push(new Date);
  }

  toggleVisible() {
    this.isVisible = !this.isVisible;
    this.addLog();
  }

  formatAdditionalLogs(index: number) {
    return (index >= 5) ? 'blue' : '';
  }
}
