    // Función para calcular el consumo y determinar el valor a pagar 
    function calcularConsumo(lecturaAnterior, lecturaActual) {
      let consumo = lecturaActual - lecturaAnterior;
      let valor = consumo * 3; // Valor del m3

      if (consumo > 30) {
        valor *= 1.2; // Aplicar aumento del 20% si el consumo supera el CPM los 30 m3
      }

      return valor;
    }

    // Bucle para realizar múltiples lecturas
    let continuar = true;
    while (continuar) {
      let lecturaAnterior = parseFloat(prompt("Ingrese la lectura anterior del medidor:"));
      let lecturaActual = parseFloat(prompt("Ingrese la lectura actual del medidor:"));

      let valorConsumo = calcularConsumo(lecturaAnterior, lecturaActual);

      const categoria = cambiarCategoria(valorConsumo);

      console.log("Lectura anterior: " + lecturaAnterior);
      console.log("Lectura actual: " + lecturaActual);
      console.log("Consumo: " + (lecturaActual - lecturaAnterior));
      console.log("Valor en $: " + valorConsumo);
      console.log("Categoria: ", categoria);

       if (valorConsumo > 30) {
        console.log("Controle su consumo"); 

       } 
       
       else {
            console.log("¡Si el Consumo supera los 30 m3! Se aplicará un aumento del 20%.");
       }

// Función para cambiar la categoría del cliente
    function cambiarCategoria(valorConsumo) {
    let categoria = "Categoría A";

    while (valorConsumo > 300) {
      categoria = "Categoría B";
      valorConsumo -= 100;
    }

    return categoria;
  }

      continuar = confirm("¿Desea realizar otra lectura?");
    }



