import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-input',
  templateUrl: './username-input.component.html',
})
export class UsernameInputComponent implements OnInit {

  username: string;

  constructor() { }

  ngOnInit() {
  }

  onUsernameSubmit() {
    this.username = '';
  }
}
