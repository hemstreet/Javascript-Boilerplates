import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Angular2} from 'angular-2';

@Component({
  selector: 'main'
})

@View({
  directives: [Angular2],
  template: `
    <angular-2></angular-2>
  `
})

class Main {

}

bootstrap(Main);
