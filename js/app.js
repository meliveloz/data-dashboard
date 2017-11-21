/*________________________________________________________Funcón navegador desplegable al hacer scroll________________________________________________________*/



window.onscroll = function() {myFunction()}; //Quiere decir que cuando se hace scroll en la ventana entonces se va a ejecutar my function.

function myFunction() { //y este es my function
  if (document.body.scrollTop >0 || document.documentElement.scrollTop > 0) { //si el scrolltop es mayor a cero entonces voy a cambien la class del nav a nav2
    var nav=document.getElementById("nav");
    nav.classList ="nav2";
    var logo=document.getElementById("logo");
    logo.classList="logo2";
    var user=document.getElementById("user-img");   //se mostrará la foto del usuario que anteriormente se encuentra visibility:hidden(escondido) en el html.
    document.getElementById("user-img").classList="user2";
    var dataUser=document.getElementById("datauser");
    document.getElementById("datauser").classList="datauservisible";


  }else{
    document.getElementById("nav").className=""; //para cuando vuelvo al scroll=0 , vuelve al menú original
    document.getElementById("user-img").classList.toggle("user");
    document.getElementById("user-img").classList.remove("user2"); //vuelvo a eliminar esta clase para que desaparezca la foto de usuario.
    document.getElementById("datauser").classList.toggle("datauserhidden");
    document.getElementById("datauser").classList.remove("datauservisible");

    }
}

/*__________________________________________________________Función para menú cambio de lenguaje_______________________________________________________________*/

function add2(){
  document.getElementById("lenguajecont").classList.toggle("lenguajelist2");
  document.getElementById("icondown").classList.toggle("fa-chevron-down");
  document.getElementById("icondown").classList.toggle("fa-times");

}

/*___________________________________________________________Función para aparecer y desaparecer menú en icon bar_______________________________________________*/

function add3(){
  document.getElementById("baricon").classList.toggle("barmenu2");


}


/*____________________________________________________________Función agregar estudiantes______________________________________________________________*/


function studentpluss(){
  var menu=document.getElementById("menu");
  var contEstudent=document.createElement("div");
  contEstudent.classList.add("contestudent");

  var nameStudent=document.createElement("input");
  nameStudent.classList.add("namestudent");
  nameStudent.placeholder="Student Name";
  var nameButton=document.createElement("button");
  nameButton.classList.add("namebutton");
  nameButton.textContent="Save";
  var codeStudent=document.createElement("input");
  codeStudent.classList.add("codestudent");
  codeStudent.placeholder="Code Student";
  var codeButton=document.createElement("button");
  codeButton.classList.add("codebutton");
  codeButton.textContent="Save";
  var icon=document.createElement("i");
  icon.classList.add("fa", "fa-times", "close");
  contEstudent.appendChild(nameStudent);
  contEstudent.appendChild(nameButton);
  contEstudent.appendChild(codeStudent);
  contEstudent.appendChild(codeButton);
  contEstudent.appendChild(icon);

  menu.appendChild(contEstudent);


  nameButton.addEventListener("click",function(){
     nameStudent.value="";

   })

  codeButton.addEventListener("click",function(){
  codeStudent.value="";

  })

  icon.addEventListener("click",function(){
    menu.removeChild(contEstudent);

    })

  }

/*_______________________________________________________________________Función remover estudiantes_________________________________________________________*/

function studentremove(){
  var menu=document.getElementById("menu");
  var contEstudent=document.createElement("div");
  contEstudent.classList.add("contestudent");

  var nameStudent=document.createElement("input");
  nameStudent.classList.add("namestudent");
  nameStudent.placeholder="Student Name";
  var nameButton=document.createElement("button");
  nameButton.classList.add("namebutton");
  nameButton.textContent="Remove";
  var codeStudent=document.createElement("input");
  codeStudent.classList.add("codestudent");
  codeStudent.placeholder="Code Student";
  var codeButton=document.createElement("button");
  codeButton.classList.add("codebutton");
  codeButton.textContent="Remove";
  var icon=document.createElement("i");
  icon.classList.add("fa", "fa-times", "close");
  contEstudent.appendChild(nameStudent);
  contEstudent.appendChild(nameButton);
  contEstudent.appendChild(codeStudent);
  contEstudent.appendChild(codeButton);
  contEstudent.appendChild(icon);

  menu.appendChild(contEstudent);


  nameButton.addEventListener("click",function(){
    nameStudent.value="";

  })

  codeButton.addEventListener("click",function(){
    codeStudent.value="";

    })

  icon.addEventListener("click",function(){
     menu.removeChild(contEstudent);

    })


  }


