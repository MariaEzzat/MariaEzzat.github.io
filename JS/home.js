const firstLoginButton=document.getElementById("firstLogin");
const overElement=document.getElementById("overing");
const homeContainer=document.getElementById("home-container");
firstLoginButton.addEventListener("click",function(){
    showLoginForm();
})

function showLoginForm()
{
    var loginFormContainer=document.createElement("div");
    loginFormContainer.setAttribute("id","login-form-container");
    overElement.style.display="block";
 
    loginFormContainer.innerHTML= ( `<form id="loginForm">
    <div id="outing">
        <img src="images/home/search-close.svg">
    </div>
    <h1>تسجيل الدخول</h1>
    <button id="continue-across-google">الاستمرار عبر جوجل </button>
    <button id="continue-with-google">الاستمرار عبر فيسبوك</button>
    <div class="or">او</div>
    <input type="text" placeholder=" البريد الالكترونى">
    <input type="password" placeholder="كلمه المرور">
    <div class="forgetPassword">
        <span>
            <input type="checkbox" >
            <label>ابق متصلا</label>
        </span>
        
        <a>نسيت كلمه المرور؟</a>
    </div>
    <button id="login">تسجيل الدخول </button>
    <div class="acount-create">
        <label>لا تملك حساب؟ </label>
        <a href="#">انشا حساب</a>
    </div>
    


</form>`
    )
    homeContainer.style.position="fixed";
    document.body.appendChild(loginFormContainer);
     const outing=document.getElementById("outing");
     outing.addEventListener("click",function(){
         exitForm(loginFormContainer);
     })


}
function exitForm(loginFormContainer)
{
    loginFormContainer.innerHTML="";
    homeContainer.style.position="static";
    document.body.removeChild(loginFormContainer);
    document.getElementById("overing").style.display="none";

}