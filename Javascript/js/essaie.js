var nom = "amir";
var mail = "probleme@gmail.com";
var mdp = "bourbier10";
var login = prompt("whats your name");

if(nom===login){
    var login2 = prompt("what your is in email");
    
    if(mail===login2){
        var login3 = prompt("waths your passworld");
   
        if(mdp===login3){
       alert("bienvenue " + nom);
   }else {
    alert("arette dessayer de hacker !");
}

    }
    else {
        alert("arette dessayer de hacker !");
    }

}
else {
    alert("arette dessayer de hacker !");
}
