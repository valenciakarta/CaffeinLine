var errorMsg = document.getElementById('error');

function fnValidate(){
    if(!validateName()){
        return;
    }else if(!validateEmail()){
        return;
    }else if(!validateMessage()){
        return;
    }else{
        errorMsg.innerHTML = '';
        
        var CUMessage = 'Name: '+ document.getElementById('name').value + '\n' + 'Email: ' + document.getElementById('email').value + '\n' + 'Message: ' + document.getElementById('message').value;
        
        console.log(confirm(CUMessage));
        
        if(confirm(CUMessage)){
            alert("Thank you for the message!")
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
    console.log(email)
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

function validateMessage(){
    var pMessage = document.getElementById('message').value;

    if(pMessage ==''){
        errorMsg.innerHTML = 'Message must be filled!';
        return false
    }

    errorMsg.innerHTML =''
    return true;
}