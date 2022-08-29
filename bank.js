detailsOfUser = []
if(localStorage.details){
    detailsOfUser = JSON.parse(localStorage.getItem('details'))
}
const Register= ()=>{
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
        firstname.value = ""
        lastname.value = ""
        useremail.value = ""
        userpassword.value = ""
        window.location ="index.html"
    }
}
