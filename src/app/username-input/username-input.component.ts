import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

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
