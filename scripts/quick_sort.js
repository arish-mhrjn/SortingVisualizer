function quick() {
  c_delay = 0;
  quick_sort(0, array_size - 1);
  for (i = 0; i < array_size; i++) {
    div_update(divs[i], div_sizes[i], "green");
  }
  enable_buttons();
}
function partition(lb, ub) {
  var pivot = div_sizes[lb];
  var start = lb;
  var end = ub;
  div_update(divs[lb], div_sizes[lb], "blue");
  while (start < end) {
    while (div_sizes[start] <= pivot) {
      if (start != lb) {
        div_update(divs[start], div_sizes[start], "red");
      }
      start++;
    }

    while (div_sizes[end] > pivot) {
      div_update(divs[end], div_sizes[end], "purple");
      end--;
    }
    if (start < end) {
      swap(start, end);
      div_update(divs[start], div_sizes[start], "yellow");
      div_update(divs[end], div_sizes[end], "yellow");
    }
  }
  swap(lb, end);
  div_update(divs[lb], div_sizes[lb], "green");

  return end;
}

function quick_sort(lb, ub) {
  if (lb < ub) {
    var loc = partition(lb, ub);
    // div_update(divs[loc], div_sizes[loc], "green");
    quick_sort(lb, loc - 1);
    quick_sort(loc + 1, ub);
  }
}
function swap(i, j) {
  var temp = div_sizes[i];
  div_sizes[i] = div_sizes[j];
  div_sizes[j] = temp;
}
