
    //this displays the monthly jobs
    function monthly() { 
      console.log('monthly() called');
      //show the correct table/list
      document.getElementById('daily').style.display = "none";
      document.getElementById('week').style.display  = "none";
      document.getElementById('month').style.display = "initial";

      document.body.style.backgroundColor = "rgb(155, 226, 240)";

      //get the assignments from the database
      var xmlHttpRequest = new XMLHttpRequest();
      xmlHttpRequest.onreadystatechange = function() {
        if ( xmlHttpRequest.readyState == XMLHttpRequest.DONE && xmlHttpRequest.status == 200 ) {

          //add list item to the DOM with AJAX using the assignments from the database  
          console.log('inside if statement');
          var data = JSON.parse(xmlHttpRequest.responseText);

          //remove previous data
          for (var i = monthList.children.length; i > 1; i--) {
            monthList.removeChild(monthList.lastElementChild);
          }

          //loop through data and add a button to the list
          for (var i = 0; i < data.date.length; i++) { 
            var item = document.createElement('li');
            item.innerHTML = data.date[i] + ": " + data.job[10 + i].jobname + " - ";
            var spanName = document.createElement('span');
            spanName.innerHTML = data.member[i+3].firstname;
            spanName.setAttribute("class", data.member[i+3].firstname);
            item.appendChild(spanName);

            monthList.appendChild(item);
          }
        }
      };

      //the json is from the database here
      xmlHttpRequest.open('GET', 'https://nate-node.herokuapp.com/monthly', true);
      xmlHttpRequest.send();
    }

