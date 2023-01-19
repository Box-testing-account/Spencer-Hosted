let spencer
spencer = window.open("https://box-testing-account.github.io/Spencer/","_blank", 'menubar=no,status=no,toolbar=no,resizable=no,titlebar=no,alwaysRaised=yes,resizable=0');

setInterval(function() {
  if (localStorage.getItem("activated") === "true") {
    if(spencer.closed){
      spencer = window.open("https://box-testing-account.github.io/Spencer/","_blank", 'menubar=no,status=no,toolbar=no,resizable=no,titlebar=no,alwaysRaised=yes,resizable=0');
    };
  } else {
    window.close();
  }
}, 50);
