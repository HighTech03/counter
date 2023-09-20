let counter=0;

const countervalue = document.getElementById("display");
const incrementbtn = document.getElementById("btnNxt");
const decrementbtn = document.getElementById("btnPre");
const resetbtn = document.getElementById('reset');

incrementbtn.addEventListener('click', () =>
 {
    if(counter>=15)
      alert('you added more 10');
    
        counter++;
        countervalue.innerHTML = counter;
     
});

decrementbtn.addEventListener('click',() =>
{
    if(counter<=0)
    counter=0;
 else
 {
    counter--;
    countervalue.innerHTML = counter;
 }
});

resetbtn.addEventListener('click', reset );

 function reset() {
    counter = 0;
    countervalue.innerHTML = counter;
 }