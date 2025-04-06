const mobile= {
 company: "apple",
brand: "iphone",
model: 16,
variant:{
    country: "japan",
    released: 2023
}
}
const objectToStringify= JSON.stringify(mobile);
console.log(objectToStringify);


stringifyToObject= JSON.parse(objectToStringify);
console.log(stringifyToObject)