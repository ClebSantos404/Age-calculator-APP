const data = new Date();
const dia = data.getDate();
const mes = data.getMonth() + 1;
const ano = data.getFullYear();

function calcularAno() {
  // Inputs
  const inputDay = document.getElementById("dayV");
  const inputMonth = document.getElementById("monthV");
  const inputYear = document.getElementById("yearV");

  const diaValue = parseInt(inputDay.value);
  const mesValue = parseInt(inputMonth.value);
  const anoValue = parseInt(inputYear.value);

  if (inputDay.value == "" && inputMonth.value == "" && inputYear.value == "") {
    callbackErro();
  } else {
    callbackSucesso();
  }

  function callbackErro() {
    const alert = document.getElementsByClassName("required");
    const h3 = document.getElementsByClassName("h3");

    for (var i in h3) {
      if (i <= h3.length) {
        let arr2 = [...h3];
        arr2[i].style.color = "red";
      }
    }

    for (var i in alert) {
      let arr = [...alert];
      if (i <= alert.length) {
        arr[i].innerHTML = "This field is empty";
        arr[i].style.color = "red";
      }
    }

    inputDay.style.border = "1px solid red";
    inputMonth.style.border = "1px solid red";
    inputYear.style.border = "1px solid red";
  }

  function callbackSucesso() {
    const alert = document.getElementsByClassName("required");
    const h3 = document.getElementsByClassName("h3");

    inputDay.style.border = "1px solid rgba(0, 0, 0, 0.192)";
    inputMonth.style.border = "1px solid rgba(0, 0, 0, 0.192)";
    inputYear.style.border = "1px solid rgba(0, 0, 0, 0.192)";

    for (var i in h3) {
      if (i <= h3.length) {
        let arr2 = [...h3];
        arr2[i].style.color = "#808080";
      }
    }

    for (var i in alert) {
      let arr = [...alert];
      if (i <= alert.length) {
        arr[i].innerHTML = "";
      }

      if (diaValue <= 31) {
        document.getElementById("seeDays").innerHTML = `<em>${
          dia - diaValue
        }</em>`;
        inputDay.value = "";
      }
      if (mesValue <= 12) {
        document.getElementById("seeMonth").innerHTML = `<em>${
          mes - mesValue
        }</em>`;
        inputMonth.value = "";
      }
      if (anoValue <= ano) {
        document.getElementById("seeYear").innerHTML = `<em>${
          ano - anoValue
        }</em>`;
        inputYear.value = "";
      }
    }
  }
}
