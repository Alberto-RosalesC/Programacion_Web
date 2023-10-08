var XO="X";

document.getElementById("cont").addEventListener("click", function(e){
    console.log(e)
    if(document.getElementById(e.target.id).innerText==""){
        if(XO=="X")
            {
                XO="O"
                e.target.innerHTML = '<img src="https://vignette.wikia.nocookie.net/fireemblem/images/2/27/Equis_roja.png/revision/latest?cb=20180610045142&path-prefix=es" alt="X" class="X"> ';
            }
            else{
                XO="X"
                e.target.innerHTML = '<img src="https://th.bing.com/th/id/R.d31e596df6fbde31d2e8b738eed1493b?rik=bfzmC6%2fOeyfEhA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-J1Fwfxwo8YM%2fVXYPb1VLIdI%2fAAAAAAAABQ8%2f6EczC7G5opE%2fs1600%2fCirculo1.png&ehk=duAG0eg3rv3nntGGZ2Mw4SnxzE16OMZhcRJ8PYTF4j4%3d&risl=&pid=ImgRaw&r=0" alt="O" class="O">';
            }
    }
})

document.getElementById("btnLim").addEventListener("click",function(){
    let cajas = document.getElementsByClassName("caja");
    for (const elemento of cajas){
        elemento.innerText="" ;
        xo="0"; /*inicie en X cada que limpie*/
    }
})