 let input = document.getElementById("text");
 let arrayPost = [];

 const getPost = async (url) =>{
    let server = await fetch (url,{
        method:"GET",
    }) 
    if(server.status !== 200){
        throw server.status;
    }
    let serverjson = await server.json();
    return serverjson;
 }
 getPost("https://jsonplaceholder.typicode.com/posts")
 .then( serverJsonPost => {
    serverJsonPost.forEach(element => {
        const li = document.createElement("li");
        li.innerText = element.title;
        arrayPost.push(li);
        document.getElementById("tsatia").appendChild(li);
    });
 })
.catch(error =>{
    console.log(error);
})

 let serch = simbulo => {
    arrayPost.forEach(item =>{
        if(item.innerText.toLowerCase().includes(simbulo.toLowerCase())){
            item.classList.remove("hide");
        }else {
            item.classList.add("hide");
        }
    })
 }
 input.addEventListener("input", (ivent) => {
    serch(ivent.target.value);
 })