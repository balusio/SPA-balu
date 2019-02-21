
import { enviroment } from '../src/js/enviroment';
import builderModule from '../src/js/htmlModule';
describe("MAIN TEST TO CHECK RUNNING APP", function () {
	var body,
	element,
	env,
	stubData = {
		name: 'test',
		description: 'description',
		image: 'http://element.png',
	},
	renderedElemet,
	buttonContainer,
	editButton;
	beforeAll(function () {
		body = document.getElementsByTagName("body")[0];
		element = new builderModule(1, stubData);
		renderedElemet = element.createItem();
		env = enviroment;
		body.appendChild(renderedElemet);
		buttonContainer = document.getElementsByTagName('mdc-card__action-buttons')[0];
		editButton = buttonContainer.getElementsByTagName('button')[0];
	});

	it("check if enviroment is working", function () {
		console.log(env);
		expect(env).toBe('http://localhost/api/');

	});
	it('should create and return a rendered form ',function(){
		
		expect(document.getElementById("form_1")).not.toBe(null);

	});
	it('inputs should be trigger actions after click button ',function(){
		expect(element.name).toBe('test');
		expect(editButton.innerHTML).toBe('Editar');
		var input = document.getElementsByClassName('demo-card__title');
		expect(input[0].disabled).toBeTruthy();
		editButton.click();
		element.title_iput.value = 'CHANGED';
		expect(editButton.innerHTML).toBe('ACEPTAR');
		expect(input[0].disabled).toBeFalsy();
	});


});