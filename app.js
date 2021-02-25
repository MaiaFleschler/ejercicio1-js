/*
Cajero Automático (Grupal)
-----------------

Login:
Pedir un usuario y contraseña. Ésta será: 
usuario: admin
contraseña: 123456

Para ingresar a la pantalla harás una función que retorné 
Si lo ingresó correctamente: Bienvenida Admin.
Si no lo ingresó correctamente: Usuario o contraseña incorrecta.
NOTA: Igualmente, hayan o no ingresado bien (ya que aún no sabes como "cancelar un proceso")

Una vez que ingresas accederás a un menú, si la persona ingresa:
(1) Podrá ingresar dinero.
(2) Podrá retirar dinero.
(3) Verificar el monto en cuenta.

En caso de elegir 1:
El sistema mostrará en un prompt "¿A qué cuenta desea ingresarlo?". Las cuentas serán:
567, que posee $10000.
789, que posee $5000.
Una vez seleccionada la cuenta el sistema mostrará en un prompt "Monto a ingresar" y el usuario lo ingresará.
Luego sumará el valor ingresado a la cuenta seleccionada.
Finalmente mostrará por alert "La cuenta {numero_de_cuenta} posee {valor_actualizado}"

En caso de elegir 2:
El sistema mostrará en un prompt "¿De qué cuenta se debitará?". Las cuentas serán:
567, que posee $10000.
789, que posee $5000.
Una vez seleccionada la cuenta el sistema mostrará en un prompt "Monto a debitar" y el usuario lo ingresará.
Luego el sistema restará el valor ingresado a la cuenta seleccionada.
Finalmente mostrará por alert 
"La cuenta {numero_de_cuenta} posee {valor_actualizado}"


En caso de elegir 3:
El sistema mostrará en un prompt "¿Qué cuenta desea verificar?". Las cuentas serán:
567, que posee $10000.
789, que posee $5000.
Una vez seleccionada la cuenta un alert mostrará "La cuenta {numero_de_cuenta} posee {monto}"

*/
'use strict';

const user = prompt("Ingrese su usuario");
const password = prompt("Ingrese su contraseña");
let cuenta = 0;
const cuenta1 = 567;
const cuenta2 = 789;
const saldo1 = 10000;
const saldo2 = 5000;

function Ingresar(usuario, contrasenia){
    const userOk = "admin";
    const passwordOk = "123456";
    if (usuario == userOk && contrasenia == passwordOk){
       return alert("Bienvenida Admin");
    }
    else{
       return alert("Usuario o contraseña incorrecta");
    }

        
}
Ingresar(user, password);

const opcionMenu = prompt("Selecciona una opciones:"+"\n"+"(1) Podrá ingresar dinero"+"\n"+"(2) Podrá retirar dinero"+"\n"+"(3) Verificar el monto en cuenta");

if(opcionMenu==1){
    const montoIngreso = Number(prompt("Monto a ingresar"));
    cuenta = Number(prompt("¿A qué cuenta desea ingresarlo?"));
    if (cuenta == cuenta1){
        let nuevoSaldo = saldo1 + montoIngreso;
        alert (`La cuenta ${cuenta1} posee ${nuevoSaldo}`);
    }
    else if(cuenta == cuenta2){
        let nuevoSaldo = saldo2 + montoIngreso;
        alert (`La cuenta ${cuenta2} posee ${nuevoSaldo}`);
    }
    else{
        alert("La cuenta ingresada no existe");
    }
}
else if(opcionMenu==2){
    const montoDebito = Number(prompt("Monto a debitar"));
    cuenta = Number(prompt("¿De qué cuenta se debitará?"));
    if (cuenta == cuenta1){
        if(montoDebito <= saldo1){
        let nuevoSaldo = saldo1 - montoDebito;
        alert (`La cuenta ${cuenta1} posee ${nuevoSaldo}`);
        }
        else{
            alert("Saldo insuficiente");
        }
    }
    else if(cuenta == cuenta2){
        if(montoDebito <= saldo2){
        let nuevoSaldo = saldo2 - montoDebito;
        alert (`La cuenta ${cuenta2} posee ${nuevoSaldo}`);
        }
        else{
            alert("Saldo insuficiente");
        }

    }
    else{
        alert("La cuenta ingresada no existe");
    }

}
else if(opcionMenu==3){
    cuenta = prompt("¿Que cuenta desea verificar?")
}
else{
    alert ("Opcion no valida")
}

