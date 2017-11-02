import { Component } from '@angular/core';

import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeUsers = this.usersService.activeUsers;
  inactiveUsers = this.usersService.inactiveUsers;

  constructor(private usersService: UsersService){ }

  onSetToInactive(id: number) {
    this.usersService.setInactive(id);
  }

  onSetToActive(id: number) {
    this.usersService.setActive(id);
  }
}
