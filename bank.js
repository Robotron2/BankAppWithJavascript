const closeNav = () => {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("mainbtn").style.visibility = "visible";
}
const openNav = () => {
        document.getElementById("mySidebar").style.width = "200px";
        document.getElementById("main").style.marginLeft = "200px";
        document.getElementById("mainbtn").style.visibility = "collapse";
}

error = document.getElementById('disp')
detailsOfUser = []
if(localStorage.details){
    detailsOfUser = JSON.parse(localStorage.getItem('details'))
}
const register= ()=>{
    if(firstname.value=="" || lastname.value== "" || useremail.value=="" || userpassword.value==""){
        // alert("Kindly fill in your details!")
        disp.innerHTML = "Kindly fill all details"
        setTimeout(clearErrorMsg, 1000)
    }
    else{
        userDetails={
            accNumber:  '223' + Math.round(Math.random()*13331) +'22',
            firstName:firstname.value,
            lastName:lastname.value, 
            email: useremail.value, 
            password: userpassword.value
        }
        detailsOfUser.push(userDetails)
        // console.log(detailsOfUser)
        localStorage.setItem('details',JSON.stringify(detailsOfUser))
        // alert("Congratulations!, You have Successfully signed Up and your details has been stored.")
        firstname.value = ""
        lastname.value = ""
        useremail.value = ""
        userpassword.value = ""
        window.location ="animate.html"
    }
}
// Animate page
const pleaseWait = () =>{
    setTimeout(100000)
    window.location ="login.html"
    
}


    let found = false
const logIn =()=>{
    // console.log(detailsOfUser[0].email)
    if(Email.value == "" || Password.value ==""){
        // alert('Oppss! Kindly fill in your Email and Password')
        error.innerHTML = 'Oppss! Kindly fill in your Email and Password'
        setTimeout(clearErrorMsg, 1000)
    }
    else{
        for(i = 0; i < detailsOfUser.length; i++){
            if(detailsOfUser[i].email== Email.value && detailsOfUser[i].password== Password.value){
                found = true
                break;
            }  
        }
        if(found){
            alert("Login Successful")
            window.location.href = "dashboard.html"      
        }
        else{
            error.innerHTML = 'Incorrect Email or Password!'
            setTimeout(clearErrorMsg, 1000)
            Email.value =''
            Password.value = ''
        }
    }
}
 // Dashboard





