import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'success-alert',
  templateUrl: './successalert.component.html',
  styles: [`
      h1 {
        color: green;
      }
    `]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
