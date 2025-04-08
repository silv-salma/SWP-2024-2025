function loadJSON(file, callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", file, true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

function zeigePreis() {
  const blumenAnzeigen = document.getElementById("blumenAnzeigen");
  const preisDiv = document.getElementById("preis");
  const ausgewaehltesProdukt = blumenAnzeigen.value;

  switch (ausgewaehltesProdukt) {
    case "Sonnenblume":
      preis = 1.0;
      break;

    case "Tulpe":
      preis = 2.0;
      break;

    case "Lilie":
      preis = 3.0;
      break;

    case "Rose":
      preis = 4.0;
      break;

    case "Edelweiß":
      preis = 5.0;
      break;
  }

  preisDiv.innerText = preis + " €";
}

function bestellen() {
  alert("Ihre Produkte wurden bestellt...");
}

function zeileEinfuegen() {
  const tabelle = document.getElementById("tabelle");
  const select = document.getElementById("blumenAnzeigen");
  const produktName = select.value;

  const produktPreis =
    select.options[select.selectedIndex].getAttribute("data-preis");

  const neueReihe = tabelle.insertRow(-1);

  const zelleName = neueReihe.insertCell(0);
  const zellePreis = neueReihe.insertCell(1);
  zelleName.innerHTML = produktName;

  zellePreis.innerHTML = `€${produktPreis}`;
}

function gesamtPreis() {}
