
function showFields()
{
    var username= document.getElementById('username').value
    var email= document.getElementById('email').value
    var password= document.getElementById('password').value
    
    document.getElementById('message').innerHTML = "Username is: " +username +"\nemail is: " +email + "\nPassword is: " + password;
    // var sum = num1+num2
    // document.write('The sum is :'+sum)
    // alert('The sum is '+sum)
}

