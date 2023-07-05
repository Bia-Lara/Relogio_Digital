

function relogio(){
    var data = new Date();

    var hr= data.getHours();
    var mn= data.getMinutes();
    var sg= data.getSeconds();

    let tempo = hr+' : '+mn+' : '+sg;
    let hora = window.document.getElementById('hr');
    let minuto = window.document.getElementById('mn');
    let segundo = window.document.getElementById('sg');


    if(hr<10){
        hora.innerHTML= '0'+hr;
    }else{
        hora.innerHTML= hr;
    }

    if(mn<10){
        minuto.innerHTML='0'+mn;
    }else{
        minuto.innerHTML=mn;
    }

    if(sg<10){
        segundo.innerHTML='0'+sg;
    }else{
        segundo.innerHTML=sg;
    }
    
    
   
    
}

setInterval(relogio, 500);