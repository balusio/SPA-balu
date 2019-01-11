require('jasmine-ajax');
import builder from '../src/js/builder';
var stubHttpCall = 
		[{
		'name': 'name 1',
		'sort': 1,
		'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis in tortor vitae convallis. Mauris non lacus massa. Donec pulvinar placerat tristique. Fusce mauris nisi, iaculis nec dui nec, mollis vestibulum risus. Proin a congue nisl. Nam mattis enim fringilla, tristique neque pulvinar, phaz',
		'image' : 'http://stub.image.png'
	},
	{
		'name': 'name 2',
		'sort': 2,
		'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis in tortor vitae convallis. Mauris non lacus massa. Donec pulvinar placerat tristique. Fusce mauris nisi, iaculis nec dui nec, mollis vestibulum risus. Proin a congue nisl. Nam mattis enim fringilla, tristique neque pulvinar, phaz',
		'image': 'http://stub.image.png'
	},
	{
		'name': 'name 2',
		'sort': 2,
		'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis in tortor vitae convallis. Mauris non lacus massa. Donec pulvinar placerat tristique. Fusce mauris nisi, iaculis nec dui nec, mollis vestibulum risus. Proin a congue nisl. Nam mattis enim fringilla, tristique neque pulvinar, phaz',
		'image': 'http://stub.image.png'
	}];
var mainBuilder;
describe("test builder calls", function () {

	beforeAll(function(){
		mainBuilder = new builder();
	});
	beforeEach(function(){
		jasmine.Ajax.install();
		jasmine.Ajax.stubRequest(
			'http://localhost/api/public/sort',
		).andReturn({
			responseText: stubHttpCall
		});
	});
	// don't forget to uninstall as well...
	afterEach(function () {
		jasmine.Ajax.uninstall();

	});
	// then register a request to which automatically will be responded

	it('test http promise',function(){
		var body = document.getElementsByTagName("body")[0];
		var container = document.createElement("div");
		container.setAttribute('class','container-sort');
		body.appendChild(container);
		mainBuilder.getItems();
		// expect(jasmine.Ajax.requests.mostRecent().url).toBe('http://localhost/api/public/sort');
	});

});