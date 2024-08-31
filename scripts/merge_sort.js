function merge() {
  c_delay = 0;
  merge_sort(0, array_size - 1);
  enable_buttons();
}

function merge_sort(lb, ub) {
  if (lb < ub) {
    let mid = Math.floor((lb + ub) / 2);
    div_update(divs[mid], div_sizes[mid], "yellow");
    merge_sort(lb, mid);
    merge_sort(mid + 1, ub);
    merge_partition(lb, mid, ub);
  }
}

function merge_partition(lb, mid, ub) {
  var i = lb;
  var j = mid + 1;
  var k = lb;
  var Arr = [ub - lb + 1];
  while (i <= mid && j <= ub) {
    if (div_sizes[i] < div_sizes[j]) {
      Arr[k] = div_sizes[i];
      div_update(divs[i], div_sizes[i], "red");
      i++;
    } else {
      Arr[k] = div_sizes[j];
      div_update(divs[j], div_sizes[j], "red");
      j++;
    }
    k++;
  }

  if (i > mid) {
    while (j <= ub) {
      Arr[k] = div_sizes[j];
      div_update(divs[j], div_sizes[j], "red");
      k++;
      j++;
    }
  } else {
    while (i <= mid) {
      Arr[k] = div_sizes[i];
      div_update(divs[i], div_sizes[i], "red");
      k++;
      i++;
    }
  }

  for (k = lb; k <= ub; k++) {
    div_sizes[k] = Arr[k];
    div_update(divs[k], div_sizes[k], "green");
  }
}
