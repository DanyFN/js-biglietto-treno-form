var buttonGenera = document.getElementById('form-genera');
var buttonAnnulla = document.getElementById('form-annulla');
var formNome = document.getElementById('form-nome');
var formKm = document.getElementById('form-km');
var formEta = document.getElementById('form-eta');
//ELEMENTI BIGLIETTO
var biglNome = document.getElementById('bigl-nome');
var randomCarrozza = document.getElementById('bigl-carrozza');
var randomCp = document.getElementById('bigl-codicecp');
var offerta = document.getElementById('bigl-offerta');
var contenitore = document.getElementById('biglietto');
var costo = document.getElementById("bigl-costo");

//EVENTO CLICK
buttonGenera.addEventListener('click',
  function()  {
    var prezzo = formKm.value * 0.21;
    var sconto20 = prezzo * 20 / 100;
    var sconto40 = prezzo * 40 / 100;
    biglietto.classList.remove('hidden');
    formKmValue = formKm.value;
    formEtaValue = formEta.value;
    biglNome.innerHTML = formNome.value;
    randomCarrozza.innerHTML = Math.floor(Math.random() * 10);
    randomCp.innerHTML = Math.floor(Math.random() * 10);
    if (formEtaValue === 'maggiorenne') {
      offerta.innerHTML = "PREZZO NORMALE";
      costo.innerHTML = prezzo + " €";
    }else if (formEtaValue === 'minorenne') {
      offerta.innerHTML = "SCONTO SILVER";
      costo.innerHTML = (prezzo - sconto20).toFixed(2) + " €";
    }else if (formEtaValue === 'over') {
      offerta.innerHTML = "SCONTO GOLD";
      costo.innerHTML = (prezzo - sconto40).toFixed(2) + " €";
    }
  }
);

//EVENTO ANNULLA
buttonAnnulla.addEventListener('click',
  function() {
    formNome.value = '';
    biglNome.innerHTML = '';
    formKm.value = '';
    randomCp.innerHTML = '';
    randomCarrozza.innerHTML = '';
    costo.innerHTML = '';
    biglietto.classList.add('hidden');
  }
)
