const submit= ()=> {
    const id= document.getElementById("id").value;
const name= document.getElementById("name").value;


 const data = {id,name};
localStorage.setItem(id,JSON.stringify(data))
}

const datas=localStorage.getItem("qqqqq");
console.log(JSON.parse(datas));




const clearAll= ()=> {
    localStorage.clear()
}