
function checkLogin() {
  if (localStorage.getItem('choreUser')) {
    document.getElementById('login').style.display = "none";
    document.getElementById('swiper').style.visibility = "initial";
  } else { 
    document.getElementById('swiper').style.visibility = "hidden";
  }
}

function assign(member) { 
  localStorage.setItem('choreUser', member);
  checkLogin();
}



