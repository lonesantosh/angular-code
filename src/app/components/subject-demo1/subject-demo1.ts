import { Component } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-subject-demo1',
  styleUrl: './subject-demo1.css',
  templateUrl: './subject-demo1.html',
})
export class SubjectDemo1 {

   ngOnInit() {
    // this.subject_demo();
    // this.behaviourSubject_demo();
    // this.replaySubject_demo();
    this.asyncSubject_demo();
  }

  subject_demo() {
    let mySubject = new Subject();
    mySubject.next('Plan-A');
    mySubject.subscribe((val) => console.log('Subscriber-1: ', val));
    mySubject.next('Plan-B');
    mySubject.subscribe((val) => console.log('Subscriber-2: ', val));
    mySubject.next('Plan-C');
  }

  behaviourSubject_demo(){
    let mySubject = new BehaviorSubject('Default Plan');
    mySubject.next('Plan-A');
    mySubject.subscribe((val) => console.log('Subscriber-1: ', val));
    mySubject.next('Plan-B');
    mySubject.subscribe((val) => console.log('Subscriber-2: ', val));
    mySubject.next('Plan-C');
  }

  replaySubject_demo(){
    let mySubject = new ReplaySubject();
    mySubject.next('Plan-A');
    mySubject.subscribe((val) => console.log('Subscriber-1: ', val));
    mySubject.next('Plan-B');
    mySubject.subscribe((val) => console.log('Subscriber-2: ', val));
    mySubject.next('Plan-C');
  }

  asyncSubject_demo(){
    let mySubject = new AsyncSubject();
    mySubject.next('Plan-A');
    mySubject.subscribe((val) => console.log('Subscriber-1: ', val));
    mySubject.next('Plan-B');
    mySubject.subscribe((val) => console.log('Subscriber-2: ', val));
    mySubject.next('Plan-C');
    mySubject.complete();
  }

}
