import {Component, View} from 'angular2/core';

@Component({
  selector: 'angular-2'
})

@View({
  templateUrl: 'angular-2.html'
})

export class Angular2 {

  constructor() {
    console.info('Angular2 Component Mounted Successfully');
  }

}
