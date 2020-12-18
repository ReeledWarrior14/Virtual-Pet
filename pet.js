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
            password: null,
            food: 30,
            turn: 0,
        })
    }
    updatePassword(Password){
        database.ref("/pet" + petCount).update({
            password: Password,
        })
    }

    getPassword(petNumber){
        var petRef = database.ref("/pet" + petNumber + '/password');
        petRef.on('value', function (Data){
            petPassword = Data.val();
            console.log(petPassword);

            if (petPassword != null){
                console.log(petPassword, password10);
                if (petPassword == password10){
                    petCount = petNumber;
                    // console.log('WORKS');
                }
            }
        });
        // for (var i = 1; i <= petCount; i++){
            // this.getPassword(i);
            // if (petPassword != null){
            //     console.log(petPassword, 'password');
            //     if (petPassword == password){
            //         // petCount = i;
            //         console.log('WORKS');
            //     }
            // }
        // }
    }

    checkPassword(password){
        for (var i = 1; i <= petCount; i++){
            password10 = password;
            this.getPassword(i);
            // if (petPassword != null){
            //     console.log(petPassword, password);
            //     if (petPassword == password){
            //         // petCount = i;
            //         console.log('WORKS');
            //     }
            // }
        }
    }
}