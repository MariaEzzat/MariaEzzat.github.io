


function start_JoinFormEvents()
{
   const storeName=document.getElementById("storeName");
   const No_of_branches=document.getElementById("No_of_branches");
   const social_media=document.getElementById("social_media");
   const firstName=document.getElementById("firstName");
   const lastName=document.getElementById("lastName");
   const MobileNumber=document.getElementById("MobileNumber");
   const EmailAddress=document.getElementById("EmailAddress");
   storeName.addEventListener("focus",function(e){call(ischars,e.target);})
   No_of_branches.addEventListener("focusout",function(e){call(isNum,e.target)});
   social_media.addEventListener("focusout",function(e){call(isvaildWebsite,e.target)});
   firstName.addEventListener("focusout",function(e){call(ischars,e.target)});
   lastName.addEventListener("focusout",function(e){call(ischars,e.target)});
   MobileNumber.addEventListener("focusout",function(e){call(isMobileNumber,e.target)});
   EmailAddress.addEventListener("focusout",function(e){call(isEmailAddress,e.target)});  
}
start_JoinFormEvents();


 function call(func,elem)
{
    let error=elem.parentNode.getElementsByClassName("error")[0];
    console.log(error);
    if(!func(elem.value))
     {
         error.style.display="block";
         console.log("run");
     }
    else
     error.style.display="none";

}


function isNum(value)
{
    let reg=new RegExp('^[0-9]*$');
     return (reg.test(value));
}
function ischars(value)
{
    let reg=new RegExp("^[a-zA-Z0-9]*$");
    return reg.test(value);

}
function isvaildWebsite(value)
{
    let reg=new RegExp("^www.[0-9a-zA-Z]*.com$");
    return reg.test(value);

}
function isMobileNumber(value)
{
    let reg=new RegExp("^01[1+2+5][0-9]{8}$");
    return reg.test(value);

}

function isEmailAddress(value)
{
    let reg=new RegExp("^[A-Za-z0-9]*@[a-zA-Z]*.com$");
    return reg.test(value);

}
console.log(isEmailAddress("alameen2591999@4545.com"));
