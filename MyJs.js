var btnsubmit = document.forms ["register-form"] ["btn-submit"]
btnsubmit.onclick = function () {
    var txtusername = document.forms["register-form"] ["username"];
    var msgusername = txtusername.nextElementSibling;
    if (txtusername == null || txtusername.value.length == 0) {
        msgusername.innerHTML = "* Vui lòng nhập tên của bạn.";
        msgusername.classList.remove("hidden-text");
    }
    else if (txtusername.value.length < 5) {
        msgusername.innerHTML = "* Tên của bạn quá ngắn.";
        msgusername.classList.remove("hidden-text");
    }
    else if (txtusername.value.length > 20) {
        msgusername.innerHTML = "* Tên của bạn quá dài.";
        msgusername.classList.remove("hidden-text");
    } else {
        msgusername.innerHTML = "* Tên hợp lệ.";
        msgusername.classList.remove("hidden-text");
        msgusername.classList.remove("danger-text");
        msgusername.classList.add("succes-text");
    }
    //pass
    var txtPassword = document.forms["register-form"] ["password"];
    var msgpassword = txtPassword.nextElementSibling;
    if (txtPassword == null || txtPassword.value.length == 0) {
        msgpassword.innerHTML = "* Không được để trống mật khẩu.";
        msgpassword.classList.remove("hidden-text");
    }else {
        msgpassword.innerHTML = "* Mật khẩu hợp lệ.";
        msgpassword.classList.remove("hidden-text");
        msgpassword.classList.add("succes-text");
    }
//fullname
    var txtfullname = document.forms["register-form"] ["fullname"];
    var msgfullname = txtfullname.nextElementSibling;
    if (txtfullname == null || txtfullname.value.length == 0) {
        msgfullname.innerHTML = "* Vui lòng nhập tên của bạn.";
        msgfullname.classList.remove("hidden-text");
    }
    else if (txtfullname.value.length < 5) {
        msgfullname.innerHTML = "* Tên đầy đủ của bạn quá ngắn.";
        msgfullname.classList.remove("hidden-text");
    }
    else if (txtfullname.value.length > 30) {
        msgfullname.innerHTML = "* Tên đầy đủ của bạn quá dài.";
        msgfullname.classList.remove("hidden-text");
    } else {
        msgfullname.innerHTML = "* Tên hợp lệ.";
        msgfullname.classList.remove("hidden-text");
        msgfullname.classList.remove("danger-text");
        msgfullname.classList.add("succes-text");
    }
    //Email
    var txtEmail = document.forms["register-form"]["email"];
    var msgEmail = txtEmail.nextElementSibling;
    var a=txtEmail.value.includes("@");
    // if (txtEmail == null || txtEmail.value.length == 0 && a==false ) {
    //     msgEmail.innerHTML = "* Không để trống Email.";s
    //     msgEmail.classList.remove("hidden-text");
    //}
     if (a==false || txtEmail == null || txtEmail.value.length == 0){
        msgEmail.innerHTML = "* Email không để trống và phải có kí tự (@) !";
        msgEmail.classList.remove("hidden-text");
    }
    else{
        msgEmail.innerHTML = "* Email hợp lệ.";
        msgEmail.classList.remove("hidden-text");
        msgEmail.classList.remove("danger-text");
        msgEmail.classList.add("succes-text");

    }
}
var btnreset =document.forms ["register-form"] ["btn-reset"]
btnreset.onclick = function () {
    var txtusername = document.forms["register-form"] ["username"];
    var msgusername = txtusername.nextElementSibling;
    msgusername.classList.add("hidden-text");
    var txtPassword = document.forms["register-form"] ["password"];
    var msgpassword = txtPassword.nextElementSibling;
    msgpassword.classList.add("hidden-text");
    var txtfullname = document.forms["register-form"] ["fullname"];
    var msgfullname = txtfullname.nextElementSibling;
    msgfullname.classList.add("hidden-text");
    var txtEmail = document.forms["register-form"]["email"];
    var msgEmail = txtEmail.nextElementSibling;
    msgEmail.classList.add("hidden-text");
}