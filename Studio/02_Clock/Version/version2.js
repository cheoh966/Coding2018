var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.font = "80px Helvetica";
    ctx.fillStyle = "pink"
  /*  ctx.fillText("S", 270, 800);
    ctx.fillText("M", 670, 800);
    ctx.fillText("H", 1100, 800);



    ctx.shadowBlur= 10;
    ctx.shadowColor = "pink"*/

    function degToRad(degree){
      var factor = Math.PI/180;
      return degree*factor;
    }

    function renderTime(){
      var now = new Date();
      var hrs = now.getHours();
      var min = now.getMinutes();
      var sec = now.getSeconds();
      var mil = now.getMilliseconds();
      var smoothsec = sec+(mil/1000);
      var smoothmin = min+(smoothsec/60);



    ctx.fillStyle = "#593c8f"

     
      ctx.beginPath();
      ctx.arc(700,450,350, degToRad(270), degToRad((hrs*30)-90));
      ctx.fill();
      
    ctx.fillStyle = "#ffd9ce"

      ctx.beginPath();
      ctx.arc(700,450, 250, degToRad(270), degToRad((smoothmin*6)-90));
      ctx.fill();
      
    ctx.fillStyle = "#db5461"

      ctx.beginPath();
      ctx.arc(700,450,150, degToRad(270), degToRad((smoothsec*6)-90));
      ctx.fill();

      
  
    }
    setInterval(renderTime, 40);

