const input_el=document.querySelector('.inputvalue');
const button =document.querySelector('.button');
var name=document.querySelector('.name');
var des=document.querySelector('.desc');
var temp=document.querySelector('.temp');
const divcontainer=document.querySelector('.display')

button.addEventListener('click',()=>{
    divcontainer.classList.toggle('done');
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+input_el.value+'&appid=5982e40527e8c3cb09177b6c7a7bb4e8')
.then(res=>res.json())
.then(data=>{
    var namevalue=input_el.value;
    var tempvalue=data['main']['temp'];
    var descvalue=data['weather'][0]['description'];
    tempvalue=tempvalue-273;
    

    name.innerHTML=namevalue;
    temp.innerHTML=tempvalue;
    des.innerHTML=descvalue;
})


.catch(err=>alert("WRONG CITY NAME!"))
});