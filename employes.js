function validate()
{
const myName = document.getElementById("nameInput");
const lastnameInput = document.getElementById("lastnameInput");
const email = document.getElementById("email");
const contactNo = document.getElementById("contactNo");

if (myName == "") {
    document.getElementById("message1").innerHTML = "**Fill the name please!";
    return false;
}

if (lastnameInput == "") {
    document.getElementById("message2").innerHTML = "**Fill the last name please!";
    return false;
}
if(myName.length<3){  
    document.getElementById("message3").innerHTML=  
    "**name must be at least 2 char long!";  
    return false;  
    }

    if(lastnameInput.length<3){  
        document.getElementById("message4").innerHTML=  
        "**last name must be at least 2 char long!";  
        return false;  
        }
            var e1 = document.getElementById("ddlView1");
            var e2 = document.getElementById("ddlView2");
            var strUser12 = e1.options[e1.selectedIndex].value;

            var strUser13 = e1.options[e1.selectedIndex].text;
            if(strUser12==0)
            {
                document.getElementById("message5").innerHTML=  
    "**Please select one option!"; 
    return false; 
            }
            var strUser14 = e2.options[e2.selectedIndex].value;

            var strUser15 = e2.options[e2.selectedIndex].text;
            if(strUser14==0)
            {
                document.getElementById("message6").innerHTML=  
    "**Please select one option!"; 
    return false; 
            }
            var atposition=email.indexOf("@");  
            var dotposition=email.lastIndexOf(".");  

            if (email == "") {
                document.getElementById("message7").innerHTML = "**Fill the email please!";
                return false;
            }

            if (contactNo == "") {
                document.getElementById("message8").innerHTML = "**Fill the contact number please!";
                return false;
            }

            
              var formatEmail=/^[-_A-Za-z0-9]+@redberry\.ge$/;
              if(email!=formatEmail){
                document.getElementById("message9").innerHTML = "**Fill the correct email please!";
                return false;
              }

              var formatContactNo=/^[+]+^[99]+^[-_0-9]$/;
              if(email!=formatEmail){
                document.getElementById("message10").innerHTML = "**Fill the correct contact no. please!";
                return false;
              }
             
    }
