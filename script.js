//Collecting all the input boxes

let email_input = document.querySelector('#email-input');
let postal_input = document.querySelector('#postal-input');
let number_input = document.querySelector('#number-input');


class ValidationFunction{

    static checker(re, str, type){
        if(re.test(str)){
            UI.show_message(`Valid ${type}`, 'sucess');            
        }else if(str === ''){
            UI.show_message(`Empty ${type}`, 'notEntered');
        }else{
            UI.show_message(`Invalid ${type}`, 'notEntered');
        }
    }

    static emailChecker(){

        let str = email_input.value;
        let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let type = 'email';
        ValidationFunction.checker(re, str, type);
    }

    static postalChecker(){
        let str = postal_input.value;
        let re = /^[0-9]{4}$/;
        let type = 'postal code';

        ValidationFunction.checker(re, str, type);
        
    }

    static numberChecker(){
        let str = number_input.value;
        let re = /^(\+88)?01[0-9]{9}$/;
        let type = 'phone number';

        ValidationFunction.checker(re, str, type);

    }
}






class UI{
    static show_message(messege, classname){
        let div = document.createElement('div');
        div.className = classname;
        div.innerHTML = `${messege}`;

        //getting the other needed contents.
        let cont = document.querySelector('.container');
        let row = document.querySelector('.row');

        cont.insertBefore(div, row);

        setTimeout(()=>{
            document.querySelector(`.${classname}`).remove();
        }, 2000);
    }
}



//Validation button listener

document.querySelector('#email-val').addEventListener('click', ValidationFunction.emailChecker);
document.querySelector('#postal-val').addEventListener('click', ValidationFunction.postalChecker);
document.querySelector('#number-val').addEventListener('click', ValidationFunction.numberChecker);