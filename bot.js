
//variables
var chtmsgs=document.getElementById("bot-cht-cont");
var botmsgs=document.getElementById("bot-cht");
var usermsgs=document.getElementById("user-chat");
var takemsg=document.getElementById("take");

//To add id to chat 
var chngeid=0;



//functions start


//This funtion takes input from the user when enter is pressed
function userin(ev){
    if(ev.key=="Enter"){

        chtmsgs.innerHTML+=usermsgs.outerHTML;   
        chngeid++;
        chtmsgs.lastChild.id = chngeid;
        chtmsgs.lastChild.childNodes[1].textContent=takemsg.value;   //Manipulating to user input
        nextup(takemsg.value);
        takemsg.value="";    //cleaning input box
    }
}

//This funtion add output and replies to the user
function  nextup(intake){
    if(intake!=""){
        chtmsgs.innerHTML+=botmsgs.outerHTML;
        chngeid++;
        chtmsgs.lastChild.childNodes[1].textContent=calcexp(intake);
    }
}

//This function opens required webpage froom bot
function calcexp(inpk){
    inpk.toLowerCase();
    try{ // if no exception raises
        if(inpk.includes("hii")){    
        return "Hii!";}
        if(inpk.includes("hello")){    
        return "Hello user!";}
        else if(inpk.includes("online")){
            window.open("search.html");
            return "Enjoy shopping";
        }
        else if(inpk.includes("kids wear")){
            window.open("kids.html");
            return "Enjoy shopping";
        }
        else if(inpk.includes("electronics")){
            window.open("electronics.html");
            return "Enjoy shopping";
        }
        else if(inpk.includes("mens")){
            window.open("men.html");
            return "Enjoy shopping";
        }
        else if(inpk.includes("groceries")){
            window.open("groceries.html");
            return "Enjoy shopping";
        }
        else if(inpk.includes("kids toys")){
            window.open("kids toys.html");
            return "Enjoy shopping";
        }
        else if(inpk.includes("furniture")){
            window.open("furniture.html");
            return "Enjoy shopping";
        }
        else if(inpk.includes("bye")){
            return "Thanks for chatting hope you have a great time :)"
        }
        return eval(inpk);
    }
    catch{
        return "This is not possible , i will upgrade soon.. :)"
    }
}

//ends
