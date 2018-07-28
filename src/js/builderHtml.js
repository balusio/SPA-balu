'use strict';

import axios from 'axios';

export default class builder {

  constructor(height, width) {
    this.http = axios;
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
    this.class = 'zalala';
  }

  createElement() {
    this.http.get('http://localhost/api/public/bd-test').then((response)=>{
      console.log(response);
    });
    console.log('Hi, I am a ', this.name + '.');
  }

  sayHistory() {
    console.log('"Polygon" is derived from the Greek polus (many) ' +
      'and gonia (angle).');
  }

}

