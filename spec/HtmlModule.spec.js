import {enviroment} from '../src/js/enviroment';

describe("A suite is just a function", function () {
	var a = enviroment;

	it("check if enviroment is working", function () {
		console.log(enviroment);
		expect(a).toBe('http://localhost/api/');
	});
});