var Read_button = document.querySelectorAll('#ReadButton');;
var info = document.querySelectorAll('.details');
var icons = document.querySelectorAll('.fa-circle-arrow-up');
var menu_icon= document.querySelector('.active_nav');
var navlist= document.querySelector('.navlist');
var navbar= document.querySelector('.navbar');
var item=document.querySelector('#item');
var amt1=document.getElementById('amt1');
var total=document.getElementById('Total');
var formsbmit= document.querySelector('#formsbmit');
var odernow=document.querySelector('#oderdone');
var Quantity= document.getElementById('Quantity');
var set= document.querySelector('select');
var name1= document.querySelector('#item');
var contactfrom= document.querySelector('.login_form');
var button= document.querySelector('.button')

var cancle= document.querySelector('.cancle');

// ======================= nav bar=============================


window.addEventListener('scroll',()=>{
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navbar.classList.add('shadow');
         } 
           else {
            navbar.classList.remove('shadow');
           }
})

// =========================== Read-more-button============================

menu_icon.addEventListener('click',()=>{
   navlist.classList.toggle('show');

})




Read_button.forEach((value,index)=>{
value.addEventListener('click',()=>{

    callbtn(index);
   
})
});

function callbtn(i) {
if(icons[i].classList.contains('fa-circle-arrow-up'))
{
    icons[i].classList.remove('fa-circle-arrow-up');
    icons[i].classList.add('fa-circle-arrow-down');
    info[i].classList.add('open');
}
else
{
    icons[i].classList.add('fa-circle-arrow-up');
    icons[i].classList.remove('fa-circle-arrow-down');
    info[i].classList.remove('open');
}
}

async function contactform(params) {
     
  formsbmit.addEventListener('submit',(e)=>{
   e.preventDefault();
   name12 = contactname.value;
  if(name12 ==" sonu " )
  {
    alert('please file');
  }
  else
  {

      alert('form is submitted');
  }
});
 }


button.addEventListener('click',()=>{
    contactfrom.classList.add('display')
})

cancle.addEventListener('click',()=>{
    contactfrom.classList.remove('display')
})


