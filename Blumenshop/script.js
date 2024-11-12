function zeigePreis() {

  const blumenAnzeigen = document.getElementById("blumenAnzeigen");
  const preisDiv = document.getElementById("preis");
  const ausgewaehltesProdukt = blumenAnzeigen.value;

  switch (ausgewaehltesProdukt) {

      case "Sonnenblume":
          preis = 1.00;
          break;

      case "Tulpe":
          preis = 2.00;
          break;

      case "Lilie":
          preis = 3.00;
          break;

      case "Rose":
          preis = 4.00;
          break;

      case "Edelweiß":
          preis = 5.00;
          break;
  }

  preisDiv.innerText = preis + " €"; 

}





function bestellen(){
  alert("Ihre Produkte wurden bestellt...");
}




function zeileEinfuegen() {

  const tabelle = document.getElementById("tabelle");
  const select = document.getElementById("blumenAnzeigen");
  const produktName = select.value;

  const produktPreis = select.options[select.selectedIndex].getAttribute('data-preis');


  const neueReihe = tabelle.insertRow(-1); 


  const zelleName = neueReihe.insertCell(0);
  const zellePreis = neueReihe.insertCell(1);
  zelleName.innerHTML = produktName;

  zellePreis.innerHTML = `€${(produktPreis)}`; 


}