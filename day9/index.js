const box = document.querySelectorAll(".r-box");
const booked = document.querySelector(".booked");
const remaining = document.querySelector(".remaining");

let a = 0,
  b = 50;

box.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("boxselected")) {
      item.classList.remove("boxselected");
      a -= 1;
      b += 1;
      booked.innerHTML = a;
      remaining.innerHTML = b;
    } else {
      item.classList.add("boxselected");
      a += 1;
      b -= 1;
      booked.innerHTML = a;
      remaining.innerHTML = b;
    }
  });
});
