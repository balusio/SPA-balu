'use strict';
import axios from 'axios';
import {enviroment} from './enviroment';
import { Draggable } from '@shopify/draggable';
import { Sortable } from '@shopify/draggable';
import  builderModule  from './htmlBuilderModule';
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
      // const renderHtmlNode = new builderModule(this.totalElements, response.data[0]);
      // const nodeCreated = renderHtmlNode.createItem();
      // document.querySelector(".container-sort").appendChild(nodeCreated);
      // // for(i=0; i <response.data.length; i++){
        
      // // }
      response.data.forEach(element => {
        this.totalElements+=1;
        const renderHtmlNode = new builderModule(this.totalElements, element);
        const nodeCreated = renderHtmlNode.createItem();
        document.querySelector(".container-sort").appendChild(nodeCreated);
      });
    });
  }
  // createItems(element){
  //   let containerdiv = document.createElement('form');
  //   containerdiv.setAttribute('id',`form_${this.totalElements}`)
  //   containerdiv.setAttribute('class', 'mdc-card');
  //     const titleDiv= document.createElement('div');
  //     titleDiv.setAttribute('class','mdc-card__media mdc-card__media');
  //       const title = document.createElement('input');
  //             title.setAttribute('class','demo-card__title mdc-typography--headline6');
  //             title.setAttribute('value',element.name); 
  //             title.setAttribute('disabled',true);
  //     titleDiv.appendChild(title); 
  //     // description
  //       const description = document.createElement('textarea');
  //             description.setAttribute('class','demo-card__secondary mdc-typography--body2');
  //             description.value = element.description; 
  //             description.setAttribute('disabled',true); 
  //     titleDiv.appendChild(description);
  //    containerdiv.appendChild(titleDiv);  
  //     //BUTONS
  //     const buttonContainer = document.createElement('mdc-card__actions');
  //       const buttonRow = document.createElement('mdc-card__action-buttons');
  //         const editButton = document.createElement('button');
  //               editButton.setAttribute('class','mdc-button mdc-card__action mdc-card__action--button');
  //               const textAccept = document.createTextNode("Editar"); 
  //               const that = this;
  //               editButton.onclick = function(event){
  //                 event.preventDefault();
  //                 that.editElement(event);
  //               };
  //               editButton.appendChild(textAccept);
  //         const cancelButton = document.createElement('button');
  //               cancelButton.setAttribute('class','mdc-button mdc-card__action mdc-card__action--button');
  //               cancelButton.onclick = function(event){
  //                 event.preventDefault();
  //                 that.cancelEdit(event);
  //               };
  //               const textDelete = document.createTextNode("Eliminar"); 
  //               cancelButton.appendChild(textDelete);
  //       buttonRow.appendChild(editButton);  
  //       buttonRow.appendChild(cancelButton);
  //     buttonContainer.appendChild(buttonRow);  
  //   containerdiv.appendChild(buttonContainer);       
   
    
  // }

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
    sortable.on('sortable:sort', () => console.log('sortable:sort'));
    sortable.on('sortable:sorted', () => console.log('sortable:sorted'));
    sortable.on('sortable:stop', () => {
      console.log(event);
    });
    // draggable.on('drag:start', () => console.log('drag:start'));
    // draggable.on('drag:move', () => console.log('drag:move'));
    // draggable.on('drag:stop', () => console.log('drag:stop'));
  }



}

