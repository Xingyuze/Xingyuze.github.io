// my age 

let now = new Date().getTime();
let myBirthday = new Date("2008-10-09T05:00:00").getTime();
let curr_age = Math.floor((now-myBirthday)/1000/60/60/24/365.25)

let age = document.querySelector(".js_age");
age.innerHTML = "I'm Yuze Xing and"+ curr_age+ " years old."