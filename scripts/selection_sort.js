function selection() {
  c_delay = 0;
  for (var i = 0; i < array_size - 1; i++) {
    var min_index = i;
    div_update(divs[i], div_sizes[i], "red");
    for (var j = i + 1; j < array_size; j++) {
      div_update(divs[j], div_sizes[j], "red");
      if (div_sizes[j] < div_sizes[min_index]) {
        if (min_index != i) {
          div_update(divs[min_index], div_sizes[min_index], "blue");
        }
        console.log(min_index);
        min_index = j;
        div_update(divs[min_index], div_sizes[min_index], "yellow");
      } else {
        div_update(divs[j], div_sizes[j], "blue");
      }
    }
    if (min_index != i) {
      swap(i, min_index);
    }

    div_update(divs[i], div_sizes[i], "green");

    for (var k = i + 1; k < array_size; k++) {
      div_update(divs[k], div_sizes[k], "black");
    }
  }
  div_update(divs[array_size - 1], div_sizes[array_size - 1], "green");
  enable_buttons();
}

function swap(i, min_index) {
  var temp = div_sizes[i];
  div_sizes[i] = div_sizes[min_index];
  div_sizes[min_index] = temp;
  div_update(divs[i], div_sizes[i], "green");
  div_update(divs[min_index], div_sizes[min_index], "yellow");
}
