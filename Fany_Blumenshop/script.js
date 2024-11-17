function zeigePreis() {
  const blumenAnzeigen = document.getElementById("blumenAnzeigen");
  const preisDiv = document.getElementById("preisBlumen");

  let preis = blumenAnzeigen.value

  preisDiv.innerText = preis + " €";
}

function bestellen() {
  alert("Ihre Produkte wurden bestellt...");
}

function zeileEinfuegen() {
  const tabelle = document.getElementById("tabelle");
  const select = document.getElementById("blumenAnzeigen");
  const produktName = select.options[select.selectedIndex].text;

  const produktPreis =
  select.options[select.selectedIndex].getAttribute("value");

  const neueReihe = tabelle.insertRow(-1);

  const zelleName = neueReihe.insertCell(0);
  const zellePreis = neueReihe.insertCell(1);

  zelleName.innerHTML = produktName;
  zellePreis.innerHTML = `€${produktPreis}`;
}

function gesamtSumme(){


}