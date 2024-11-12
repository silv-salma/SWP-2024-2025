const auszahlungEnde = document.querySelector("#auszahlung");

function ermittleAuszahlung (){

const wert = document.querySelector("#menge").value;
let ausgabe;

switch (wert) {
    case "100":
    ausgabe = 100;
      break;

    case "200":
    ausgabe = 200;
      break;

    case "300":
    ausgabe = 300;    
      break;

    case "other":
    ausgabe = prompt("Geben Sie einen Betrag bis zu 400€ ein:");
    if (isNaN(ausgabe)) {

      alert("Bitte geben Sie nur Zahlen ein.");
    }
    if (ausgabe > 400) {
      alert("Ungültig. Bitte geben Sie einen Wert bis 400€ ein.");
      return;
    }
    break;

    default: 
    alert("Eingabe ungültig. Versuchen Sie es wieder.");
    break;    
  }

  auszahlungEnde.innerHTML = `Sie haben ${ausgabe}€ ausgezahlt bekommen.`;

}