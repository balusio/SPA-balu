import builder from './builderHtml';
function startGame(){
    
    const p = new builder(300, 400);
    p.createElement();
    console.log('The width of this polygon is ' + p.width);
    function createElementHtml(id,name,image,description,){
        var containerdiv = document.createElement('div'),
            nwtag = document.createElement(tagname);
        nwtag.id = id;
        containerdiv.appendChild(nwtag);
        return containerdiv.innerHTML;
      }
      //usage
      createElementHtml('id1','div'); //=> <div id="id1"></div>

}


window.onload = startGame();