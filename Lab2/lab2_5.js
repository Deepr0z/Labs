'use strict';

function fn() {
    const user1 = {
        name: "Kyrylo"
    };
    let user2 = {
        name:"Danya"
    };

    user1.name = "Igor";
    user2.name = "Vanya";
    console.log(user1);
    console.log(user2);
    
    user2 = {
        name: "Matviy"
    };
    console.log(user2);   
}
fn();



function createUser(name,city){
    return {
        name: name,
        city: city,
    }
}
console.log(createUser("Roman","Vyshneve"));