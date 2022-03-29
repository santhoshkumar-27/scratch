import { Component, OnInit, NgZone } from '@angular/core';
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
  title = 'scratch';
  data = 'hello world';
  showValue: string | number = '';
  view!: string;
  thats: string = 'peter';
  disable: boolean = false;

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
}
