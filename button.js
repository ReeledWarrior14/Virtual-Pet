class BUTTON{
    constructor(){

    }

    display(){
        var title = createElement("h2");
        title.html("PET SIMULATOR");
        title.position(100, 10);

        var foodAmountText = createElement('h3');
        var turnText = createElement('h3');

        var input = createInput('Pet Name');
        input.position(110, 75);

        var button = createButton('Start');
        button.position(175, 300);

        var button2 = createButton('Next Turn');
        button2.position(150, 325);
        button2.hide();

        var button3 = createButton('Get Food');
        button3.position(150, 350);
        button3.hide();

        button.mousePressed(function (){
            input.hide();
            button.hide();
            button2.show();
            button3.show();

            var name = input.value();
            // console.log(name);

            petCount++

            pet.updateCount(petCount);

            // pet.updateName(name);

            pet.getFoodAmount();
            pet.getTurn();

            pet.updateFood(name);
            
            foodAmountText.html('You have ' + foodAmount + ' food');
            foodAmountText.position(120, 50);

            turnText.html('You have used ' + turn + ' turns');
            turnText.position(120, 75);

            // var greeting = createElement('h3');
            // greeting.html("HELLO " + name);
            // greeting.position(200, 200);
        })

        button2.mousePressed(function (){

            pet.getFoodAmount();
            pet.getTurn();

            foodAmount = foodAmount - 3;
            turn++

            foodAmountText.html('You have ' + foodAmount + ' food');
            turnText.html('You have used ' + turn + ' turns');

            pet.updateFoodAmount(foodAmount);
            pet.updateTurn(turn);
        })

        button3.mousePressed(function (){

            pet.getFoodAmount();
            pet.getTurn();

            foodAmount = foodAmount + 10;
            turn = turn + Math.round(random(1, 3));

            if(gamestate2 == 0){
                foodAmountText.html('You have ' + foodAmount + ' food');
                turnText.html('You have used ' + turn + ' turns');
            }

            pet.updateFoodAmount(foodAmount);
            pet.updateTurn(turn);
        })
    }
}