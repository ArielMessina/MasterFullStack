//defino valor de entrada
const valorTickets=200;
let totalMostrar="Total a pagar: $";


//defino valor de descuentos

let descuentoEstudiante = 80;
let descuentoTrainee    = 50;
let descuentoJunior     = 15;

// Elementos en variables
let nombre          = document.getElementById("nombre");
let apellido        = document.getElementById("apellido");
let mail            = document.getElementById("mail");
let cantidadTickets = document.getElementById("cantidadTickets");
let categoria       = document.getElementById("categoriaSelect");

function total_a_pagar()
{
    
    quitarClaseError();
    if(nombre.value==="")
    {
        alert("Complete el campo nombre");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return ;
    }

    if(apellido.value==="")
    {
        alert("Complete el campo apellido");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return ;
    }

    if(mail.value==="")
    {
        alert("Complete el campo correo");
        mail.classList.add("is-invalid");
        mail.focus();
        return ;
    }

     // Para determinar si el correo electrónico es válido o no
     const emailValido = mail => 
     {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
     }

     if(!emailValido(mail.value))
     {
        alert("Escriba el mail correctamente");
        mail.classList.add("is-invalid");
        mail.focus();
        return ;
     }

    if( cantidadTickets.value<=0 )
    {
        alert("Complete el campo cantidad, debe ser mayor que 0");
        cantidadTickets.classList.add("is-invalid");
        cantidadTickets.focus();
        return ;
    }

    if(isNaN(cantidadTickets.value))
    {
        alert("Complete correctamente la cantidad, solo puede ingresar números");
        cantidadTickets.classList.add("is-invalid");
        cantidadTickets.focus();
        return ;
    }

    if(categoria.value==="")
    {
        alert("Debe seleccionar una categoría");
        categoria.classList.add("is-invalid");
        categoria.focus();
        return ;
        
    }


    //multiplico total * entradas

    let totalValorTickets=(cantidadTickets.value*valorTickets);

    if(categoria.value==0)
    {
        totalValorTickets=totalValorTickets;
    }
    if(categoria.value==1)
    {
        totalValorTickets=totalValorTickets-(descuentoEstudiante/100*totalValorTickets);
    }
    if(categoria.value==2)
    {
        totalValorTickets=totalValorTickets-(descuentoTrainee/100*totalValorTickets);
    }
    if(categoria.value==3)
    {
        totalValorTickets=totalValorTickets-(descuentoJunior/100*totalValorTickets);
    }
    totalPago.innerHTML=totalMostrar+totalValorTickets+".00";
    
}

function quitarClaseError()
{
    let x=document.querySelectorAll(".form-control,.form-select");
    let i;
    for(i=0;i<x.length;i++)
    {
        x[i].classList.remove("is-invalid");
    }
}


//Desarrollo funcion 
function reset_total_a_pagar()
{
   // quitarClaseError();
    totalPago.innerHTML=totalMostrar+"";
}

//boton resumen.
btnResumen.addEventListener("click",total_a_pagar);
//boton borrar.
btnBorrar.addEventListener("click",reset_total_a_pagar);