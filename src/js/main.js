import builder from './builderHtml';
const css = require('../scss/main.scss');
function startGame(){
    
    const p = new builder(300, 400);
    p.getItems();

}


window.onload = startGame();