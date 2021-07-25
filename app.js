function loadMore(){
    document.getElementById('mydiv').style.display='block'
    document.getElementById('btn').style.display='none'
}
function checkForSelection() {
    if (document.getElementById("userName").selectedIndex === 0) {
    alert("Please Enter User Name");
    return false;
    }
}
    