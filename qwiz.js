let arreglo=[1,500,230,40,4,65,28,32,45,1002]
console.log(arreglo)
let orden1


    arreglo.sort(function(a,b){return a-b})
    orden1=(arreglo)
    console.log(orden1)
    alert("El arreglo ha sido ordenado ascendentemente")

    orden1.reverse()
    orden2=orden1
    console.log(orden2)
    alert("El arreglo ha sido ordenado descendentemente")


    orden1.shift()
    console.log(orden1)
    alert("el primer elemento ha sido elinado")


function juntos(){
    orden=orden1.concat(orden2)
    console.log(orden)
    alert("los arreglos se unieron")
}

    alert("agregar al arreglo "+ orden1+ " los campos 85,65,103,25")
    orden1.push(85,65,103,25),1    
    console.log(orden1)

