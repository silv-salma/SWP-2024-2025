function berechnen(){
    let one = document.getElementById("num1").value;
    let two = document.getElementById("num2").value;
    let res = Number(one) + Number(two);
    document.getElementById("ans").innerHTML = res; 
}
