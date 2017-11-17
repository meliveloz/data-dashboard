window.onscroll = function() {myFunction()}; //Quiere decir que cuando se hace scroll en la ventana entonces se va a ejecutar my function.

function myFunction() { //y este es my function
    if (document.body.scrollTop >0 || document.documentElement.scrollTop > 0) { //si el scrolltop es mayor a cero entonces voy a cambien la class del nav a nav2
      var nav=document.getElementById("nav");
        nav.classList ="nav2";
        var logo=document.getElementById("logo");
        logo.classList="logo2"
        var user=document.getElementById("user-img");   //se mostrará la foto del usuario que anteriormente se encuentra visibility:hidden(escondido) en el html.
        document.getElementById("user-img").classList="user2";

    }else{
    document.getElementById("nav").className=""; //para cuando vuelvo al scroll=0 , vuelve al menú original
    document.getElementById("user-img").classList.toggle("user");
    document.getElementById("user-img").classList.remove("user2"); //vuelvo a eliminar esta clase para que desaparezca la foto de usuario.

    }
}

google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawStuff);

      function drawStuff() {
        var data = new google.visualization.arrayToDataTable([
          ['Sprint', 'Students'],
          ["Sprint 1", 120],
          ["Sprint 2", 115],
          ["Sprint 3", 110],
          ["Sprint 4", 105],
         
        ]);

        var options = {
          width: 350,
          height:300,
          legend: { position: 'none' },
          
          axes: {
            x: {
              0: { side: 'buttom', label: 'White to move'} // Top x-axis.
            }
          },
          bar: { groupWidth: "60%" }
        };

        var chart = new google.charts.Bar(document.getElementById('top_x_div'));
        // Convert the Classic options to Material options.
        chart.draw(data, google.charts.Bar.convertOptions(options));
      };