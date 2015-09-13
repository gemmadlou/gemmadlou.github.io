/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
  selector: 'my-app'
})
@View({
  template: '<span class="logo-full-page heading">{{name}}</span><span class="logo-full-page subtitle">Full Stack Developer</span>'
})
// Component controller
class MyAppComponent {
  name: string;
  
  constructor() {
    this.name = 'Gemma';
  }
}

bootstrap(MyAppComponent); 