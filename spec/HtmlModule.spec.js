
import { enviroment } from '../src/js/enviroment';
import builderModule from '../src/js/HtmlModule';
describe("MAIN TEST TO CHECK RUNNING APP", function () {
	var body,
	element,
	env,
	stubData = {
		name: 'test',
		description: 'description',
		image: 'http://element.png',
	},
	renderedElemet;
	beforeAll(function () {
		body = document.getElementsByTagName("body")[0];
		element = new builderModule(1, stubData);
		renderedElemet = element.createItem();
		env = enviroment;
		body.appendChild(renderedElemet);
	});

	it("check if enviroment is working", function () {
		console.log(env);
		expect(env).toBe('http://localhost/api/');

	});
	it('should create and return a rendered form ',function(){
		
		expect(document.getElementById("form_1")).not.toBe(null);

	});
	it('should have bot buttons',function(){
		var buttonContainer = document.getElementsByTagName('mdc-card__action-buttons')[0];
		var button = buttonContainer.getElementsByTagName('button');
		console.log(button);
	});

});