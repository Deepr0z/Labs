'use strict';

const phones = [
    {name: "Danya",phone: "+3809651155690"},
    {name: "Igor",phone: "+380977777056"},

];

function findPhoneByName (name) {
    for(let i=0; i<phones.length;i++){
        if(phones[i].name===name){
            return phones[i].phone;
        }
    }
    return "Phone number not found";

}
console.log(findPhoneByName("Danya"));
console.log(findPhoneByName("Igor"));


const hash = {
    "Danya": "+3809651155690",
    "Igor": "+380977777056",
};
function findPhoneByNameHash (name){
    return hash [name];
}
console.log(findPhoneByNameHash("Danya"));
console.log(findPhoneByNameHash("Igor"));