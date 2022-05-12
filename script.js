function validateForm() {
    var username= document.getElementById("username").value;
    var password= document.getElementById("password").value;
    var email= document.getElementById("email").value;
    var contact= document.getElementById("contact").value;

    if(username.trim()==""){
        alert("please enter username");
        return false;
    }
    
    var checkuname=/nsu/gi;
    if(!username.trim().match(checkuname)){
        alert("Username must contain nsu");
        return false;

    }

    var checkcharacter=/[!@#$%^&*()~]/g;
        if(username.trim().match(checkcharacter)){
            alert("Invalid. Name can not contain special character e.g. !@#$%^&*()_+=-~`");
            return false;
        }
        
        


    if(password.trim()=="" || password.trim().length < 7 || password.trim().length > 20){
            alert("Password length should be in between 7 to 20");
            return false;
        }

        var strings = password.toString();
        var numeric =0;
        var upper =0;
        var lower =0;
        var character='';
        for(var i=0; i < strings.length; i++){
            character = strings.charAt(i);
            if (!isNaN(character * 1)){

                numeric=1;

            }
            else{
                if (character == character.toUpperCase()) {
                    upper=1;
                }
                if (character == character.toLowerCase()){
                    lower=1;
                }
            }

        }
        if(numeric==0 || upper==0 || lower==0){
            alert('password must contain atleast one uppercase one lowercase and one numeric value');
            return false;
        }

        var checkpassword=/[!@#$%^&*()~]/g;
        if(!password.trim().match(checkpassword)){
            alert("Must contain special character e.g. !@#$%^&*()_+=-~`");
            return false;
        }

        var checkcontact = /[0-9]/;

        if(!contact.trim().match(checkcontact)){
            alert("Invalid contact.");
            return false;
        } 


        if(contact.toString().charAt(0)!=0  || contact.toString().charAt(1)!=1 || contact.trim().length != 11){
            alert("Invalid contact. e.g. 01XXXXXXXXX");
            return false;
        }

        var checkat=email.indexOf("@");  
        var checkdot=email.lastIndexOf("."); 

        if (email.trim()=="" || checkat<1 || checkdot<atposition+2 || checkdot+2>=email.length){  
            alert("Please enter a valid email address.");
            return false;  
        }



    }
