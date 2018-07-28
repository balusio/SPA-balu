'use strict';

// Example 1: Creating a new class (declaration-form)
// ===============================================================

// A base class is defined using the new reserved 'class' keyword
export default class builder {
  // ..and an (optional) custom class constructor. If one is
  // not supplied, a default constructor is used instead:
  // constructor() { }
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
    this.class = 'zalala';
  }

  // Simple class instance methods using short-hand method
  // declaration
  createElement() {
    console.log('Hi, I am a ', this.name + '.');
  }

  sayHistory() {
    console.log('"Polygon" is derived from the Greek polus (many) ' +
      'and gonia (angle).');
  }

  // We will look at static and subclassed methods shortly
}

