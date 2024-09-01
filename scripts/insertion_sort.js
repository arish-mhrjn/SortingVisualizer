function insertion() {
  c_delay = 0;
  for (var i = 1; i < array_size; i++) {
    var key = div_sizes[i];
    var j = i - 1;
    div_update(divs[i], div_sizes[i], "red");
    while (j >= 0 && div_sizes[j] > key) {
      div_update(divs[j + 1], div_sizes[j + 1], "red");
      div_update(divs[j], div_sizes[j], "red");
      div_sizes[j + 1] = div_sizes[j];
      div_update(divs[j + 1], div_sizes[j + 1], "green");
      div_update(divs[j], div_sizes[j], "blue");
      j = j - 1;
    }
    div_sizes[j + 1] = key;
    for (var t = 0; t <= i; t++) {
      div_update(divs[t], div_sizes[t], "green");
    }
  }
  div_update(divs[i - 1], div_sizes[i - 1], "green");
  enable_buttons();
}
