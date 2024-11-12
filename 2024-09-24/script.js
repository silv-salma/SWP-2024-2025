function changeBackground()
 {
    const bodyElement = document.body

    bodyElement.classList.toggle('grey')
}


function Cars() {
  document.getElementById("cars").style.fontSize = "20px"; 
  document.getElementById("cars").style.color = "darkblue";
  document.getElementById("cars").style.backgroundColor = "white";        
}


function changeText() {
  var x = document.getElementById("sportCars");
  if (x.innerHTML === "Cars") {
    x.innerHTML = "Sportcars";
  } else {
    x.innerHTML = "Cars";
  }
}


let image = document.getElementById('myImage');
let image1 = 'https://media.istockphoto.com/id/477435154/de/foto/v8-auto-motor.jpg?s=612x612&w=0&k=20&c=Q1UHplrPyy5Wu2z6U_KlX5ur5WyXA7MiV3LeT44RwEA=';
let image2 = 'https://i.auto-bild.de/ir_img/2/6/7/3/1/7/3/19_Bolide_Garage-2_PRINT-127595ed4058f48f.jpg?impolicy=leadteaser';

image.addEventListener('click', function() {
  if (image.src === image1) {
    image.src = image2;
  } else {
    image.src = image1;
  }
});


let timer = setTimeout(function() {
  alert('You have been on this website for more than 5 seconds, congratulations!');
}, 5000);