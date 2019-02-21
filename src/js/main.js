import builder from './builder';

function initApp(){
    const app = new builder(300, 400);
    app.getItems();
    app.makeElementsSortables();
}


window.onload = initApp();