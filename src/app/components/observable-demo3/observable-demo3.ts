import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Observable, debounceTime, distinctUntilChanged, switchMap, map, fromEvent, exhaustMap } from 'rxjs';

@Component({
  imports: [ ReactiveFormsModule,CommonModule],
  selector: 'app-observable-demo3',
  styleUrl: './observable-demo3.css',
  templateUrl: './observable-demo3.html',
})
export class ObservableDemo3 {

 searchResult$: Observable<any> | undefined;
  searchForm: any;
  constructor(private http: HttpClient) {
    this.searchForm = new FormGroup({
      searchField: new FormControl()
    });
  }
  ngOnInit() {
    this.searchResult$ = this.searchForm.get("searchField").valueChanges.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((term) =>
		    this.http.get<any>(`https://dummyjson.com/users/search?q=${term}`)
      ),
      map((response: any) =>
		 response.users.length > 0 ? response.users : []
    ));
  }

  // =================
  @ViewChild('loginBtn') loginBtn!: ElementRef;

  ngAfterViewInit() {
      fromEvent(this.loginBtn.nativeElement, 'click').pipe(exhaustMap((val) => {
        return this.http.get('https://httpbin.org/delay/5') // login URL
      })).subscribe({
        next: (res) => console.log('Response:', res),
        error: (err) => console.error('Error:', err),
      })
  }

}
