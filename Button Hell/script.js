(() => {
  const container = document.getElementById("buttons-container");
  const countLabel = document.getElementById("button-count");
  const deleteInput = document.getElementById("delete-count");
  const deleteButton = document.getElementById("delete-button");

  // Farben-Array mit 10 Farben
  const colors = [
    "#e74c3c", // rot
    "#3498db", // blau
    "#2ecc71", // grün
    "#9b59b6", // lila
    "#f1c40f", // gelb
    "#e67e22", // orange
    "#1abc9c", // türkis
    "#34495e", // dunkelblau
    "#d35400", // dunkelorange
    "#7f8c8d", // grau
  ];

  // Funktion zum Aktualisieren der Anzahl in der Überschrift
  function updateCount() {
    const currentCount = container.children.length;
    countLabel.textContent = currentCount;
  }

  // Funktion zum zufälligen Setzen der Buttonhintergrundfarbe
  function assignRandomColors() {
    Array.from(container.children).forEach((btn) => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      btn.style.backgroundColor = randomColor;
    });
  }

  // Funktion zum Erstellen eines Buttons mit Event Listener
  function createButton() {
    const btn = document.createElement("button");
    btn.textContent = "Klick mich";
    btn.type = "button";
    btn.addEventListener("click", onButtonClick);
    return btn;
  }

  // Event Handler für Button Klick - Buttons verdoppeln und Farben neu zuweisen
  function onButtonClick() {
    const currentButtons = Array.from(container.children);

    currentButtons.forEach(() => {
      const newButton = createButton();
      container.appendChild(newButton);
    });

    updateCount();
    assignRandomColors();
  }

  // Event Handler zum Löschen von Buttons
  function onDeleteClick() {
    let countToDelete = parseInt(deleteInput.value, 10);

    if (isNaN(countToDelete) || countToDelete < 1) {
      alert("Bitte geben Sie eine gültige Zahl größer 0 ein.");
      return;
    }

    const currentButtons = container.children.length;

    // Mindestens 1 Button muss immer bleiben
    const maxDelete = currentButtons - 1;
    if (countToDelete > maxDelete) {
      countToDelete = maxDelete;
    }

    for (let i = 0; i < countToDelete; i++) {
      container.removeChild(container.lastChild);
    }

    updateCount();
    assignRandomColors();

    // Optional: Eingabefeld leeren nach Löschen
    deleteInput.value = "";
  }

  // Basis Button erhält Event Listener und initiale Farbe
  const baseButton = document.getElementById("base-button");
  baseButton.addEventListener("click", onButtonClick);
  deleteButton.addEventListener("click", onDeleteClick);

  // Initiale Anzeige und Farbe
  updateCount();
  assignRandomColors();
})();
