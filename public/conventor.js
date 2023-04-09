document.getElementById('convert').onclick = function(){
    var km = document.getElementById('km').value;
    var miles = km / 1.609;
    miles = miles.toFixed(2);
    document.getElementById('res').innerHTML = '' + miles + ' míl/e';
}

function clearText(){
    document.getElementById("km").value = "";
    document.getElementById("res").textContent = "";
}