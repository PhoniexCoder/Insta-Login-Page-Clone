let image = document.getElementById("ssimg");
    let images = ["img/ss1.png", "img/ss2.png", "img/ss3.png", "img/ss4.png"];
    setInterval(function () {
      let random = Math.floor(Math.random() * 4);
      image.src = images[random];
    }, 5000);
