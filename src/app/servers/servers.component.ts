import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'test server';
  userName: string = '';
  emptyName: boolean = true;
  serverCreated: boolean = false;
  servers = ['TestServer 1', 'TestServer 2'];
  displayDetails: boolean = true;
  clicks = [];
  logNumber = 1;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }



  onInputUsername(event){
    this.emptyName = event.target.value == '' ? true : false;
  }

  clearUsername(){
    this.userName = '';
    this.emptyName = true;
  }

  toggleDetails(){
    this.displayDetails = this.displayDetails == true ? false : true;
    this.clicks.push(new Date());
  }
  getDetailsDisplay(){
    return this.displayDetails;
  }

}
