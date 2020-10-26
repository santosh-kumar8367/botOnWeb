//This function open the require webpage
function fun1()
{
    var product= document.getElementById("search").value;
   
	product.toLowerCase();
    if(product === 'groceries'){
        window.open("groceries.html");
    }
    else if(product==="electronics" ){
        window.open("electro.html");
    }
    else if(product==="mens wear" ){
    window.open("men.html");
    }
    else if(product === "kids wear"){
        window.open("kids.html");
    }
    else if(product === "home appliances"){
        window.open("appliances.html");
    }
    else if(product === "furniture"){
        window.open("furniture.html");
    }
    else if(product === "kids toys"){
        window.open("kids toys.html");
    }
}
//This function open end page after buying product
function fun2(){
    window.open("end.html");
}