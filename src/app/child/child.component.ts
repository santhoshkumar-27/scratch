import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() passingFromParent: number = 1;
  @Output() updateEven = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  updateEvent(e: string) {
    this.updateEven.emit(e);
  }
}
