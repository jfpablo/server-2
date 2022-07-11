cont.innerHTML = "chargement en cours"
setTimeout(function(){
    loaded();
},5000);
function loaded()
{
  cont.innerHTML = "une erreur s'est produite"
}
