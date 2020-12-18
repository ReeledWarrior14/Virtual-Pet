class BUTTON{
    constructor(){
        this.password2 = null;
    }

    display(){
        var title = createElement("h2");
        title.html("PET SIMULATOR");
        title.position(100, 10);

        var foodAmountText = createElement('h3');
        var turnText = createElement('h3');

        var input = createInput('Pet Name');
        input.position(110, 75);
        input.hide();

        var button = createButton('New Pet');
        button.position(175, 300);

        var buttonSignIn = createButton('Sign In');
        buttonSignIn.position(175, 325);

        var buttonStart = createButton('Start');
        buttonStart.position(175, 300);
        buttonStart.hide();

        var buttonStart2 = createButton('Start');
        buttonStart2.position(175, 300);
        buttonStart2.hide();

        var button2 = createButton('Next Turn');
        button2.position(150, 325);
        button2.hide();

        var button3 = createButton('Get Food');
        button3.position(150, 350);
        button3.hide();

        var dogFact = createElement('h6');
        dogFact.position(25, 275);

        var inputPassword = createInput('Password');
        inputPassword.position(110, 100);
        inputPassword.hide();

        var inputPassword2 = createInput('Password');
        inputPassword2.position(110, 100);
        inputPassword2.hide();

        var input2 = createInput('Name');
        input2.position(110, 75);
        input2.hide();

        var buttonRoll = createButton('TAKE A CHANCE FOR A GREAT REWARD!');
        buttonRoll.position(5, 375);
        buttonRoll.hide();

        button.mousePressed(function (){
            button.hide();
            buttonSignIn.hide();
            input.show();
            inputPassword.show();
            buttonStart.show();
        })

        buttonStart.mousePressed(function (){
            buttonStart.hide();
            input.hide();
            inputPassword.hide();
            button2.show();
            button3.show();
            buttonRoll.show();

            var name = input.value();
            var password1 = inputPassword.value();
            // console.log(name);

            petCount++

            pet.updateCount(petCount);

            // pet.updateName(name);

            pet.getFoodAmount();
            pet.getTurn();

            pet.updateFood(name);
            pet.updatePassword(password1);
            
            foodAmountText.html('You have ' + foodAmount + ' food');
            foodAmountText.position(120, 50);

            turnText.html('You have used ' + turn + ' turns');
            turnText.position(120, 75);

            // var greeting = createElement('h3');
            // greeting.html("HELLO " + name);
            // greeting.position(200, 200);
        })

        buttonStart2.mousePressed(function (){
            buttonStart2.hide();
            input2.hide();
            inputPassword2.hide();
            button2.show();
            button3.show();
            buttonRoll.show();

            pet.getCount();

            var password3 = inputPassword2.value();

            // console.log(password3);

            pet.checkPassword(password3);

            pet.getFoodAmount();
            pet.getTurn();

            if (foodAmount != undefined){
                foodAmountText.html('You have ' + foodAmount + ' food');
                turnText.html('You have used ' + turn + ' turns');
            }
            else{
                foodAmountText.html('Please Press Next Turn');
                turnText.html('');
            }

            // foodAmountText.html('You have ' + foodAmount + ' food');
            foodAmountText.position(120, 50);

            // turnText.html('You have used ' + turn + ' turns');
            turnText.position(120, 75);
        })

        button2.mousePressed(function (){

            pet.getFoodAmount();
            pet.getTurn();

            foodAmount = foodAmount - 3;
            turn++

            if (foodAmount != undefined){
                foodAmountText.html('You have ' + foodAmount + ' food');
                turnText.html('You have used ' + turn + ' turns');
            }
            else{
                foodAmountText.html('Please Press Next Turn');
                turnText.html('');
            }

            pet.updateFoodAmount(foodAmount);
            pet.updateTurn(turn);

            switch (r){
                case 1: dogFact.html('Dogs noses are wet to help absorb scent chemicals'); break;
                case 2: dogFact.html('Newfoundlands are amazing lifeguards'); break;
                case 3: dogFact.html('The Beatles song ‘A Day in the Life’ has a frequency only dogs can hear'); break;
                case 4: dogFact.html('Three dogs survived the Titanic sinking'); break;
                case 5: dogFact.html('The tallest dog in the world is 44 inches tall'); break;
                case 6: dogFact.html('Basenji dogs don’t bark, they yodel'); break;
                case 7: dogFact.html('A Greyhound could beat a Cheetah in a long distance race'); break; 
                case 8: dogFact.html('A blind man and his guide dog hiked the Appalachian Trail'); break;
                case 9: dogFact.html('The Ewoks in Star Wars were based on a dog'); break;
                case 10: dogFact.html('30% of Dalmatians are deaf in one ear'); break;
                case 11: dogFact.html('The Saluki is the oldest dog breed'); break;
                case 12: dogFact.html('Chow Chows and Shar-Peis have black tongues'); break;
                case 13: dogFact.html('Dogs have three eyelids'); break;
                case 14: dogFact.html('A dog’s nose print is unique, much like a person’s fingerprint'); break;
                case 15: dogFact.html('The shape of a dog’s face suggests its longevity: A long face means a longer life'); break;
                default: break;
            }
        })

        button3.mousePressed(function (){

            pet.getFoodAmount();
            pet.getTurn();

            foodAmount = foodAmount + 10;
            turn = turn + Math.round(random(3, 5));

            if(gamestate2 == 0){
                if (foodAmount != undefined){
                    foodAmountText.html('You have ' + foodAmount + ' food');
                    turnText.html('You have used ' + turn + ' turns');
                }
                else{
                    foodAmountText.html('Please Press Next Turn');
                    turnText.html('');
                }
            }

            pet.updateFoodAmount(foodAmount);
            pet.updateTurn(turn);

            switch (r){
                case 1: dogFact.html('Dogs noses are wet to help absorb scent chemicals'); break;
                case 2: dogFact.html('Newfoundlands are amazing lifeguards'); break;
                case 3: dogFact.html('The Beatles song ‘A Day in the Life’ has a frequency only dogs can hear'); break;
                case 4: dogFact.html('Three dogs survived the Titanic sinking'); break;
                case 5: dogFact.html('The tallest dog in the world is 44 inches tall'); break;
                case 6: dogFact.html('Basenji dogs don’t bark, they yodel'); break;
                case 7: dogFact.html('A Greyhound could beat a Cheetah in a long distance race'); break; 
                case 8: dogFact.html('A blind man and his guide dog hiked the Appalachian Trail'); break;
                case 9: dogFact.html('The Ewoks in Star Wars were based on a dog'); break;
                case 10: dogFact.html('30% of Dalmatians are deaf in one ear'); break;
                case 11: dogFact.html('The Saluki is the oldest dog breed'); break;
                case 12: dogFact.html('Chow Chows and Shar-Peis have black tongues'); break;
                case 13: dogFact.html('Dogs have three eyelids'); break;
                case 14: dogFact.html('A dog’s nose print is unique, much like a person’s fingerprint'); break;
                case 15: dogFact.html('The shape of a dog’s face suggests its longevity: A long face means a longer life'); break;
                default: break;
            }
        })

        buttonRoll.mousePressed(function (){
            pet.getFoodAmount();
            pet.getTurn();

            foodAmount = foodAmount + Math.round(random(-30, 15));
            turn = turn + Math.round(random(1, 5));

            if(gamestate2 == 0){
                if (foodAmount != undefined){
                    foodAmountText.html('You have ' + foodAmount + ' food');
                    turnText.html('You have used ' + turn + ' turns');
                }
                else{
                    foodAmountText.html('Please Press Next Turn');
                    turnText.html('');
                }
            }

            pet.updateFoodAmount(foodAmount);
            pet.updateTurn(turn);
        })

        buttonSignIn.mousePressed(function (){
            input2.show();
            inputPassword2.show();
            buttonSignIn.hide();
            button.hide();
            buttonStart2.show();
        })
    }
}