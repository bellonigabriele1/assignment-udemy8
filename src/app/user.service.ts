import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable({ 
    providedIn: 'root',
 })

export class UserService {

  constructor (
    private counterService: CounterService
  ) {}

    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];
    activationsCounter = this.counterService.activationsCounter;
    inactivationsCounter = this.counterService.inactivationsCounter;
  
    onSetToInactive(id: number) {
      this.inactiveUsers.push(this.activeUsers[id]);
      this.activeUsers.splice(id, 1);
      this.counterService.onSwitchedToInactive();
      this.inactivationsCounter = this.counterService.inactivationsCounter;
      console.log('called user-service; I = ' + this.inactivationsCounter);
    }
  
    onSetToActive(id: number) {
      this.activeUsers.push(this.inactiveUsers[id]);
      this.inactiveUsers.splice(id, 1);
      this.counterService.onSwitchedToActive();
      this.activationsCounter = this.counterService.activationsCounter;
      console.log('called user-service; A = ' + this.activationsCounter);
    }

}