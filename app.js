console.log('Validar formulario..');

window.addEventListener('load',  () => {

const form = document.getElementById('form'); 
const usuario = document.getElementById('usuario');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordConfirm');
 
  
form.addEventListener('submit', e => {
  e.preventDefault(); 
  validarCampos();    
 
}) 

//validar formulario ()
const  validarCampos = () => {
    const usuarioValor = usuario.value.trim();
    const emailValor = email.value.trim();
    const passwordValor = password.value.trim(); 
    const passwordConfirmValor =  passwordConfirm.value.trim();
   

    //Validando campo usuario 
    if (!usuarioValor)  {
      validaFalla(usuario, 'Campo Vacio') 
      } else if (usuarioValor.length < 3) {   
       validaFalla(usuario, 'Debe tener al menos 3 carácteres.' ) 
    } else {               
      validaOk(usuario);     
    }
  
    
    //Validando campo email 
    if (!emailValor){
      validaFalla(email, 'Campo Vacio.')
    } else if (!validaEmail(emailValor)){
        validaFalla(email, 'El e-mail no es válido.')
    }else {  
      validaOk(email) 
    }

  //  COMPRUEBA:  digito, minuscula, mayuscula,  núm
    const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/;
    //Validando campo password 
    if (!passwordValor) {  
      validaFalla(password, 'Completar password.');  
    } else if (passwordValor.length < 8) {  
      validaFalla(password, 'Debe tener 8 caracteres como mínimo.');
    } else if (!passwordValor.match(er)){  
      validaFalla(password, 'Debe tener al menos una letra may. una min. y un núm.'); 
    } else { 
      validaOk(password);     
    }  

     //Validando campo password  Confirm
     if (!passwordConfirmValor) {  
       validaFalla(passwordConfirm, 'Comfirme su password.'); 
      } else if ( passwordValor !== passwordConfirmValor ) {
        validaFalla(passwordConfirmValor, 'La password no coincide.');   
    } else {
      validaOk(passwordConfirmValor);       
    }      
    
} 

    const validaFalla  = (input, msje) => {
      const formControl =  input.parentElement; 
      const aviso = formControl.querySelector('p');
        aviso.innerText = msje;  
         
        formControl.className = 'form_control falla';     
       }  
      
      const validaOk  = (input) => {  
       const formControl =  input.parentElement;
       formControl.className = 'form_control ok';        
       
      }       

  
    const validaEmail = (email) => {   
       return  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);     
             
      }   
 
  }) 
  
