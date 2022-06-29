const users=[];
    /*const user={
        email: email,
        password: password,
    }*/
function register()
{
    email = document.getElementById("email").value;
    password=document.getElementById("password").value;
    const user={
        email: email,
        password: password,
    }
    users.push(user);
    window.localStorage.setItem("user",JSON.stringify(users));
    let m1 = document.getElementById("message").innerHTML="User Registered successfully...";
}
function login()
{
    userEmail = document.getElementById("email").value;
    userPassword=document.getElementById("password").value;
    storedUser=JSON.parse(localStorage.getItem(users));
    for(i=0;i<storedUser.length;i++)
    {
        if(userEmail==storedUser[i].email && userPassword==storedUser[i].password)
        {
            let message = document.getElementById("message").innerHTML="Login successfully...";  
        }
    }
}