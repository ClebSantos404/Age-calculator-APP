const data = new Date();
const dia = data.getDate();
const mes = data.getMonth() + 1;
const ano = data.getFullYear();

function calcularAno() {

  // Inputs
  const diaValue = parseInt(document.getElementById('dayV').value);
  const mesValue = parseInt(document.getElementById('monthV').value);
  const anoValue = parseInt(document.getElementById('yearV').value);

  if(diaValue <= 31) {
    document.getElementById('seeDays').innerHTML = `<em>${(dia - diaValue)}</em>`;
  }
  if(mesValue <= 12) {
    document.getElementById('seeMonth').innerHTML = `<em>${(mes - mesValue)}</em>`;
  }
  if(anoValue <= ano) {
    document.getElementById('seeYear').innerHTML = `<em>${(ano - anoValue)}</em>`;
  }
}