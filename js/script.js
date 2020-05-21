var buttonGenera = document.getElementById('form-genera');
var buttonAnnulla = document.getElementById('form-annulla');
var formNome = document.getElementById('form-nome');
var formKm = document.getElementById('form-km');
var formEta = document.getElementById('form-eta');

//elementi Biglietto
var biglNome = document.getElementById('bigl-nome');
//altre variabili
var formKmValue;
var formEtaValue;
//evento clicca su Genera
buttonGenera.addEventListener('click',
  function()  {
    formKmValue = formKm.value;
    alert('ciao');
  }
);