/*____________________________________________________________________Funcón menú global______________________________________________________________*/


function add(){



 var allMenu=document.createElement("div");
  allMenu.classList.add("allmenu");
  var menu= document.getElementById("menu");
  menu.appendChild(allMenu);
 var cerrar=document.createElement("h3");
  cerrar.textContent="Cerrar";
  cerrar.classList.add("lima");
  allMenu.appendChild(cerrar);

  var lista=document.createElement("li");
  lista.classList.add("lista");
  var limaMenu=document.createElement("input");
  limaMenu.classList.add("limamenu");
  limaMenu.type="checkbox";
  allMenu.appendChild(limaMenu);
  var limaText1=document.createElement("span");
  limaText1.classList.add("limatext1","titlelima");
  limaText1.textContent="Lima";
  lista.appendChild(limaMenu);
  lista.appendChild(limaText1);
  allMenu.appendChild(lista);




  var hr1=document.createElement("hr");
  hr1.classList.add("hr1");
  allMenu.appendChild(hr1);

 limaMenu.addEventListener("click",function(){

    var contLima= document.createElement("ul");
    contLima.classList.add("contlima","contenedor-lista");
    var checkLima1=document.createElement("input");
    checkLima1.type="checkbox";
    checkLima1.classList.add("check");
    var listaLima1=document.createElement("li");
    listaLima1.classList.add("listaLima1","sedes");
    var limatext1=document.createTextNode("2015 - I");
    listaLima1.appendChild(checkLima1);
    listaLima1.appendChild(limatext1);

    var checkLima2=document.createElement("input");
    checkLima2.type="checkbox";
    checkLima2.classList.add("check");
    var listaLima2=document.createElement("li");
    listaLima2.classList.add("listaLima2","sedes");
    var limatext2=document.createTextNode("2015 - II");
    listaLima2.appendChild(checkLima2);
    listaLima2.appendChild(limatext2);


    var checkLima3=document.createElement("input");
    checkLima3.type="checkbox";
    checkLima3.classList.add("check");
    var listaLima3=document.createElement("li");
    listaLima3.classList.add("listaLima3","sedes");
    var limatext3=document.createTextNode("2016 - I");
    listaLima3.appendChild(checkLima3);
    listaLima3.appendChild(limatext3);


    var checkLima4=document.createElement("input");
    checkLima4.type="checkbox";
    checkLima4.classList.add("check");
    var listaLima4=document.createElement("li");
    listaLima4.classList.add("listaLima4","sedes");
    var limatext4=document.createTextNode("2016 - II");
    listaLima4.appendChild(checkLima4);
    listaLima4.appendChild(limatext4);


    var checkLima5=document.createElement("input");
    checkLima5.type="checkbox";
    checkLima5.classList.add("check");
    var listaLima5=document.createElement("li");
    listaLima5.classList.add("listaLima5","sedes");
    var limatext5=document.createTextNode("2017 - I");
    listaLima5.appendChild(checkLima5);
    listaLima5.appendChild(limatext5);

    var checkLima6=document.createElement("input");
    checkLima6.type="checkbox";
    checkLima6.classList.add("check");
    var listaLima6=document.createElement("li");
    listaLima6.classList.add("listaLima6","sedes");
    var limatext6=document.createTextNode("2017 - II");
    listaLima6.appendChild(checkLima6);
    listaLima6.appendChild(limatext6);

    contLima.appendChild(listaLima1);
    contLima.appendChild(listaLima2);
    contLima.appendChild(listaLima3);
    contLima.appendChild(listaLima4);
    contLima.appendChild(listaLima5);
    contLima.appendChild(listaLima6);
    allMenu.appendChild(contLima);

    allMenu.insertBefore(contLima,lista2);


   })


  var lista2=document.createElement("li");
  lista2.classList.add("lista");
  var arequipaMenu=document.createElement("input");
  arequipaMenu.classList.add("limamenu");
  arequipaMenu.type="checkbox";
  allMenu.appendChild(arequipaMenu);
  var limaText2=document.createElement("span");
  limaText2.classList.add("limatext1","titlelima");
  limaText2.textContent="Arequipa";
  lista2.appendChild(arequipaMenu);
  lista2.appendChild(limaText2);
  allMenu.appendChild(lista2);

  var hr2=document.createElement("hr");
  hr2.classList.add("hr1");
  allMenu.appendChild(hr2);

  arequipaMenu.addEventListener("click",function(){

    var contArequipa= document.createElement("ul");
    contArequipa.classList.add("contarequipa","contenedor-lista");
    var checkArequipa1=document.createElement("input");
    checkArequipa1.type="checkbox";
    checkArequipa1.classList.add("check");
    var listaArequipa1=document.createElement("li");
    listaArequipa1.classList.add("listaLima1","sedes");
    var arequipaText1=document.createTextNode("2015 - I");
    listaArequipa1.appendChild(checkArequipa1);
    listaArequipa1.appendChild(arequipaText1);

    var checkArequipa2=document.createElement("input");
    checkArequipa2.type="checkbox";
    checkArequipa2.classList.add("check");
    var listaArequipa2=document.createElement("li");
    listaArequipa2.classList.add("listaLima2","sedes");
    var arequipatext2=document.createTextNode("2016 - I");
    listaArequipa2.appendChild(checkArequipa2);
    listaArequipa2.appendChild(arequipatext2);


    var checkArequipa3=document.createElement("input");
    checkArequipa3.type="checkbox";
    checkArequipa3.classList.add("check");
    var listaArequipa3=document.createElement("li");
    listaArequipa3.classList.add("listaLima3","sedes");
    var Arequipatext3=document.createTextNode("2016 - II");
    listaArequipa3.appendChild(checkArequipa3);
    listaArequipa3.appendChild(Arequipatext3);


    var checkArequipa4=document.createElement("input");
    checkArequipa4.type="checkbox";
    checkArequipa4.classList.add("check");
    var listaArequipa4=document.createElement("li");
    listaArequipa4.classList.add("listaLima4","sedes");
    var arequipatext4=document.createTextNode("2017 - I");
    listaArequipa4.appendChild(checkArequipa4);
    listaArequipa4.appendChild(arequipatext4);


    var checkArequipa5=document.createElement("input");
    checkArequipa5.type="checkbox";
    checkArequipa5.classList.add("check");
    var listaArequipa5=document.createElement("li");
    listaArequipa5.classList.add("listaLima5","sedes");
    var arequipatext5=document.createTextNode("2017 - II");
    listaArequipa5.appendChild(checkArequipa5);
    listaArequipa5.appendChild(arequipatext5);







    contArequipa.appendChild(listaArequipa1);
    contArequipa.appendChild(listaArequipa2);
    contArequipa.appendChild(listaArequipa3);
    contArequipa.appendChild(listaArequipa4);
    contArequipa.appendChild(listaArequipa5);

    allMenu.appendChild(contArequipa);

    allMenu.insertBefore(contArequipa,lista3);




 })


  var lista3=document.createElement("li");
  lista3.classList.add("lista");
  var santiMenu=document.createElement("input");
  santiMenu.classList.add("limamenu");
  santiMenu.type="checkbox";
  allMenu.appendChild(santiMenu);
  var santiText3=document.createElement("span");
  santiText3.classList.add("limatext1","titlelima");
  santiText3.textContent="Santiago de Chile";
  lista3.appendChild(santiMenu);
  lista3.appendChild(santiText3);
  allMenu.appendChild(lista3);

  var hr3=document.createElement("hr");
  hr3.classList.add("hr1");
  allMenu.appendChild(hr3);

  santiMenu.addEventListener("click",function(){


    var contSanti= document.createElement("ul");
    contSanti.classList.add("contarequipa","contenedor-lista");
    var checkSanti1=document.createElement("input");
    checkSanti1.type="checkbox";
    checkSanti1.classList.add("check");
    var listaSanti1=document.createElement("li");
    listaSanti1.classList.add("listaLima1","sedes");
    var santiText1=document.createTextNode("2015 - I");
    listaSanti1.appendChild(checkSanti1);
    listaSanti1.appendChild(santiText1);

    var checkSanti2=document.createElement("input");
    checkSanti2.type="checkbox";
    checkSanti2.classList.add("check");
    var listaSanti2=document.createElement("li");
    listaSanti2.classList.add("listaLima2","sedes");
    var santitext2=document.createTextNode("2016 - I");
    listaSanti2.appendChild(checkSanti2);
    listaSanti2.appendChild(santitext2);


    var checkSanti3=document.createElement("input");
    checkSanti3.type="checkbox";
    checkSanti3.classList.add("check");
    var listaSanti3=document.createElement("li");
    listaSanti3.classList.add("listaLima3","sedes");
    var Santitext3=document.createTextNode("2016 - II");
    listaSanti3.appendChild(checkSanti3);
    listaSanti3.appendChild(Santitext3);


    var checkSanti4=document.createElement("input");
    checkSanti4.type="checkbox";
    checkSanti4.classList.add("check");
    var listaSanti4=document.createElement("li");
    listaSanti4.classList.add("listaLima4","sedes");
    var santitext4=document.createTextNode("2017 - I");
    listaSanti4.appendChild(checkSanti4);
    listaSanti4.appendChild(santitext4);


    var checkSanti5=document.createElement("input");
    checkSanti5.type="checkbox";
    checkSanti5.classList.add("check");
    var listaSanti5=document.createElement("li");
    listaSanti5.classList.add("listaLima5","sedes");
    var santitext5=document.createTextNode("2017 - II AM");
    listaSanti5.appendChild(checkSanti5);
    listaSanti5.appendChild(santitext5);

    var checkSanti6=document.createElement("input");
    checkSanti6.type="checkbox";
    checkSanti6.classList.add("check");
    var listaSanti6=document.createElement("li");
    listaSanti6.classList.add("listaLima5","sedes");
    var santitext6=document.createTextNode("2017 - II PM");
    listaSanti6.appendChild(checkSanti6);
    listaSanti6.appendChild(santitext6);





    contSanti.appendChild(listaSanti1);
    contSanti.appendChild(listaSanti2);
    contSanti.appendChild(listaSanti3);
    contSanti.appendChild(listaSanti4);
    contSanti.appendChild(listaSanti5);
    contSanti.appendChild(listaSanti6);

    allMenu.appendChild(contSanti);

    allMenu.insertBefore(contSanti,lista4);

 })

  var lista4=document.createElement("li");
  lista4.classList.add("lista");
  var mexMenu=document.createElement("input");
  mexMenu.classList.add("limamenu");
  mexMenu.type="checkbox";
  allMenu.appendChild(mexMenu);
  var mexText4=document.createElement("span");
  mexText4.classList.add("limatext1","titlelima");
  mexText4.textContent="Ciudad de México";
  lista4.appendChild(mexMenu);
  lista4.appendChild(mexText4);
  allMenu.appendChild(lista4);

  var hr4=document.createElement("hr");
  hr4.classList.add("hr1");
  allMenu.appendChild(hr4);

  mexMenu.addEventListener("click",function(){


    var contMex= document.createElement("ul");
    contMex.classList.add("contarequipa","contenedor-lista");
    var checkMex1=document.createElement("input");
    checkMex1.type="checkbox";
    checkMex1.classList.add("check");
    var listaMex1=document.createElement("li");
    listaMex1.classList.add("listaLima1","sedes");
    var mexText1=document.createTextNode("2015 - I");
    listaMex1.appendChild(checkMex1);
    listaMex1.appendChild(mexText1);

    var checkMex2=document.createElement("input");
    checkMex2.type="checkbox";
    checkMex2.classList.add("check");
    var listaMex2=document.createElement("li");
    listaMex2.classList.add("listaLima2","sedes");
    var mextext2=document.createTextNode("2016 - I");
    listaMex2.appendChild(checkMex2);
    listaMex2.appendChild(mextext2);


    var checkMex3=document.createElement("input");
    checkMex3.type="checkbox";
    checkMex3.classList.add("check");
    var listaMex3=document.createElement("li");
    listaMex3.classList.add("listaLima3","sedes");
    var mextext3=document.createTextNode("2016 - II");
    listaMex3.appendChild(checkMex3);
    listaMex3.appendChild(mextext3);


    var checkMex4=document.createElement("input");
    checkMex4.type="checkbox";
    checkMex4.classList.add("check");
    var listaMex4=document.createElement("li");
    listaMex4.classList.add("listaLima4","sedes");
    var mextext4=document.createTextNode("2017 - I");
    listaMex4.appendChild(checkMex4);
    listaMex4.appendChild(mextext4);


    var checkMex5=document.createElement("input");
    checkMex5.type="checkbox";
    checkMex5.classList.add("check");
    var listaMex5=document.createElement("li");
    listaMex5.classList.add("listaLima5","sedes");
    var mextext5=document.createTextNode("2017 - II");
    listaMex5.appendChild(checkMex5);
    listaMex5.appendChild(mextext5);

    contMex.appendChild(listaMex1);
    contMex.appendChild(listaMex2);
    contMex.appendChild(listaMex3);
    contMex.appendChild(listaMex4);
    contMex.appendChild(listaMex5);

    allMenu.appendChild(contMex);

  })



  cerrar.addEventListener("click",function(){
    menu.removeChild(allMenu);



  })



 }

