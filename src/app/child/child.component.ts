import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() passingFromParent: number = 1;
  @Output() updateEven = new EventEmitter<string>();
  loginForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(5)]),
    password: new FormControl('', [Validators.required])
  })
  constructor() { 
    console.log('childer component')
  }

  ngOnInit(): void {
  }
  updateEvent(e: string) {
    this.updateEven.emit(e);
  }
  loginSubmit() {
    console.log('this is ', this.loginForm.value)
  }
  patchValue() {
    this.loginForm.patchValue({
      name: 'ajhhkljkjkjh',
      password: '1235478'
    })
  }
  get name() {
    return this.loginForm.get('name');
  }
  get password() {
    return this.loginForm.get('password');
  }
}
