let flag = 0;
function change(x){
         flag = flag + x;
         showSlide(flag);  
}
function showSlide(num){
    let slid = document.getElementsByClassName("slides");
    for(let data of slid){
        data.style.display = "none";
    }
    if(num == slid.length){
        num = 0;
        flag = 0;
    }
    if(num < 0){
        num = slid.length-1;
        flag = slid.length-1;
    }
    slid[num].style.display = "block";
}
showSlide(flag);