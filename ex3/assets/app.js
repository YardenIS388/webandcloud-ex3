
$(document).ready(()=>{
    let target = document.getElementById("drop");
   // console.log("its working");

    for (let index = 0; index < 20; index++) {

        target.innerHTML += "<section>  <article></article>  <article></article>  <article></article>  <article></article> </section> ";
        
    }

    document.querySelectorAll('article').forEach(item => {
        item.addEventListener("click", event =>{

            let article = event.target;
    
            if(article.style.backgroundColor !== "orange"){
                article.style.backgroundColor = "orange";
                console.log("change to orange")
            }else{
                article.style.backgroundColor = "";
                console.log("else");
            }
    
        })
    })
});



let counter =0;
const colors = ["blue","yellow","black","green","grey","red","pink","white","aqua"]

document.getElementById("btn").onclick = function(){
    counter++;
if(counter === 79){
    counter = 0;
    document.getElementsByTagName("article")[index].style.backgroundColor = "aqua";
}
console.log("this is working");
let currentColor = Math.floor(Math.random()*8+1);
    for (let index = 0; index < counter; index++) {
    document.getElementsByTagName("article")[index].style.backgroundColor = colors[currentColor];
    }
}




