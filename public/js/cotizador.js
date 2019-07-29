!function() {
    "use strict";

    // Obtener el valor de un elemento HTML
    // DOM (Document Object)
    var tipo = document.getElementById('tipo');
    
    document.addEventListener('DOMContentLoaded', function() {
        // Campos datos de usuario
        var nombre = document.getElementById('txtnombre');
        var telefono = document.getElementById('txttelefono');
        var email = document.getElementById('txtemail');

        // Campos pases
        var bolsaDia = document.getElementById('bolsa');
      

        // Botones y divs
        var calcular = document.getElementById('calcular');
        var errorDiv = document.getElementById('error');
        var botonRegistro = document.getElementById('btnRegistro');
        var listaCafe = document.getElementById('lista-cafe');
        var sumaTotal = document.getElementById('suma-total');
        var NombreUsuario = document.getElementById('nombreCliente');
        var etiquetas = document.getElementById('etiquetas');

        calcular.addEventListener('click', CalcularMontos);
        botonRegistro.addEventListener('click',pagar);
        function pagar(event){
            event.preventDefault();

				 alert("No se puede realizar ningún pago en este momento."); 

        }

        function CalcularMontos(event) {
            event.preventDefault();
            
            // Si no ha elegido un regalo, obligar a que elija uno
            if (tipo.value === '') {
                alert("¡Debes elegir un Tipo!");
                tipo.focus();
            } else {
                var bolsaCafe = parseInt(bolsaDia.value, 10) || 0;
                if(tipo.value==1){
                var totalAPagar = (bolsaCafe * 60);
                var regalo ='Polvo';
                var valor=60;

                }else if(tipo.value==2){
                    var totalAPagar = (bolsaCafe * 50);
                    var regalo ='Grano';
                var valor=50;

                }else{
                    var totalAPagar = (bolsaCafe * 30);
                    var regalo ='Oro';
                var valor=30;


                }
                // Agregar un listado de productos solicitados
                var listadoProductos = [];

                if (bolsaDia > 0) {
                    listadoProductos.push(bolsaDia+' libras de café ' );
                }
                if (bolsaDia > 0) {
                    listadoProductos.push('en '+regalo);
                }
                if (bolsaDia > 0) {
                    listadoProductos.push('L. '+valor.toFixed(2));
                
                }

                // Limpiar el HTML del div lista_productos
                // y recorrer el arreglo de los productos seleccionados
                listaCafe.innerHTML = '';
                
                for (var i = 0; i < listadoProductos.length; i++) {

                    document.getElementById('lista-cafe').innerHTML += listadoProductos[i].value + '<br/>';
                    document.getElementById('lista-cafe').log(listadoProductos[i]);
                }

                // lista-productos tiene display: none
                document.getElementById('lista-cafe').style.display = 'block';
                NombreUsuario.innerHTML= document.getElementById('txtnombre').value + ' tiene que pagar';
                // Mostrar la suma total
                sumaTotal.innerHTML = '$ ' + totalAPagar.toFixed(2);
            }

        }
    })
}();