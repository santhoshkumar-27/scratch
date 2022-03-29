import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  result: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  counter(e: number) {
    e === 1 ? this.result++ : this.result > 0 ? this.result-- : this.result;
    // if (e == 1) {
    //   this.result++;
    //   return;
    // } else if (e == 2) {
    //   if (this.result > 0) {
    //     this.result--;
    //     return;
    //   }
    // }
  }
}
