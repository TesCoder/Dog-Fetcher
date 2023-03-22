document.querySelector('button').addEventListener('click', function () {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => {
        return response.json();
      })
      .then((myContent) => {
        myImage.src = myContent['message'];
      });
  }, false);

  var video = document.getElementById("myVideo");
      var btn = document.getElementById("myBtn");

      function myFunction() {
      if (video.paused) {
          video.play();
          btn.innerHTML = "Pause";
      } else {
          video.pause();
          btn.innerHTML = "Play";
      }
      }