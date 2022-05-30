// On clicking remove button the item should be removed from DOM as well as localstorage.
let deepak =JSON.parse(localStorage.getItem("coffee"))
deepak.map(function(el,index){
    let bucket =document.getElementById("bucket")
let div =document.createElement("div")
let image=document.createElement("img")
image.src=el.image
let price=document.createElement("h3")
price.innerText=`Price are :- ${el.price}`
let btn=document.createElement("button")
btn.innerText="Remove"
btn.id="remove_coffee"
btn.addEventListener("click",function(){
    removecof(el.index)

})
div.append(image,price,btn)
bucket.append(div)

})

function removecof(el,index){
    deepak.splice(index,1)
    localStorage.setItem("coffee",JSON.stringify(deepak))
    alert("Items removed")
    window.location.reload();

}