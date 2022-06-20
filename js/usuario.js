/*
*clase usuario
*/
class Usuario{
    nombreUsuario="";
    constructor(nombreUsuario){
        this.nombreUsuario=nombreUsuario;
    }
}
/*
*variables globales
*/
const btn=document.getElementById('button-footer');
const btnAgregar=document.getElementById('agregarComentario');
const nombreUsuarios=[
];
const comentarios=[

];
let boolean=false;
let contador=0;
/**
 *funcion que permite validar el ingreso del usuario
 **/
btn.addEventListener('click',function(e){
e.preventDefault();
let nombreUsuario=document.getElementById('NombreUsuario').value;
nombreUsuarios.push({nombre:nombreUsuario});
//localStorage.setItem('NombreUsuario', JSON.stringify(nombreUsuario));
localStorage.setItem('NombreUsuario', nombreUsuario);
validarLogin(nombreUsuario);
});

/**
 *funcion que verifica que haya realizado el ingreso para poder comentar
 **/
btnAgregar.addEventListener('click',function(e) {
e.preventDefault();
isLoggedIn(boolean);
});

/**
 *funcion que permite cambiar el estado 
 **/
function cambiar(boolean){
let o = document.getElementById("salir");
if(boolean){
o.innerHTML ='salir';
}
}

/**
 *verifica y confirma si logro ingresar o no
 **/

function validarLogin(nombreUsuario) {
   // let usuario=JSON.parse(localStorage.getItem("NombreUsuario"));
   let usuario=localStorage.getItem('NombreUsuario');
    if(nombreUsuario == usuario && nombreUsuario!="") {
        alert('You are loged in.');
         boolean=true;
      //    cambiar(boolean);
        }
      else {
        alert('ERROR.');
       boolean =false;
    }
    if(boolean){
        cambiar(boolean);
    }
    return boolean;
}

/**
 *funcion que permite ingresar un comentario
 **/
function isLoggedIn(boolean) {
let nombreUsuario= document.getElementById('nombreUsuario');
let comentarioAgregar= document.getElementById('exampleFormControlTextarea1').value;
let comentario= document.getElementById('comentario');
let usuario=localStorage.getItem('NombreUsuario');
if(boolean){
 //   localStorage.setItem("comentarios", JSON.stringify({usuario:usuario,comentario:comentarioAgregar}));
  //  let comentarios=JSON.parse(localStorage.getItem("comentarios"));
     comentarios.push({usuario:usuario,comentario:comentarioAgregar});
 for(let i=0; i<comentarios.length; i++){
    nombreUsuario.innerHTML=  comentarios[i].usuario;
    comentario.innerHTML=comentarios[i].comentario;
 }
const numerosComentarios=document.getElementById('contador');
contador+=1;
numerosComentarios.innerHTML=contador;
alert("agrego un comentario");
}else{
    alert(" para comentar debe ingresar primero ");
}
}
