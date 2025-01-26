// alert("This is a alert");
// document.write("This is a document write");
const DhakaDiv = document.getElementById("dhaka");
DhakaDiv.innerHTML = "Dhaka is the capital of Bangladesh";

/* const userName = prompt("What is your name?");
showNameDiv.innerHTML = userName; */
const showNameDiv = document.getElementById("showName")

const userForm = document.getElementById("userForm");
userForm.addEventListener("submit", e => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const firstName = formData.get("fname");
    const lastName = formData.get("lname");
    if(firstName === "") {
        alert("Please enter your first name");
        return;
    }
    if(lastName === "") {
        alert("Please enter your last name");
        return;
    }
    const fullName = "Your full name is : " + firstName + " " + lastName;
    showNameDiv.innerHTML = fullName;
    e.target.reset();
})

const myBtn = document.getElementById("myBtn");

myBtn.addEventListener('click', ()=>{
    alert("Hello World");
})

const coxBazar = document.getElementById("coxBazar");
coxBazar.addEventListener("mouseover", () =>{
    alert("Cox Bazar");
})