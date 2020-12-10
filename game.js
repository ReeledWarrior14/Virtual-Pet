class GAME{
    constructor(){

    }

    getState(){
        var gamestate = database.ref('gamestate');
        gamestate.on('value', function (Data){
            gamestate = Data.val();
        });
    }
    update(State){
        database.ref('/').update({
            gamestate: State,
        });
    }
    start(){
        if (gamestate == 0){
            pet = new PET();
            pet.getCount();
            // pet.getFoodAmount();
            // pet.getTurn();
            button = new BUTTON();
            button.display();
        }
    }
}