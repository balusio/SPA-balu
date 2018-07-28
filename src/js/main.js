import builder from './builderHtml';
function startGame(){
    
    const p = new builder(300, 400);
    p.createElement();
    console.log('The width of this polygon is ' + p.width);
}


window.onload = startGame();