
var user_list = getArr("user_list");

var password_list = getArr("password_list");

var score_list = getArr("score_list");

//处理用户登录
//获取登录按钮
var login_btn = document.querySelector('#sign_in');
login_btn.addEventListener('click', login);

function login() {
    //拿到用户的用户名 
    var ele = document.querySelector("#username");
    var input_username = ele.value;
    //拿到用户的密码

    ele = document.querySelector("#password");
    var input_password = ele.value;
    
   //判断用户是否存在
    if (user_list.indexOf(input_username) != -1) {
      //如果用户存在
      //则判断密码是否正确
        index = user_list.indexOf(input_username);
        var target_password = password_list[index];
        if (input_password == target_password) {
            localStorage.setItem("username", input_username);
            alert("登录成功");
          
            location.reload();
        } else {
            alert("登录失败，密码不对");
        }
    } else {
        alert('用户不存在， 请注册！')
    }
}
//处理用户注册
//获取注册按钮

var regist_btn = document.querySelector('#sign_up');
regist_btn.addEventListener('click', regist);

//用户注册逻辑
function regist() {
    //拿到用户的用户名
    var ele = document.querySelector("#username");
    var input_username = ele.value;
    if (input_username == "" || input_username == null) {
        alert("请输入你的用户名!");
        return ;
    }
    //拿到用户密码
 
    ele = document.querySelector("#password");
    var input_password = ele.value;
    if (input_password == "" || input_password == null) {
        alert("请输入你的密码!");
        return ;
    }
    //判断用户是否存在
    if (user_list.indexOf(input_username) == -1) {
        
        user_list.push(input_username);
        password_list.push(input_password);
        saveArr("user_list", user_list);
        saveArr("password_list", password_list);
        alert("注册成功");
    } else {
        alert('用户已存在， 请登录！')
    }
}

//将数组存入localstorage
function saveArr(item, arr) {
    var arrStr = JSON.stringify(arr);
    localStorage.setItem(item, arrStr);
}

// 将数组从 localstorage 中获取
function getArr(item) {
    var json_str = localStorage.getItem(item);
    return JSON.parse(json_str) || [];
}