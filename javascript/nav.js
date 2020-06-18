console.log("Hello Bhomeshwar");



let toggleMenu = document.getElementById("toggleMenu");

function toggle()
{
    if(window.innerWidth>=768)
    {
        toggleMenu.classList.add("pull-right");
        document.getElementById("close").style.display = "none";
        document.getElementById("open").style.display = "block";
        document.getElementById("navCard").style.display = "none";
    }
    else
    {
        toggleMenu.classList.remove("pull-right");
    }
}

toggle()



document.getElementById("close").style.display = "none";
document.getElementById("navCard").style.display = "none";

document.getElementById("navButton").addEventListener("click",function()
{

    if(window.innerWidth<768)
    {
    if(document.getElementById("close").style.display == "none")
    {
        document.getElementById("navCard").style.transitionDuration = "display 0.5s";
        document.getElementById("close").style.display = "block";
        document.getElementById("open").style.display = "none";
        document.getElementById("navCard").style.display = "block";
        
    }

    else
    {
        document.getElementById("navCard").style.transition = "display 0.5s";
        document.getElementById("close").style.display = "none";
        document.getElementById("open").style.display = "block";
        document.getElementById("navCard").style.display = "none";
    }

    }

})
