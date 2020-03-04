
function checkLogin() {
  if (localStorage.getItem('choreUser')) {
    document.getElementById('login').style.display = "none";
  }
}

function assign(member) { 
  localStorage.setItem('choreUser', member);
  checkLogin();
}



