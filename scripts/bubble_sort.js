function Bubble() {
  //setting time complexities
  document.getElementByIId("time_worst").innerText = "O(N^2)";
  document.getElementByIId("time_average").innerText = "O(N^2)";
  document.getElementByIId("time_best").innerText = "O(N)";

  //setting space complexity
  document.getElementById("space_worst").innerText = "O(1)";

  c_delay = 0;
}
