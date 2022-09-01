// let regexForEmail = /^(([\a-z])+([@])+([\w])+([.])+([\a-z]{1,5})+([.][\w]{1,5})?)$/
// const testRegex = ()=>{
//     console.log(regexForEmail.test(userInput.value))
// }


const clearErrorMsg = () => {
    disp.style.visibility = "hidden"
}
const reloadLogin = () => {
    window.location.href = "login.html"
}
const reloadSignUp = () => {
    window.location.href = "signUp.html"
}
error = document.getElementById('disp')
detailsOfUser = []
if(localStorage.details){
    detailsOfUser = JSON.parse(localStorage.getItem('details'))
}
const registerBtn = ()=>{
    if(firstname.value=="" || lastname.value== "" || useremail.value=="" || userpassword.value==""){
        // alert("Kindly fill in your details!")
        disp.innerHTML = "Kindly fill all details"
        setTimeout(clearErrorMsg, 1000)
        setTimeout(reloadSignUp,1000)
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
        window.location ="login.html"
    }
}
    let found = false
const logIn =()=>{
    if(Email.value == "" || Password.value ==""){
        error.innerHTML = 'Oppss! Kindly fill in your Email and Password'
        setTimeout(clearErrorMsg, 1000)
        setTimeout(reloadLogin,1000)
        
    }
    else{
        error.innerHTML = ''
        for(i=0; i<detailsOfUser.length; i++){
            if(detailsOfUser[i].email== Email.value && detailsOfUser[i].password== Password.value){
                // console.log(useremail.value);
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

 const userDetailsOnLoad =()=>{
    // detailsOfUser = JSON.parse(localStorage.getItem('details'))
    detailsOfUser.map((item,index)=>
    {
        displayNameOfUser.innerHTML=  `${item.firstName},  ${ item.lastName} : ${item.accNumber}`
    })
    allTransferDetails = []
    if(localStorage.transaction){
        allTransferDetails = localStorage.getItem('transaction')
    }
 }



let initialBalance = 2000
 const sendMoney =()=>{
    if(nameofrecipient.value== "" || amountEntered.value=="" || acctNum.value=="" || bankname.value==""){
        alert('Oppsss! Empty fields!')
    }
    else{
        transferdetails ={
            nameOfRecipient : nameofrecipient.value,
            transferAmount : amountEntered.value,
            accountNumber: acctNum.value,
            bankName : bankname.value,
            mydate : new Date()
        }
            if(amountEntered <= 0){
                alert("Guy! transfer tangiblle amount")
            }
            else if(amountEntered > initialBalance){
                alert("Insufficient Fund! Be Careful!")
            }
            else{
                initialBalance = initialBalance - (parseInt(amountEntered));
               alert("Withdrawal Successful!")  
               displayBalance.innerHTML =  initialBalance
            //    amountFromJavascript.innerHTML = initialBalance
               allTransferDetails.push(transferdetails)
               localStorage.setItem('transaction',JSON.stringify(allTransferDetails))
               allTransferDetails.map((item,index)=>{
                
                transactionDetails.innerHTML = `
                <tr>
                    <td>${index+1}</td>
                    <td>${item.nameOfRecipient}</td>
                    <td>${item.accountNumber}</td>
                    <td>${item.transferAmount}</td>
                    <td>${item.mydate.toLocaleTimeString()} ${item.mydate.toLocaleDateString()}</td>
                </tr>`
               })
            }
    }
   
    }
//    const sendMoney =()=>{
//     alert()
//    }



// Modal Scripts

var modal = document.getElementById("sendMoneyModal");

// Get the button that opens the modal
var btn = document.getElementById("sendBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


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






