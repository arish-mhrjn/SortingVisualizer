//variables

var inp_as = document.getElementById("a_size");
array_size = inp_as.value;
var inp_gen = document.getElementById("a_generate");
var inp_aspeed = document.getElementById("a_speed");

var butts_algos = document.querySelectorAll(".algos button");
var div_sizes = [];
var divs = [];
var margin_size;
var cont = document.getElementById("array_container");
cont.style = "flex-direction: row";

inp_gen.addEventListener("click", generate_array);
inp_as.addEventListener("input", update_array_size);

function generate_array() {
  cont.innerHTML = "";
  for (var i = 0; i < array_size; i++) {
    div_sizes[i] =
      Math.floor(Math.random() * 0.5 * (inp_as.max - inp_as.min)) + 10;
    divs[i] = document.createElement("div");
    cont.appendChild(divs[i]);
    margin_size = 0.1;
    divs[i].style =
      "margin:0%" +
      margin_size +
      "%;background-color:black;width:" +
      (100 / array_size - 2 * margin_size) +
      "%;height:" +
      div_sizes[i] +
      "%;";
  }
}

function update_array_size() {
  array_size = inp_as.value;
  generate_array();
}

window.onload = update_array_size();

//Run approprite algorithm
for (var i = 0; i < butts_algos.length; i++) {
  butts_algos[i].addEventListener("click", runAlgo);
}

function disable_buttons() {
  for (var i = 0; i < butts_algos.length; i++) {
    butts_algos[i].classList = [];
    butts_algos[i].classList.add("butt_locked");
    butts_algos[i].disabled = true;
    inp_as.disabled = true;
    inp_gen.disabled = true;
    inp_aspeed.disabled = true;
  }
}

function runAlgo() {
  disable_buttons();
  console.log(this.innerHTML);
  this.classList.add("butt_selected");
  switch (this.innerHTML) {
    case "Bubble":
      bubble();
      break;
    case "Selection":
      selection();
      break;
    case "Insertion":
      insertion();
      break;
    case "Merge":
      merge();
      break;
    case "QUICK":
      quick();
      break;
    case "HEAP":
      heap();
      break;
  }
}
