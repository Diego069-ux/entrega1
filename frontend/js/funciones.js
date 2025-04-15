function calcularPesoIdeal(){
      //Obtener la edad ingresada
    var edad = document.getElementById("txt_edad").value;
    var peso_ideal = document.getElementById("txt_peso_actual").value;
    var peso_ideal = edad * 2 + 8;

    //Verificamos el estado de peso
    var estado_peso = "";
    if(peso_actual == "peso_ideal") {
        estado_peso = "peso ideal";
    }else{
        if (peso_actual > peso_ideal){
            estado_peso = "Sobrepeso";
        }else{
          estado_peso = "Bajo peso";
        }
      }

//mostramos el resultado
document.getElementById("cnt_peso_ideal").innerHTML ="peso ideal es <b>"+ peso_ideal+"</b> kilos";
//mostramos el resultado
document.getElementById("cnt_estado_peso"). innerHTML ="Estado de peso : <b>"+ estado_peso + "</b>";

    }
