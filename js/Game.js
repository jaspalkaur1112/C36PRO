class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){     //.on() function works as a listener which will keep updating the state here. "value is a string that we have to pass as it is" 
      gameState = data.val();  //saving the value of data inside our variable created in sketch.js
    })                         //*Note: firebase works in JSON format, 
    //                          so when data gets the values, it gets it in JSON format 
    //                        right now it is holding "gamestate :0" 
    //                        so so from there we just need to fetch the value with the help of val function
   
       
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
}
