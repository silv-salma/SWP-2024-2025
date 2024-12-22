function zeigePreis() {
  const blumenAnzeigen = document.getElementById("blumenAnzeigen");
  const preisDiv = document.getElementById("preisBlumen");

  let preis = blumenAnzeigen.value;

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

  gesamtSumme();
}

function gesamtSumme() {
  const tabelle = document.getElementById("tabelle");
  let gesamt = 0;

  for (let i = 1; i < tabelle.rows.length; i++) {
    const preisText = tabelle.rows[i].cells[1].innerText;
    const preis = parseFloat(preisText.replace("€", "").trim());
    gesamt += preis;
  }
  document.getElementById("gesamtPreis").innerText =
    "Gesamtsumme: €" + gesamt.toFixed(2);
}
