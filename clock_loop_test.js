let i = 0;

function increment() {
  i++;
//   console.log(i);
document.getElementById("clock").innerHTML = i;
}

setInterval(increment, 1000);