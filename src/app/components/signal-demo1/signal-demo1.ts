import { HttpClient } from '@angular/common/http';
import { Component, computed, effect, inject, signal, Signal, WritableSignal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-signal-demo1',
  styleUrl: './signal-demo1.css',
  templateUrl: './signal-demo1.html',
})
export class SignalDemo1 {

 count: WritableSignal<number> = signal(0);
  countDouble: Signal<number> = computed(() => this.count() * 2);
  countSquare: Signal<number> = computed(() => this.count() * this.count());
  incrementCount() {
    this.count.update((val) => val + 1);
  }

  // ===== Effect=======
  httpClient = inject(HttpClient);
  userId: WritableSignal<number> = signal(1);
  userData: WritableSignal<any> = signal({});

  userDetailsEffect = effect(() => {
    const userId = this.userId();
    this.fetchUserDetails(userId);
  });

  fetchUserDetails(userId: number) {
    this.httpClient
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .subscribe((response) => {
        this.userData.set(response);
      });
  }

  incrementUserId() {
    this.userId.update((val) => val + 1);
  }

  deleteEffect(){
    this.userDetailsEffect.destroy();
  }

}
