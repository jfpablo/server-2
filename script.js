cont.innerHTML = "chargement en cours"
setTimeout(function(){
    loaded();
},2000);
function loaded()
{
  cont.innerHTML = "une erreur s'est produite";
    accueil.innerHTML = "accueil";
        accueil.style.background = "blue";
}
