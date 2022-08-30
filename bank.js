error = document.getElementById('disp')
detailsOfUser = []
if(localStorage.details){
    detailsOfUser = JSON.parse(localStorage.getItem('details'))
}
const register= ()=>{
    // alert("i dey work")
    if(firstname.value=="" || lastname.value== "" || useremail.value=="" || userpassword.value==""){
        alert("Kindly fill in your details!")
    }
    else{
        userDetails={
            accNumber:  '223' + Math.round(Math.random()*13331) +'22',
            firstName:firstname.value,
            lastName:lastname.value, 
            email: useremail.value, 
            password: userpassword.value
        }
        // console.log(userDetails.accNumber)
        detailsOfUser.push(userDetails)
        console.log(detailsOfUser)
        localStorage.setItem('details',JSON.stringify(detailsOfUser))
        alert("Congratulations!, You have Successfully signed Up and your details has been stored.")
        alert('This is your Account Number: '+ userDetails.accNumber)
        firstname.value = ""
        lastname.value = ""
        useremail.value = ""
        userpassword.value = ""
        window.location ="index.html"
    }
}
    let found = false
const logIn =()=>{
    // console.log(detailsOfUser[0].email)
    if(Email.value == "" || Password.value ==""){
        // alert('Oppss! Kindly fill in your Email and Password')
        error.innerHTML = 'Oppss! Kindly fill in your Email and Password'
        
    }
    else{
        for(i=0; i<detailsOfUser.length; i++){
            if(detailsOfUser[i].email== Email.value && detailsOfUser[i].password== Password.value){
                console.log(useremail.value);
                found = true
                break;
            }
            
        }
        if(found){
            alert("Login Successful")
        }
        else{
            // alert("Incorrect Email or Password")
            error.innerHTML = 'Incorrect Email or Password!'
            Email.value =''
            Password.value = ''
        }
    }
}