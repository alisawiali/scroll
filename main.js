let main = document.getElementById('main');

onscroll = function (){
    if(scrollY >= 250){
        main.style.display = 'block';
    }else{
        main.style.display ='none';
    }
}

main.onclick = function (){
    scroll({
        top:0,
       left: 0,
       behavior:"smooth",

    })
}