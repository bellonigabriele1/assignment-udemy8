import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {

  constructor (
    private userService: UserService,
  ) {}

  inactiveUsers = this.userService.inactiveUsers;
  activationsCounter = this.userService.activationsCounter;
  inactivationsCounter = this.userService.inactivationsCounter;

  onSetToActive(id: number) {
    this.userService.onSetToActive(id);
    this.activationsCounter = this.userService.activationsCounter;
  }
}
