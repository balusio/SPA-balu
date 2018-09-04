'use strict';
import axios from 'axios';
import {enviroment} from './enviroment';
import { Sortable } from '@shopify/draggable';
import  builderModule  from './HtmlModule';
export default class builder {

  constructor(height, width) {
    this.http = axios;
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
    this.class = 'zalala';
    this.totalElements = 0;
    this.edit = false;
  }

  getItems() {
    this.http.get(`${enviroment}public/sort`).then((response)=>{
      response.data.forEach(element => {
        this.totalElements+=1;
        const renderHtmlNode = new builderModule(this.totalElements, element);
        const nodeCreated = renderHtmlNode.createItem();
        document.querySelector(".container-sort").appendChild(nodeCreated);
      });
    });
  }

  makeElementsSortables(){
    const container = document.querySelector(".container-sort");
    const sortable = new Sortable(container, {
      draggable: '.mdc-card'
    });

    sortable.on('sortable:start', (event) => {
      // PREVENT PARENT EVENT IF IM INSIDE A CHILDREN ELEMENT who have own action, BASED ON : 
      // https://github.com/Shopify/draggable/issues/183
      // add a custom class and assign it to the dom elements you need to prevent dragabble action from parent
      const currentElement = event.data.dragEvent.data.sensorEvent.data.originalEvent.target.classList;
      for (var key in currentElement) {
        if (currentElement[key] === 'not-sortable'){
          event.cancel();
          break; 
        }
      }

      
    });
    sortable.on('sortable:sort', () =>{} );
    sortable.on('sortable:sorted', () =>{});
    sortable.on('sortable:stop', ()=> {});

  }



}

