var users = [
    {
        username: "fadi_sharif@iug",
        password: "123",
        permetion: "iug"
    },
    {
        username: "ali_ali@std",
        password: "abc",
        permetion: "std"
    },
    {
        username: "ahmed_mohammed@std",
        password: "123",
        permetion: "std"
    },
    ]






function Login() {
     event.preventDefault();
    var username = myForm.username.value;
    var password = myForm.password.value;

    var val = check_user(username, password, users);
    if (val != false) {
        var date = new Date();
        exp_date = date.getTime() + 10 * 24 * 60 * 60 * 1000;
        date.setTime(exp_date);
        document.cookie = "username=" + val.username + ";expires=" + date;
        document.cookie = "permetion=" + val.permetion + ";expires=" + date;
        if (val.permetion == "iug") {
            location.href = "Teacher.html";
        } else if (val.permetion == "std") {
            location.href = "Student.html";
        }
    } else {
        alert("username must contant '@' and '_'");
    }
    
}
    
    
    
//    event.preventDefault();
//    var username = myForm.username.value;
//    var password = myForm.password.value;
//
//    var val = check_user(username, password, users);
//    if (val != false) {
//        var date = new Date();
//        exp_date = date.getTime() + 10 * 24 * 60 * 60 * 1000;
//        date.setTime(exp_date);
//        document.cookie = "username=" + val.username + ";expires=" + date;
//        document.cookie = "permetion=" + val.permetion + ";expires=" + date;
//       
//      
//        
//        if(val.username.split('@'))
//        if(val.username.split('_')){
//          
//             if (val.permetion == "iug") {
//            location.href = "Teacher.html";
//        } else if (val.permetion == "std") {
//            location.href = "Student.html";
//        }else{
//            
//        }alert("username must contant '@' and '_'")
//            
//       }
    
//        }

function check_user(username, password, users) {
    for (i in users) {
        var user = users[i];
        if (user.username == username && user.password == password) {
            return user;
        }
    }
    return false;
}