const btn = document.getElementById("btn1");
let toggle = false;
let message = "";
btn.onClick(e => {
    if(toggle){
        message = "University Of Jaffna";
    }else{
        message = "Sri Lanka";
    }
    document.getElementById("demo").innerHTML = message;
    console.log("clicked...")
    toggle  = !toggle;
})