/*___________________________________________________________________Función desplegar y esconder menú tech skill_____________________________________________*/
function add5(){
  document.getElementById("techmenu").classList.toggle("techstyle2");
}

/*____________________________________________________________________Desplegar y esconder menú hse skill________________________________________________________*/
function add6(){
  document.getElementById("hsemenu").classList.toggle("hsestyle2");
}

/*____________________________________________________________________Gráficos__________________________________________________________________________________*/
/*grafico 1*/
google.charts.load('current', {'packages':['bar']});/*grafico 1*/
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {
        var data = new google.visualization.arrayToDataTable([
          ['Sprint', 'Students'],
          ["Sprint 1", 135],
          ["Sprint 2", 115],
          ["Sprint 3", 110],
          ["Sprint 4", 105],

        ]);

        var options = {
          width: 350,
          height:200,
          legend: { position: 'none' },

          axes: {
            x: {
              0: { side: 'buttom', label: ''} // Top x-axis.
            }
          },
          bar: { groupWidth: "60%" }
        };

        var chart = new google.charts.Bar(document.getElementById('top_x_div'));
        // Convert the Classic options to Material options.
        chart.draw(data, google.charts.Bar.convertOptions(options));

        /*grafico 2*/ google.charts.load('current', {'packages':['corechart']});  /*grafico 2*/
              google.charts.setOnLoadCallback(drawChart);

              function drawChart() {
                var data = google.visualization.arrayToDataTable([
                  ['Director',  '#135'],
                  [' ',  ,],
                  ['Sprint 1', 105,   ],
                  ['Sprint 2',     45, ],
                  ['Sprint 3',        75,  ],
                  ['Sprint 4',      105,    ],
                  [' ',  ,]
                ]);

                var options = {
                  title: '#105 STUDENTS THAT MEET THE TARGET',

                  isStacked: true
                };

                var chart = new google.visualization.SteppedAreaChart(document.getElementById('chart_div'));

                  chart.draw(data, options);




          /*grafico 3*/google.charts.load('current', {'packages':['corechart']});  /*grafico 3*/
                        google.charts.setOnLoadCallback(drawChart);

                        function drawChart() {
                          var data = google.visualization.arrayToDataTable([
                            ['sprint',  '#105'],
                            [' ',  ,],
                            ['Sprint 1', 14,   ],
                            ['Sprint 2', 10, ],
                            ['Sprint 3', 30,  ],
                            ['Sprint 4',  81,    ],
                            [' ',  ,]
                          ]);

                          var options = {
                            title:'% ACUMULATIVE NPS',

                            isStacked: true
                          };

                          var chart = new google.visualization.SteppedAreaChart(document.getElementById('chart_div1'));

                            chart.draw(data, options);



      /*Grafico 4*/google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

  var data = google.visualization.arrayToDataTable([
    ['Sprint', '% Common Core', '% Students Javascript ', ' % Students UX Desing '],
    ["Sprint 1", 30, 34, 37.4 ],
    ["Sprint 2", 44.4, 46, 48.7],
    ["Sprint 3", 51, 53, 55],
    ["Sprint 4", 71, 73.5, 78],
    ["Sprint 5", 78, 60, 82.6],
    ["Sprint 6", 73, 72,69],
    ["Sprint 7", 69, 69,57],
    ["Sprint 8", 47, 45,42.1],
    ]);

      var options = {
        title: '62 (% Of TOTAL #135)',

        hAxis: {
          title: '',
          format: 'h:mm a',
          viewWindow: {
            min: [7, 30, 0],
            max: [17, 30, 0]
          }
        },
        vAxis: {
          title: ''
        }
      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('chart_div2'));

        chart.draw(data, options);



  /*grafico 5*/ google.charts.load('current', {'packages':['corechart']});/*grafico 5*/
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['# STUDENTS THAT MEET THE TARGET',  90],
          ['# STUDENTS THAT DON´T MEET THE TARGET', 45],

        ]);

        var options = {
          title: 'Tech Skills'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);



/*garfico 6*/ google.charts.load('current', {packages: ['corechart', 'bar']});/*garfico 6*/
  google.charts.setOnLoadCallback(drawBasic);

  function drawBasic() {

    var data = google.visualization.arrayToDataTable([
      ['Sprint', '# HSE'],
      ["Sprint 1",77],
      ["Sprint 2", 79],
      ["Sprint 3", 78],
      ["Sprint 4", 81.3],

      ]);

        var options = {
          title: '62  # Of STUDENTS THAT MEET THE TARGET',

          hAxis: {
            title: '',
            format: 'h:mm a',
            viewWindow: {
              min: [7, 30, 0],
              max: [17, 30, 0]
            }
          },
          vAxis: {
            title: ''
          }
        };

        var chart = new google.visualization.ColumnChart(
          document.getElementById('chart_div3'));

          chart.draw(data, options);


/*grafico 7*/ google.charts.load('current', {'packages':['corechart']});/*grafico 7*/
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {

          var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['# STUDENTS THAT MEET THE TARGET',  62],
            ['# STUDENTS THAT DON´T MEET THE TARGET', 73],

          ]);

          var options = {
            title: 'Life Skills'
          };

          var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

          chart.draw(data, options);


  /*grafico 8*/google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBackgroundColor);

