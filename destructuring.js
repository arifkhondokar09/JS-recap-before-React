const person = ["hero alom", " hena", "jayed khan"];
console.log(...person);


const [heralom, hena, jayedkhan]= person
console.log(heralom);;



const anthem= "i love you arif";
console.log(anthem.split(" "));



const car ={
    brand: "toyota",
    model: "voxy",
    version: 3
}



const {brand,version ,model}= car
console.log(version);


const names= ["arif", "sojib","walid"];

const [boss , dokandar, hero]= names;
console.log(dokandar)