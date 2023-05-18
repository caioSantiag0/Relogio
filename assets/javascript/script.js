const horas = document.getElementById('horas')
const minutos = document.getElementById('minuto')
const segundos = document.getElementById('segundo')


const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg= dateToday.getSeconds();

    if (hr < 10) hr = '0'+hr;
    if (min < 10) min = '0'+hr;
    if (seg < 10) seg= '0'+seg;
    
    horas.textContent = hr;
    minuto.textContent = min;
    segundo.textContent= seg;
    

    

})