function drawBackgroundColor() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Sprint');
      data.addColumn('number', 'SAT %');

      data.addRows([
        [" ", ,],
        ["sprint 1", 48.3],
        ["sprint 2", 24.1],
        ["sprint 3", 45.2],
        ["sprint 4", 48.3],
        [" ", ,],
        ]);

      var options = {
        hAxis: {
          title: ''
        },
        vAxis: {
          title: ''
        },
        backgroundColor: '#f1f8e9'
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div4'));
      chart.draw(data, options);



/*grafico 9*/ google.charts.load('current', {packages: ['corechart', 'line']});/*grafico 9*/
      google.charts.setOnLoadCallback(drawBackgroundColor);

      function drawBackgroundColor() {
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Sprint');
            data.addColumn('number', 'Rating  %');

            data.addRows([
              [" ", ,],
              ["sprint 1", 15],
              ["sprint 2", 7],
              ["sprint 3", 17],
              ["sprint 4", 18],
              [" ", ,],
              ]);

            var options = {
              hAxis: {
                title: ''
              },
              vAxis: {
                title: ''
              },
              backgroundColor: '#f1f8e9'
            };

            var chart = new google.visualization.LineChart(document.getElementById('chart_div5'));
            chart.draw(data, options);


  /*grafico 10*/ google.charts.load('current', {packages: ['corechart', 'line']});/*grafico 10*/
                  google.charts.setOnLoadCallback(drawBackgroundColor);

                  function drawBackgroundColor() {
                        var data = new google.visualization.DataTable();
                        data.addColumn('string', 'Sprint');
                        data.addColumn('number', 'Rating  %');

                        data.addRows([
                          [" ", ,],
                          ["sprint 1", 41],
                          ["sprint 2", 26],
                          ["sprint 3", 45],
                          ["sprint 4", 50],
                          [" ", ,],
                          ]);

                        var options = {
                          hAxis: {
                            title: ''
                          },
                          vAxis: {
                            title: ''
                          },
                          backgroundColor: '#f1f8e9'
                        };

                        var chart = new google.visualization.LineChart(document.getElementById('chart_div6'));
                        chart.draw(data, options);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    };
