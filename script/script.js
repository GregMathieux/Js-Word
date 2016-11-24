var tab = document.getElementById('tableau');
var userInput = prompt("Quel est ton mot :");
var mot = userInput;

var Cell = tab.getElementsByTagName('td');
Cell[0].innerHTML = "<span id='color'> " + userInput + "</span>";
Cell[1].innerHTML = userInput.toLowerCase();
Cell[2].innerHTML = userInput.toUpperCase();

var voyelle =  compteVoyelle(mot);
Cell[3].innerHTML = "votre mot compte" + voyelle + " voyelle.";
Cell[4].innerHTML = "votre mot compte" +( mot.length - voyelle) + " de consonnes.";
function compteVoyelle(mot){
  var longueur = 0;
  var nombre = 0;
  longueur = mot.length;
  for (var i=0; i<longueur ; i++){
    if(mot.charAt(i) == 'a'|| mot.charAt(i) == 'e' || mot.charAt(i) == 'i' || mot.charAt(i) == 'o' || mot.charAt(i) == 'u' || mot.charAt(i) == 'y')
    nombre++;
  if(mot.charAt(i) == 'A'|| mot.charAt(i) == 'E' || mot.charAt(i) == 'I' || mot.charAt(i) == 'O' || mot.charAt(i) == 'U' || mot.charAt(i) == 'Y')
    nombre++;
 }
   return nombre;
  }

 var miroir = mot.split("").reverse().join("");
 Cell[5].innerHTML= ("votre mot inverser est :" + miroir + ".");
   if (miroir == mot){
 Cell[7].innerHTML=("Ce mot est un palindrome " + mot);
   }
   else{
  Cell[7].innerHTML=("Ce mot n'est pas un palindrome " + mot);
   }
