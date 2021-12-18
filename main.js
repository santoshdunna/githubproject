function loadjson(file,callback){
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status=="200"){
            callback(xhr.responseText);
        }
    };
    xhr.send(null);
}

loadjson("data.json",function(text){
    var data = JSON.parse(text);
    console.log(data);
    disply(data.cards)
})



function disply(mob){
    var deck=document.querySelector(".card-deck")
    console.log(deck)


    for( var i in mob){   
        var caddiv=document.createElement("div")
        caddiv.classList.add("card")
        var cadimg=document.createElement("img")
        cadimg.src=mob[i].img
        caddiv.appendChild(cadimg)
        deck.appendChild(caddiv)
        
    }
    }