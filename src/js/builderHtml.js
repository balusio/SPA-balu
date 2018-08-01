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
    this.totalElements = 0;
    this.edit = false;
  }

  getItems() {
    this.http.get(`${enviroment}public/bd-test`).then((response)=>{
      
      response.data.forEach(element => {
        this.totalElements+=1;
        this.createItems(element);    
      });
    });
   
  }
  createItems(element){
    let containerdiv = document.createElement('form');
    containerdiv.setAttribute('id',`form_${this.totalElements}`)
    containerdiv.setAttribute('class', 'mdc-card');
      const titleDiv= document.createElement('div');
      titleDiv.setAttribute('class','mdc-card__media mdc-card__media');
        const title = document.createElement('input');
              title.setAttribute('class','demo-card__title mdc-typography--headline6');
              title.setAttribute('value',element.name); 
              title.setAttribute('disabled',true);
      titleDiv.appendChild(title); 
      // description
        const description = document.createElement('textarea');
              description.setAttribute('class','demo-card__secondary mdc-typography--body2');
              description.value = element.description; 
              description.setAttribute('disabled',true); 
      titleDiv.appendChild(description);
     containerdiv.appendChild(titleDiv);  
      //BUTONS
      const buttonContainer = document.createElement('mdc-card__actions');
        const buttonRow = document.createElement('mdc-card__action-buttons');
          const editButton = document.createElement('button');
                editButton.setAttribute('class','mdc-button mdc-card__action mdc-card__action--button');
                const textAccept = document.createTextNode("Editar"); 
                const that = this;
                editButton.onclick = function(event){
                  event.preventDefault();
                  that.editElement(event);
                };
                editButton.appendChild(textAccept);
          const cancelButton = document.createElement('button');
                cancelButton.setAttribute('class','mdc-button mdc-card__action mdc-card__action--button');
                cancelButton.onclick = function(event){
                  event.preventDefault();
                  that.cancelEdit(event);
                };
                const textDelete = document.createTextNode("Eliminar"); 
                cancelButton.appendChild(textDelete);
        buttonRow.appendChild(editButton);  
        buttonRow.appendChild(cancelButton);
      buttonContainer.appendChild(buttonRow);  
    containerdiv.appendChild(buttonContainer);       
    document.body.appendChild(containerdiv);
  }

  editElement(event){
    if(!this.edit &&  event.target.innerHTML === 'Editar'){
      this.edit = true;
      console.log(event.target);
      event.target.innerHTML ='aceptar';
      const currentElement = event.target.form;
      
    } else if(event.target.innerHTML === 'aceptar'){
      alert('Termina de editar tú formulario');
    } else{
      alert('estas editando otro form');
    }

  }

  cancelEdit(event){
    
    console.log(event);
    const currentElement = event.target.form;
    
  }


}

