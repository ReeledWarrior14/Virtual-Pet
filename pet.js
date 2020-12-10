class PET{
    constructor(){

    }
    getCount(){
        var petRef = database.ref("petCount");
        petRef.on('value', function (Data){
            petCount = Data.val();
        });
    }
    getFoodAmount(){
        // this.getCount();
        var foodRef = database.ref('/pet' + petCount + '/food');
        // console.log(petCount);
        foodRef.on('value', function (Data){
            foodAmount = Data.val();
            // console.log(foodAmount);
        });
    }
    getTurn(){
        var turnRef = database.ref("/pet" + petCount + '/turn');
        turnRef.on('value', function (Data){
            turn = Data.val();
        });
    }
    updateCount(Count){
        database.ref('/').update({
            petCount: Count,
        });
    }
    updateFoodAmount(Food){
        if (gamestate2 == 0){
            database.ref("/pet" + petCount).update({
                food: Food,
            });
        }
    }
    updateTurn(Turn){
        if(gamestate2 == 0){
            database.ref("/pet" + petCount).update({
                turn: Turn,
            });
        }
        // var dogFact = createElement('h6');
        // console.log(r);
        // switch (r){
        //     case 1: dogFact.html('Dogs noses are wet to help absorb scent chemicals');
        //     case 2: dogFact.html('Newfoundlands are amazing lifeguards');
        //     case 3: dogFact.html('The Beatles song ‘A Day in the Life’ has a frequency only dogs can hear');
        //     case 4: dogFact.html('Three dogs survived the Titanic sinking');
        //     case 5: dogFact.html('The tallest dog in the world is 44 inches tall');
        //     case 6: dogFact.html('Basenji dogs don’t bark, they yodel');
        //     case 7: dogFact.html('A Greyhound could beat a Cheetah in a long distance race');
        //     case 8: dogFact.html('A blind man and his guide dog hiked the Appalachian Trail');
        //     case 9: dogFact.html('The Ewoks in Star Wars were based on a dog');
        //     case 10: dogFact.html('30% of Dalmatians are deaf in one ear');
        //     case 11: dogFact.html('The Saluki is the oldest dog breed');
        //     case 12: dogFact.html('Chow Chows and Shar-Peis have black tongues');
        //     case 13: dogFact.html('Dogs have three eyelids');
        //     case 14: dogFact.html('A dog’s nose print is unique, much like a person’s fingerprint');
        //     case 15: dogFact.html('The shape of a dog’s face suggests its longevity: A long face means a longer life');
        //     default: break
        // }
        //   dogFact.position(25, 250);
    }
    // updateName(Name){
    //     var petIndex = 'pet' + petCount;
    //     database.ref(petIndex).set({
    //         name: Name,
    //     });
    // }
    updateFood(Name){
        petIndex1 = 'pet' + petCount;
        database.ref(petIndex1).set({
            name: Name,
            food: 30,
            turn: 0,
        })
    }
}