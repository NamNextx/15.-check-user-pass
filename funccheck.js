/*
Yêu cầu người dùng nhập tên từ bàn phím.

Nếu tên nhập vào là Admin thì yêu cầu nhập mật khẩu.
    Nếu mật khẩu là TheMaster thì in ra chuỗi Welcome.
    Nếu mật khẩu nhập vào là null in ra chuỗi Canceled.
    Còn lại in ra chuỗi Wrong password.
Nếu tên nhập vào là null in ra chuỗi canceld.
Còn lại in ra chuỗi “I don’t know you"*/

function longin() {
    var user= document.getElementById('iduser').value;
    var pass= document.getElementById('idpass').value;

    if(user=="Admin")
    {
        if(pass=="TheMaster") alert("Welcome");

        else if(pass== "") alert("Canceled")
        else alert("Wrong password")
    }
    else if (user=="")
    {
        alert("Nhap cho doang hoang");
    }
    else alert("I don't know you");
}