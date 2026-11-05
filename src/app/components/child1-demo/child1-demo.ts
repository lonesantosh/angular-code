import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef,SimpleChanges, ViewChild } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-child1-demo',
  styleUrl: './child1-demo.css',
  templateUrl: './child1-demo.html',
  inputs: ['a', 'b', 'numArr'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class Child1Demo {

    a: any;
  b: any;
  numArr: any;
  courseName: string;

  @ViewChild('myBox1') myBox1: any;

  async fetchUserData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let userDate = await response.json();
    console.log(userDate);
  }

  constructor(
    private ele: ElementRef,
    private cdr: ChangeDetectorRef,
  ) {
    // Dependency Injection
    console.log('child constructor');
    this.courseName = 'Angular';
    console.log(this.myBox1);
    // this.myBox1.nativeElement.focus();
    // this.myBox1.nativeElement.style.backgroundColor = 'lightgreen';
  }
  // ngOnInit() {
  //   console.log('child ngOnInit');
  //   this.fetchUserData();
  // }
  // ngOnChanges(myChanges: SimpleChanges) {
  //   console.log('child ngOnChanges');
  //   console.log(myChanges);
  // }
  // ngDoCheck() {
  //   console.log('child ngDoCheck');
  // }
  refresh() {
    this.cdr.markForCheck();
  }
  // ngAfterContentInit() {
  //   console.log('child ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('child ngAfterContentChecked');
  // }
  ngAfterViewInit() {
    console.log('child ngAfterViewInit');
    console.log(this.myBox1);
    this.myBox1.nativeElement.focus();
    this.myBox1.nativeElement.style.backgroundColor = 'lightgreen';
  }
  // ngAfterViewChecked() {
  //   console.log('child ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('child ngOnDestory');
  // }
  
}
