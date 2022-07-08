// let es5=function(){
//     console.log('2');
// }
// let es6 = () =>{
//     console.log('2')
// }


// let es2=function(x,y)
// {
//     return x * y;
// }
// console.log(es2(10,5));

// let s3=(x,y)=>x*y;
// console.log(s3(5,6));

// let toplam=(x,y)=>x*y;
// document.getElementById("div").innerHTML=(toplam(14,3));


// let list= {
//     category: 'phone',
//     names:['ıphone8', 'samsung8','ıphone7'],
//     call:function(){
//         this.names.map((name)=>

//     {
// console.log(`${this.category} ${name}`);
//     })
//     }
// }
// list.call();


setTimeout("document.getElementById('loader').style.display= 'none'", 2000);



function alanıcın(a,b,c)
{
    this.a=a;
    this.b=b;
    this.c=c;
}
function uly(){

}
uly.prototype.eklealana=function(course)
{
    const ul=document.getElementById('course-list');
     var html= `
     <tr>
     <td><img src='img/${course.a}' style="width:50px; height:50px;" ></td>
     <td>${course.b}</td>
     <td>${course.c}</td>
     </tr>
     `;
     ul.innerHTML+=html;
}
uly.prototype.clearControls=function(){
    const a=   document.getElementById('agu').value=" ";
    const b=  document.getElementById('ager').value=" ";
    const c=  document.getElementById('ag').value=" ";
}

document.getElementById('paylas').addEventListener('submit',function(e){
    const a=   document.getElementById('agu').value;
    const b=  document.getElementById('ager').value;
    const c=  document.getElementById('ag').value;
  const abc=new alanıcın(a,b,c);
  const ui=new uly();
 ui.eklealana(abc);
ui.clearControls();
e.preventDefault();
});

// var form = document.getElementById('form');
// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     var errorsy = document.getElementById('errorsy');
//     var age = document.getElementById('age');
//     var name = document.getElementById('name');
//     var errors = document.getElementById('errors');
//     if (name.value.length === 0) {
//         return errors.innerHTML = 'boş geçemezsiniz';

//     }
//     else if (name.value.length > 20) {
//         return errorsy.innerHTML = 'uzunluk fazla girdiniz';
//     }

//     if (age.value.length === 0) {
//         return errorsy.innerHTML = 'boş geçemezsiniz';
//     }
//     else if (isNaN(age.value)) {
//         return errorsy.innerHTML = 'sayısal değer giriniz';
//     }
//     console.log('dfdsf');
// })
// const arr = ['a', 'b', 'c', 'd', 'e'];
// let a = document.getElementById("dizi");
// arr.forEach(item => {
//     let imy = document.createElement('div');
//     imy.style.height = '200px';
//     imy.style.width = '200px';
//     imy.style.background = 'purple';
//     imy.style.display = 'inline-block'
//     imy.style.marginLeft = '7%';
//     var dugun = document.createTextNode(item);

//     imy.appendChild(dugun)
//     dizi.appendChild(imy);

// });

// let toplam = (x, y) => x + y;

// var suy = document.getElementById('hes');
// suy = document.createTextNode(toplam(3, 4));


// document.querySelector('#getEmployee').addEventListener('click',loadEmployee);
// function loadEmployee(){
//     const xhr=new XMLHttpRequest();//employes json dosyasına isteka tmak ıcın kullanılır.
//     xhr.open('GET','employees.json', true);
//     xhr.onload=function(){
//         if(this.status===200){
//            let employees=JSON.parse(this.responseText)
//            let html=`
//            <table class="table table-bordered table-striped">
//            <tr><td>${employees.firstname}</td>
//          <td>${employees.lastname}</td>
//           <td>${employees.age}</td>
//           <td>${employees.retired}</td></tr>

//            `
//            document.querySelector('#employees').innerHTML=html;
//         }
//     }
//     xhr.send();
// }

