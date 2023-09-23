let c=0;

const count = document.getElementById("count");
const error = document.getElementById("error"); 
const incbtn = document.getElementById("incr");
const decbtn = document.getElementById("decr");
const resetbtn = document.getElementById('reset');

count.textContent = c;
function incr()
{
   c++;
   count.textContent = c;
}
const decr = () =>
{
   if (c > 0)
   {
      c--;
      count.textContent = c;
   }
   else
   {
      error.style.display="block";
      error.textContent = "Don't go below zero";

   }
}
const reset = () => {
   c = 0;
   count.textContent = c;
}
incbtn.addEventListener('click',incr);
decbtn.addEventListener('click',decr);
resetbtn.addEventListener('click',reset);
