'use strict';
import axios from 'axios';
import {enviroment} from './enviroment';
export default class builder {

  constructor(height, width) {
    this.http = axios;
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
    this.class = 'zalala';
  }

  getItems() {
    this.http.get(`${enviroment}public/bd-test`).then((response)=>{
      
      response.data.forEach(element => {
        this.createItems(element);    
      });
    });
   
  }
  createItems(element){
    let containerdiv = document.createElement('form');
      containerdiv.setAttribute('class', 'mdc-card');
      const titleDiv= document.createElement('div');
            titleDiv.setAttribute('class','mdc-card__media mdc-card__media--square');
            const title = document.createElement('input');
            title.setAttribute('value',element.name); 
            title.setAttribute('disabled',true); 
      titleDiv.appendChild(title);
      containerdiv.appendChild(titleDiv);
    document.body.appendChild(containerdiv);
  }



}

