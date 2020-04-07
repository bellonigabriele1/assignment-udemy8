import { Injectable } from "@angular/core";

@Injectable({ 
    providedIn: 'root',
 })

export class CounterService {

    activationsCounter = 0;
    inactivationsCounter = 0;
  
    onSwitchedToActive() {
        this.activationsCounter++;
        console.log('called counter-service; A = ' + this.activationsCounter);
    }
  
    onSwitchedToInactive() {
        this.inactivationsCounter++;
        console.log('called counter-service; I = ' + this.inactivationsCounter);
    }

}