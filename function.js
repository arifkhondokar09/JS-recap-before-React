function sum(a,b){
    console.log(...arguments)
    sumaary = a+b;
    return sumaary
}

const result= sum(10,20)
// console.log(result);



const person = {
    name: "arif",
    age:10, 
    profession: "job"
}
 person.names=person.name
  delete person.name;


console.log(person)