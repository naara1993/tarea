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
let i=0;
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
let databstoggle=document.querySelectorAll('data-bs-toggle')
let o = document.getElementById("salir");
if(boolean){    
o.innerHTML ='salir';
var ca = document.querySelector('#bs-toggle');
var fca = ca.dataset.bstoggle = "none";

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
//let nombreUsuario= document.getElementById('nombreUsuario');
let comentarioAgregar= document.getElementById('exampleFormControlTextarea1').value;
//let comentario= document.getElementById('comentario');
let usuario=localStorage.getItem('NombreUsuario');

const agregar=document.getElementById('texto-comentario');
if(boolean){
 //   localStorage.setItem("comentarios", JSON.stringify({usuario:usuario,comentario:comentarioAgregar}));
  //  let comentarios=JSON.parse(localStorage.getItem("comentarios"));
comentarios.push({usuario:usuario,comentario:comentarioAgregar});
   // nombreUsuario.innerHTML=comentarios[i].usuario;
   // comentario.innerHTML=comentarios[i].comentario;
   let h2 = document.createElement('h2');
   let p=document.createElement('p');
   let img=document.createElement('img');
   let div =document.createElement('div');
   let div2 =document.createElement('div');
   img.src = "./img/descarga (15).jpg";
   img.setAttribute("id","img");
   div.setAttribute("id","div-comentario");
   div2.setAttribute("id","div-comentario2")
   h2.innerHTML=usuario;
   p.innerHTML=comentarios[i].comentario;
   div2.appendChild(h2);
   div2.appendChild(p);
   div.appendChild(img);
   div.appendChild(div2);
   agregar.appendChild(div);
   i=i+1;
const numerosComentarios=document.getElementById('contador');
contador+=1;
numerosComentarios.innerHTML=contador;
alert("agrego un comentario");
}else{
    alert(" para comentar debe ingresar primero ");
}
}
