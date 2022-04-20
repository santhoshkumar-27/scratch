import { Component, OnInit, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  //Inside tha class we don't use let, var, const for property declaraion
  // eg:
  // var title = 'string'
  // let home = 'sweethome'
  // const because = 'keywords'
  //Inside the class we don't include the function keyword before the declaration of function
  // eg: 
  // function dont(params) {
  //   console.log('params', params);
  // }
  twoway: any;
  childData: number = 1;
  color1: string = 'blue';
  users: string[] = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqr', 'stu', 'vwx', 'z'];
  userDetails = [
    {
      name: 'abc',
      age: 23,
      accounts: ['facebook', 'yahoo', 'twitter']
    },
    {
      name: 'def',
      age: 24,
      accounts: ['yahoo', 'twitter', 'facebook']
    },
    {
      name: 'ghi',
      age: 25,
      accounts: ['instagram', 'twitch', 'discord']
    },
    {
      name: 'jkl',
      age: 24,
      accounts: ['tinder', 'finder', 'snapchat']
    },
  ]
  title = 'scratch';
  data = 'hello world';
  showValue: string | number = '';
  view!: string;
  thats: string = 'peter';
  disable: boolean = false;
  condition: boolean = true;
  color: string = 'blue';
  userInfo: any = {};
  showToggle: boolean = true;
  todoArray : any[] = [];
  constructor(private ngzone: NgZone) { }
  // if we want a dynamic data in template we use property and methods to show data in template
  ngOnInit() {
    console.log('this is 1st', this.view)
    setTimeout(() => {
      this.data = 'hi world'
    }, 3000)
    this.outSideData()
  }
  getName(params: string | number) {
    alert(`welcome ${params}`)
  }
  showData() {
    return 'this is from the function'
  }
  outSideData() {
    this.ngzone.runOutsideAngular(() => {
      setTimeout(() => {
        this.view = 'new world'
        console.log('this is view', this.view)
      }, 3000)
    })
  }
  getValue(e: string) {
    console.warn(e)
  }
  newValue(e: string | number) {
    this.showValue = e;
  }
  updateColor() {
    this.color1 = 'skyblue';
  }
  getFormValue(e: NgForm) {
    console.log(e.value)
    this.userInfo = e.value
  }
  toggleMe() {
    this.showToggle = !this.showToggle;
  }
  addTodo(e:any) {
    this.todoArray.push({id: this.todoArray.length, name: e.value})
    e.value = '';
  }
  removeTodo(e : number)
  {
    const findindex = this.todoArray.findIndex(x => x.id == e);
    this.todoArray.splice(findindex, 1)
  }
  updateChildData() {
    // this.childData = Math.floor(Math.random()) << 3;
    // this.childData = parseInt((Math.floor(Math.random()) << 3).toString())
    this.childData = Math.floor(Math.random() * 10);
  }
  update(e: string) {
      console.log('e', e);
  }
  clickToView(e: HTMLInputElement) {
    console.log(e.value);
  }
}
