/* function api(){
    const response= fetch("https://jsonplaceholder.typicode.com/users");
const data= response.json();
console.log(data)
}
api() */


fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then (data => {
     remove(data)
    })

function remove(ds){
for( let d of ds){
    // console.log(d.email);
    const container= document.querySelector("body")
    const p= document.createElement("p");
    p.innerText=`${d.email}`;
    container.appendChild(p)
} 
}

    