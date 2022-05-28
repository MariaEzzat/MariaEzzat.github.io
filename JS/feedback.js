const group1=document.getElementsByClassName("group1");
const group2=document.getElementsByClassName("group2");
const group3=document.getElementsByClassName("group3");
function applyEvents(buttons)
{
    
for( let elem of buttons)
{
    elem.addEventListener("click",function(e){
        console.log("fdfdf");
        changeButton(buttons,e.target);
    })
}


}
applyEvents(group1);
applyEvents(group2);
applyEvents(group3);
function changeButton(buttons,clicked)
{
    for(let elem of buttons)
    {
        if(elem==clicked)
        {
            elem.classList.remove("notClicked");
            elem.classList.add("clicked");
        }
        else
        {
            elem.classList.remove("clicked");
            elem.classList.add("notClicked")
        }
    }

}

document.addEventListener