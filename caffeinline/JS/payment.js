var errorMsg = document.getElementById('error');

function fnValidate(){
    if(!validateName()){
        return;
    }else if(!validateEmail()){
        return;
    }else if(!validateCity()){
        return;
    }else if(!validateAddress()){
        return;
    }else if(!validatePayment()){
        return;
    }else if(!validateAgree()){
        return;
    }else{
        errorMsg.innerHTML = '';

        var method;

        if(document.getElementById('paypal').checked){
            method = 'Paypal';
        }else if(document.getElementById('visa').checked){
            method = 'Visa';
        }
        
        var PMessage;

        if(method == 'Visa'){
            PMessage = 'Name: '+ document.getElementById('name').value + '\n' + 'Email: ' + document.getElementById('email').value + '\n' +  'City: '+ document.getElementById('city').value + '\n' +  'Address: ' + document.getElementById('address').value + '\n' +  'Payment Method: '+ method + '\n' + 'Card Number: ' + document.getElementById('cnumber').value + '\n' + 'Validity: ' + document.getElementById('validity').value + '\n' + 'CVV Number: ' + document.getElementById('cvvn').value;
        
            console.log(confirm(PMessage));
        
            if(confirm(PMessage)){
                alert("Thank you for your payment")
            }
        }else if(method == 'Paypal'){
            PMessage = 'Name: '+ document.getElementById('name').value + '\n' + 'Email: ' + document.getElementById('email').value + '\n' +  'City: '+ document.getElementById('city').value + '\n' +  'Address: ' + document.getElementById('address').value + '\n' +  'Payment Method: '+ method;
        
            console.log(confirm(PMessage));
        
            if(confirm(PMessage)){
                alert("Thank you for your payment!")
            }
        }
    }
}

function validateName(){
    var pName = document.getElementById('name').value;
    if(pName == ''){
        errorMsg.innerHTML = 'Name must be filled!';
        return false;
    }else if(pName.length < 4){
        errorMsg.innerHTML ='Name must be more than 4 characters!';
        return false;
    }else if(!isAlpha(pName)){
        errorMsg.innerHTML = 'Name must be alphabet only!';
        return false;
    }

    errorMsg.innerHTML = ''
    return true;
}
function isAlpha(pName){
    // a - z & A - Z
    for(var i = 0; i < pName.length; i++){
        if(!(pName.charAt(i) >= 'a' && pName.charAt(i) <= ' z') && !(pName.charAt(i) >= 'A' && pName.charAt(i) <= 'Z')){
            return false;
        }
    }
    return true;
}

function validateEmail(){
    var email = document.getElementById('email').value
    if(!email){
        errorMsg.innerHTML = 'You need to fill out the email!';
        return false;
    }
    else if(email.indexOf("@")==-1 || email.indexOf(".")==-1){
        errorMsg.innerHTML = 'Invalid email!';
        return false;
    }
    errorMsg.innerHTML = ''
    return true;

}

function validateCity(){
    var pCity = document.getElementById('city').value;

    if(pCity ==''){
        errorMsg.innerHTML = 'City must be filled!';
        return false;
    }else if(pCity.length<4){
        errorMsg.innerHTML = 'City must be more than 4 characters!';
        return false;
    }else if(!isAlpha(pCity)){
        errorMsg.innerHTML = 'City must be alphabet only!';
        return false;
    }
    errorMsg.innerHTML =''
    return true;
}

function isAlpha(pCity){
    // a - z & A - Z
    for(var i = 0; i < pCity.length; i++){
        if(!(pCity.charAt(i) >= 'a' && pCity.charAt(i) <= 'z') && !(pCity.charAt(i) >= 'A' && pCity.charAt(i) <= 'Z')){
            return false;
        }
    }
    return true;
}

