let searchbox = document.getElementById("searchbox")
let searchbtn = document.getElementById("searchbtn")

searchbtn.addEventListener("click", ()=> {
    mainFunction();
})
searchbox.addEventListener("keydown", (enterEvent)=> {
    if(enterEvent.key == "Enter")
    {
        mainFunction();
    }
})

let = mainFunction=()=>{
    let username = searchbox.value;
    if(username == '') {
        alert("fill this first");
        searchbox.focus()
    }else
    {
        window.location.href = `https://github.com/${username}`;
    }
}