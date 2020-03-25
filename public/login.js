
function checkLogin() {
  if (localStorage.getItem('choreUser')) {
    document.getElementById('login').style.display = "none";
    document.getElementById('swiper').style.visibility = "initial";
  } else { 
    document.getElementById('swiper').style.visibility = "hidden";
  }
}

function assign() { 
  checkLogin();
}

function showPass(user) { 
  document.getElementById('password').style.display = "initial";
  user.style.color = "blue";
  localStorage.setItem('choreUser', user.innerText);
}