function validateAddress(){
    var pAddress = document.getElementById('address').value;

    if(pAddress ==''){
        errorMsg.innerHTML = 'Address must be filled!';
        return false
    }else if(pAddress.length <10){
        errorMsg.innerHTML = 'Address is too short!';
        return false;
    }

    errorMsg.innerHTML =''
    return true;
}

function validatePayment(){
    var pPaypal= document.getElementById('paypal').checked;
    var pVisa = document.getElementById('visa').checked;

    if(!pPaypal && !pVisa){
        errorMsg.innerHTML = 'Payment method must be choosen!!';
        return false;
    }else if(pVisa){
        if(!validateCNumber()){
            return;
        }else if(!validateValidity()){
            return;
        }else if(!validateCvvn()){
            return;
        }
    }
    errorMsg.innerHTML=''
    return true;
    
}

function showHideform(){
    var visa = document.getElementById("visa");
    var formvisa = document.getElementById("formvisa");
    if(visa.checked){
        formvisa.style.display="block";
    }else{
        formvisa.style.display="none";
    }
}

function validateAgree(){
    var pAgree= document.getElementById('agreement').checked;

    if(!pAgree){
        errorMsg.innerHTML ='You must agree with the terms and condition!';
        return false;
    }
    errorMsg.innerHTML = ''
    return true;
}

function validateCNumber(){
    var pCnumber = document.getElementById('cnumber').value;

    if(pCnumber == ''){
        errorMsg.innerHTML ='Card number must be filled!';
        return false
    }else if(!numeric(pCnumber)){
        errorMsg.innerHTML = 'Card number must be number!'
        return false;
    }else if(pCnumber.length < 16){
        errorMsg.innerHTML = 'Card Number is too short!';
        return false;
    }
    errorMsg.innerHTML = ''
    return true;
}

function numeric(pCnumber){
    for(var i = 0; i < pCnumber.length; i++){
        if((pCnumber.charAt(i) >= 'a' && pCnumber.charAt(i) <= 'z') && !(pCnumber.charAt(i) >= 'A' && pCnumber.charAt(i) <= 'Z')){
            return false;
        }
    }
    return true;
}

function validateValidity(){
    var pValidity = document.getElementById('validity').value;

    if(pValidity == ''){
        errorMsg.innerHTML ='Validity must be filled!';
        return false
    }else if(!numeric(pValidity)){
        errorMsg.innerHTML = 'Validity must be number!';
        return false;
    }else if(pValidity.indexOf("/")==-1){
        errorMsg.innerHTML = 'Invalid Validity!';
        return false;
    }else if(pValidity.length > 5){
        errorMsg.innerHTML = 'Validity is too long!';
        return false;
    }
    errorMsg.innerHTML = ''
    return true;
}

function numeric(pValidity){
    for(var i = 0; i < pValidity.length; i++){
        if((pValidity.charAt(i) >= 'a' && pValidity.charAt(i) <= 'z') && !(pValidity.charAt(i) >= 'A' && pValidity.charAt(i) <= 'Z')){
            return false;
        }
    }
    return true;
}

function validateCvvn(){
    var pCvvn = document.getElementById('cvvn').value;

    if(pCvvn == ''){
        errorMsg.innerHTML ='CVV must be filled!';
        return false;
    }else if(!numeric(pCvvn)){
        errorMsg.innerHTML = 'CVV must be number!';
        return false;
    }else if(pCvvn.length > 3){
        errorMsg.innerHTML = 'CVV is too long!';
        return false;
    }else if(pCvvn.length < 3){
        errorMsg.innerHTML = 'CVV is too short!'
        return false;
    }
    errorMsg.innerHTML = ''
    return true;
}

function numeric(pCvvn){
    for(var i = 0; i < pCvvn.length; i++){
        if((pCvvn.charAt(i) >= 'a' && pCvvn.charAt(i) <= 'z') && !(pCvvn.charAt(i) >= 'A' && pCvvn.charAt(i) <= 'Z')){
            return false;
        }
    }
    return true;
}