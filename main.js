
function see_the_stuffsveg(){
    document.getElementById("veg_menu").style.display="inline-block";
    document.getElementById("veggies").style.display="none";
}
function see_the_stuffsmeat(){
    document.getElementById("veg_menu").style.display="inline-block";
    document.getElementById("rest_of_menu").style.display="inline-block";
    document.getElementById("meaties").style.display="none";
}
added=[];
function add_item(){
    input_value=document.getElementById("add_item").value;
    added.push(input_value);
    document.getElementById("confirm").innerHTML="your item,"+added+"has been added to the menu!";
}