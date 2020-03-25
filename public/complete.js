
function jobComplete(job) { 
  var user = localStorage.getItem('choreUser');


  if (job.childElementCount > 0) { 
    var replace = document.createElement('p');
    replace.setAttribute('onclick', 'jobComplete(this)');
    replace.setAttribute('class', job.innerText);
    replace.innerHTML = job.innerText;
    job.parentElement.replaceChild(replace, job);
  } else {
    var replace = document.createElement('p');
    replace.setAttribute('onclick', 'jobComplete(this)');
    replace.setAttribute('class', job.innerText);
    replace.innerHTML = job.innerHTML.strike();
    job.parentElement.replaceChild(replace, job);
  }

}



