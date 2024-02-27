function darkmode() {
   var element = document.body;
   element.classList.toggle("darkmode");
}
    function english() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.english) {
      localStorage.english = Number(localStorage.english)+1;
    } else {
      localStorage.english = 1;
    }
    document.getElementById("result").innerHTML = "You have set your english to: 0" + localStorage.english + "";
      alert("You have set your english to: 0" + localStorage.english);
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage";
  }
}
        function english2() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.english2) {
      localStorage.english2 = Number(localStorage.english2)-1;
    } else {
      localStorage.english2 = 1;
    }
    document.getElementById("result").innerHTML = "You have set your english to: 0" + localStorage.english2 + "";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage";
  }
}
            function maths() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.maths) {
      localStorage.maths = Number(localStorage.maths)+1;
    } else {
      localStorage.maths = 1;
    }
    document.getElementById("result").innerHTML = "You have set your maths to: 0" + localStorage.maths + "";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage";
  }
}

                function maths2() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.maths2) {
      localStorage.maths2 = Number(localStorage.maths)-1;
    } else {
      localStorage.maths2 = 1;
    }
    document.getElementById("result").innerHTML = "You have set your maths to: 0" + localStorage.maths2 - "";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage";
  }
}

                function geo() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.geo) {
      localStorage.geo = Number(localStorage.geo)+1;
    } else {
      localStorage.geo = 1;
    }
    document.getElementById("result").innerHTML = "You have set your Geography to: 0" + localStorage.geo + "";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage";
  }
}

                function geo2() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.geo2) {
      localStorage.geo2 = Number(localStorage.geo2)-1;
    } else {
      localStorage.geo2 = 1;
    }
    document.getElementById("result").innerHTML = "You have set your geography to: 0" + localStorage.geo2 - "";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage";
  }
}

                    function hpe() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.hpe) {
      localStorage.hpe = Number(localStorage.hpe)+1;
    } else {
      localStorage.hpe = 1;
    }
    document.getElementById("result").innerHTML = "You have set your HPE to: 0" + localStorage.hpe + "";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage";
  }
}

                function hpe2() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.hpe2) {
      localStorage.hpe2 = Number(localStorage.hpe2)-1;
    } else {
      localStorage.hpe2 = 1;
    }
    document.getElementById("result").innerHTML = "You have set your HPE to: 0" + localStorage.hpe2 - "";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage";
  }
}
                        function rite() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.rite) {
      localStorage.rite = Number(localStorage.rite)+1;
    } else {
      localStorage.rite = 1;
    }
    document.getElementById("result").innerHTML = "You have set your Rite Journey to: 0" + localStorage.rite + "";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage";
  }
}

                function rite2() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.rite2) {
      localStorage.rite2 = Number(localStorage.rite2)-1;
    } else {
      localStorage.rite2 = 1;
    }
    document.getElementById("result").innerHTML = "You have set your Rite Journey to: 0" + localStorage.rite2 - "";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage";
