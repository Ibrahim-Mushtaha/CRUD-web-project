id = localStorage.length;
userForm.id.value = id;

function delete_user(obj){
    row = obj.parentElement.parentElement;
    id = row.firstElementChild.innerHTML;
    localStorage.removeItem(id);
    row.remove();
}

function edit_user(obj) {
    row = obj.parentElement.parentElement.children;
    userForm.id.value = row[0].innerHTML;
    userForm.username.value = row[1].innerHTML;
    userForm.email.value = row[2].innerHTML;
    userForm.password.value = row[3].innerHTML;
}

function update_user() {
var id = userForm.id.value;
var username = userForm.username.value;
    var email = userForm.email.value;
    var password = userForm.password.value;
    user = {
        id: id,
        username: username,
        email: email,
        password: password
    };
    localStorage.setItem(id, JSON.stringify(user));
    read_data();
}
function delete_all(){
    localStorage.clear();
    read_data();
}


function create_user() {
    event.preventDefault();
    var username = userForm.username.value;
    var email = userForm.email.value;
    var password = userForm.password.value;

    user = {
        id: id,
        username: username,
        email: email,
        password: password
    };

    tbody = document.getElementById("data");
    row = tbody.insertRow(-1);

    cell0 = row.insertCell(0);
    cell1 = row.insertCell(1);
    cell2 = row.insertCell(2);
    cell3 = row.insertCell(3);
    cell4 = row.insertCell(4);
    cell5 = row.insertCell(5);

    cell0.innerHTML = id;
    cell1.innerHTML = username;
    cell2.innerHTML = password;
    cell3.innerHTML = email;
    cell4.innerHTML = '<i class="fas fa-edit"></i>';
    cell5.innerHTML = `<span onclick="delete_user(this)"><i class="fas fa-trash"></i><span>`;

    localStorage.setItem(id, JSON.stringify(user));
    id++;
    userForm.id.value = id;

    userForm.username.value = null;
    userForm.email.value = null;
    userForm.password.value = null;

}


function read_data() {
    tbody = document.getElementById("data");
    tbody.innerHTML = null;



    for (i = 0; i < localStorage.length; i++) {
        row = tbody.insertRow(-1);
        cell0 = row.insertCell(0);
        cell1 = row.insertCell(1);
        cell2 = row.insertCell(2);
        cell3 = row.insertCell(3);
        cell4 = row.insertCell(4);
        cell5 = row.insertCell(5);
        user_data = JSON.parse(localStorage.getItem(localStorage.key(i)));

        cell0.innerHTML = user_data.id;
        cell1.innerHTML = user_data.username;
        cell2.innerHTML = user_data.email;
        cell3.innerHTML = user_data.password;
    cell4.innerHTML = `<span onclick="edit_user(this)"><i class="fas fa-edit"></i><span>`;
    cell5.innerHTML = `<span onclick="delete_user(this)"><i class="fas fa-trash"></i><span>`;

    }



}