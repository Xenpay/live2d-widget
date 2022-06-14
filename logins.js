<!--hide



var users = 
[
  
  {
    user: "xenpay",
    pass: "kimak309" 
  },
  {
    user: "admin1",
    pass: "12345"
  }
]

function regis()
{
  var userReg = document.reg.nameReg.value;
  var passReg = document.reg.passReg.value;
  
  users.push({
    user: userReg,
    pass: passReg
  });
  
  alert("successfully registered: " + userReg);
}

function validate()
{
  //name = " " allows us to use dot notation like this
  var username = document.login.username.value;
  var password = document.login.password.value;
  for (var i = 0; i < users.length; i++)
  {
    if(username == users[i].user)
    {
      if(password == users[i].pass)
      {
        alert("youre in!");
        window.location = "../index.html";
        break;
      }
      else{
        alert("password incorrect");
        break;
      }
    }
    
    if(i == users.length - 1)
    {
      alert("username not found");
    }
  }
}
//-->
