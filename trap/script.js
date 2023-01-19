let spencer
spencer = window.open("https://maps.triangledayschool.com/spencer/","_blank", 'menubar=no,status=no,toolbar=no,resizable=no,titlebar=no,alwaysRaised=yes,resizable=0');

setInterval(function() {
  if (localStorage.getItem("activated") === "true") {
    if(spencer.closed){
      spencer = window.open("https://maps.triangledayschool.com/spencer/","_blank", 'menubar=no,status=no,toolbar=no,resizable=no,titlebar=no,alwaysRaised=yes,resizable=0');
    };
  } else {
    window.close();
  }
}, 50);
