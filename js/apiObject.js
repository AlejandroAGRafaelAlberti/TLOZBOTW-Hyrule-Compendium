"use strict";
const handleRrror = response =>{
    if(!response.ok){
        throw Error (response.status)
    } else {
        return response;
    }
}
function replace(id, newtext){//replaces old html by id with new html text
    let object = document.querySelector("#"+id)
    object.insertAdjacentHTML("afterend",newtext)
    object.remove()
}
let url_string = window.location.href
let url = new URL(url_string);
let id = url.searchParams.get("id");
url = "https://botw-compendium.herokuapp.com/api/v2/entry/"+id
console.log(url)
fetch(url)
.then(handleRrror)
.then(response => response.json())
.then(data =>{
    data = data.data
    console.log(data)
    data.name = data.name.charAt(0).toUpperCase() + data.name.slice(1)
    data.category = data.category.charAt(0).toUpperCase() + data.category.slice(1)
    document.title = data.name
    replace("image",
        "<img src=\""+data.image+"\"alt=\"\" id=\"image\">")
    replace("object_name",
        "<h2 id=\"title\">"+data.name+" : "+data.id+"</h2>")
    replace("description",
        "<p id=\"description\">"+data.description+"</p>")
    replace("h2",
    "<h2 id=\"h2\">Description:</h2>")
    replace("category",
    "<p id=\"category\">Category: "+data.category+"</p>")
    if(data.drops)
    replace("drops",
    "<p id=\"drops\">Drops: "+data.drops+"</p>")
    else{
        replace("drops","")
    }
}) 
.catch(error =>{
    console.log(error)
})