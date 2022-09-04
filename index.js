//start of declarations
var usr = "circle";
var cell1 = document.getElementById("cell1");
var cell2 = document.getElementById("cell2");
var cell3 = document.getElementById("cell3");
var cell4 = document.getElementById("cell4");
var cell5 = document.getElementById("cell5");
var cell6 = document.getElementById("cell6");
var cell7 = document.getElementById("cell7");
var cell8 = document.getElementById("cell8");
var cell9 = document.getElementById("cell9");
var user = 0;
let _2dArr = [  "", "", "",
                "", "", "", 
                "", "", "", ];
var tmp = false;

cell1.addEventListener("click", () => {
  if (user === 0 && cell1.style.backgroundImage == "") {
    cell1.style.backgroundImage = "url('cross.png')";
    _2dArr[0] = "#";
  } else if (user === 1 && cell1.style.backgroundImage == "") {
    cell1.style.backgroundImage = "url('circle.png')";
    _2dArr[0] = "*";
  }
  if (user < 1) {
    user++;
  } else if ((user = 1)) {
    user--;
  }
});
cell2.addEventListener("click", () => {
  if (user === 0 && cell2.style.backgroundImage == "") {
    cell2.style.backgroundImage = "url('cross.png')";
  } else if (user === 1 && cell2.style.backgroundImage == "") {
    cell2.style.backgroundImage = "url('circle.png')";
  }
  if (user < 1) {
    user++;
  } else if ((user = 1)) {
    user--;
  }
});
cell3.addEventListener("click", () => {
  if (user === 0 && cell3.style.backgroundImage == "") {
    cell3.style.backgroundImage = "url('cross.png')";
  } else if (user === 1 && cell3.style.backgroundImage == "") {
    cell3.style.backgroundImage = "url('circle.png')";
  }
  if (user < 1) {
    user++;
  } else if ((user = 1)) {
    user--;
  }
});
cell4.addEventListener("click", () => {
  if (user === 0 && cell4.style.backgroundImage == "") {
    cell4.style.backgroundImage = "url('cross.png')";
  } else if (user === 1 && cell4.style.backgroundImage == "") {
    cell4.style.backgroundImage = "url('circle.png')";
  }
  if (user < 1) {
    user++;
  } else if ((user = 1)) {
    user--;
  }
});
cell5.addEventListener("click", () => {
  if (user === 0 && cell5.style.backgroundImage == "") {
    cell5.style.backgroundImage = "url('cross.png')";
  } else if (user === 1 && cell5.style.backgroundImage == "") {
    cell5.style.backgroundImage = "url('circle.png')";
  }
  if (user < 1) {
    user++;
  } else if ((user = 1)) {
    user--;
  }
});
cell6.addEventListener("click", () => {
  if (user === 0 && cell6.style.backgroundImage == "") {
    cell6.style.backgroundImage = "url('cross.png')";
  } else if (user === 1 && cell6.style.backgroundImage == "") {
    cell6.style.backgroundImage = "url('circle.png')";
  }
  if (user < 1) {
    user++;
  } else if ((user = 1)) {
    user--;
  }
});
cell7.addEventListener("click", () => {
  if (user === 0 && cell7.style.backgroundImage == "") {
    cell7.style.backgroundImage = "url('cross.png')";
  } else if (user === 1 && cell7.style.backgroundImage == "") {
    cell7.style.backgroundImage = "url('circle.png')";
  }
  if (user < 1) {
    user++;
  } else if ((user = 1)) {
    user--;
  }
});
cell8.addEventListener("click", () => {
  if (user === 0 && cell8.style.backgroundImage == "") {
    cell8.style.backgroundImage = "url('cross.png')";
  } else if (user === 1 && cell8.style.backgroundImage == "") {
    cell8.style.backgroundImage = "url('circle.png')";
  }
  if (user < 1) {
    user++;
  } else if ((user = 1)) {
    user--;
  }
});
cell9.addEventListener("click", () => {
  if (user === 0 && cell9.style.backgroundImage == "") {
    cell9.style.backgroundImage = "url('cross.png')";
    tmp = true;
  } else if (user === 1 && cell9.style.backgroundImage == "") {
    cell9.style.backgroundImage = "url('circle.png')";
    tmp = true;
  }
  else {
    tmp = false;
  }
  if (user < 1 && tmp == true) {//0
    user++;
  } else if ((user = 1) && tmp == true) {
    user--;
  }
});