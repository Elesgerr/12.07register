let form_vali = document.getElementById("form")
let input = document.getElementById("input_all")
let input_al = document.getElementById("input_al")
let input_a = document.getElementById("input_a")


function form_validation(){
    inputvalidation()
    toouppercase()
    emailvalidate()
    minpassword()

   function inputvalidation(){
  
    if(input.value === "" && input_al.value === "" && input_a.value === "" ){
        alert('Melumatlar bos ola bilmez')
        return false
    }
   }
   function toouppercase(){
    let capitalize = input.value.charAt(0).toUpperCase()+ input.value.slice(1).toLowerCase();
    console.log(capitalize);
   }
  
   function minpassword(){

    const min = 6;

    if(input_a.value.length >= min){
        alert("Password Uğurlu")
    }
    else{
        alert('Şifrə Minimum 6 Olmalıdır')
    }
   }
   function emailvalidate(){
    var regexx = /^[A-Za-z][\w$.]+@[\w]+\.\w+$/;
    if (regexx.test(input_al.value)){
        alert('Email Uğurlu');    
    }
    else{ 
    alert('Email Uğursuz!');
    }
    }
}


function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  function Employee(name, age, test) {
    this.test = test;
    Person.call(this, name, age);
  }
  let employee = new Employee('eli', 20, 'test');
  console.log(employee);


var football= {
    name : "messi", 
    };
    console.log("name : "+ football.name);
    football.name = "ronaldo";
    console.log("name : "+ football.name);
    football.name = "neymar";
    console.log("name : "+ football.name);
