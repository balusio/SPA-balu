'use strict';

export default class builderModule{

	constructor(id,dataElement){
		this.currentId =id;
		this.name = dataElement.name;
		this.description = dataElement.description;
		this.containerDiv = document.createElement('form');
		this.title_iput;
		this.description_textarea;
		this.editButton;
		this.cancelButton;
	}

	createItem(){
		this.containerDiv.setAttribute('id', `form_${this.currentId}`);
		this.containerDiv.setAttribute('data-sort', this.currentId);
		this.containerDiv.setAttribute('class', 'mdc-card');
		const titleDiv = document.createElement('div');
		titleDiv.setAttribute('class', 'mdc-card__media mdc-card__media');
		this.title_iput = document.createElement('input');
		this.title_iput.setAttribute('class', 'demo-card__title mdc-typography--headline6 not-sortable');
		this.title_iput.setAttribute('value', this.name);
		this.title_iput.setAttribute('disabled', true);
		titleDiv.appendChild(this.title_iput);
		// description
		this.description_textarea = document.createElement('textarea');
		this.description_textarea.setAttribute('class', 'demo-card__secondary mdc-typography--body2 not-sortable');
		this.description_textarea.value = this.description;
		this.description_textarea.setAttribute('disabled', true);
		titleDiv.appendChild(this.description_textarea);
		this.containerDiv.appendChild(titleDiv);
		//BUTONS
		const buttonContainer = document.createElement('mdc-card__actions');
		const buttonRow = document.createElement('mdc-card__action-buttons');
		this.editButton = document.createElement('button');
		this.editButton.setAttribute('class', 'mdc-button mdc-card__action mdc-card__action--button not-sortable');
		const textAccept = document.createTextNode("Editar");
		this.editButton.onclick = (event)=>{
			event.preventDefault();
			this.editElement(event);
		};
		this.editButton.appendChild(textAccept);
		this.cancelButton = document.createElement('button');
		this.cancelButton.setAttribute('class', 'mdc-button mdc-card__action mdc-card__action--button not-sortable');
		this.cancelButton.click((event)=>{
			event.preventDefault();
			this.cancelEdit(event);
		}); 
		const textDelete = document.createTextNode("Eliminar");
		this.cancelButton.appendChild(textDelete);
		buttonRow.appendChild(this.editButton);
		buttonRow.appendChild(this.cancelButton);
		buttonContainer.appendChild(buttonRow);
		this.containerDiv.appendChild(buttonContainer);
		return this.containerDiv;
		

	}
	editElement(event) {
		if (event.target.innerHTML === 'Editar') {
			
			console.log(event.target);
			event.target.innerHTML = 'aceptar';
			this.title_iput.removeAttribute('disabled');
		} else if (event.target.innerHTML === 'aceptar') {
			this.title_iput.setAttribute('disabled', true);
			this.title_iput.setAttribute('disabled');
			event.target.innerHTML = 'editar';
		} else {
		
		}

	}

	cancelEdit(event) {

		console.log(event);
		const currentElement = event.target.form;

	}


}