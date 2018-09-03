'use strict';
import { enviroment } from './enviroment';
export default class builderModule{

	constructor(id,dataElement){
		this.currentId =id;
		this.name = dataElement.name;
		this.description = dataElement.description;
		this.imageFileUrl= dataElement.image;
		this.containerDiv = document.createElement('form');
		this.title_iput;
		this.description_textarea;
		this.editButton;
		this.cancelButton;
		this.image;
		this.imagePreloader;
	}

	createItem(){
		this.containerDiv.setAttribute('id', `form_${this.currentId}`);
		this.containerDiv.setAttribute('data-sort', this.currentId);
		this.containerDiv.setAttribute('class', 'mdc-card');
		// <input id="photo" type="file" accept="image/*">  ;

	   const titleDiv = document.createElement('div');
		titleDiv.setAttribute('class', 'mdc-card__media mdc-card__media not-sortable');
		this.image = document.createElement('input');
		this.image.setAttribute('type', 'file');
		this.image.setAttribute('class', 'hidden-file not-sortable');
		this.image.setAttribute('id', `file_${this.currentId}`);
		this.image.setAttribute('value', `${this.imageFileUrl}`);
		this.imagePreloader = document.createElement('label');
		this.imagePreloader.setAttribute('for', `file_${this.currentId}`);
		this.imagePreloader.setAttribute('style', `background-url('${enviroment}public/${this.imageFileUrl}');`);
		this.imagePreloader.setAttribute('class','image-preloader not-sortable');
		
		// this.imagePreloader.onclick = (event) => {
		// 	event.preventDefault();
		// 	this.triggerClick(event);
		// };
	   titleDiv.appendChild(this.image);
		titleDiv.appendChild(this.imagePreloader);
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
		//THIS SCOPE FOR DIFFERENTE PORPOUSE
		const that = this;
		this.image.addEventListener('change', function () {
			if (this.files && this.files[0]) {
				that.setImage(this.files[0]);
				
			}

				
			
		});


		return this.containerDiv;
		

	}
	triggerClick(){
		// var event = new Event('click');
		// this.image.dispatchEvent('change');
	}
	setImage(file){
		const urlPreload = URL.createObjectURL(file);
		this.imagePreloader.setAttribute('style', `background-image: url('${urlPreload}');`);

	}
	editElement(event) {
		if (this.editButton.innerHTML === 'Editar') {
			
			console.log(event.target);
			this.editButton.innerHTML = 'ACEPTAR';
			this.title_iput.removeAttribute('disabled');
			this.description_textarea.removeAttribute('disabled');
		} else if (this.editButton.innerHTML === 'ACEPTAR') {
			this.title_iput.setAttribute('disabled', true);
			this.description_textarea.setAttribute('disabled',true);
			this.editButton.innerHTML = 'Editar';
		} else {
		
		}

	}

	cancelEdit(event) {

		console.log(event);
		const currentElement = event.target.form;

	}


}