
    // this function uses AJAX request get the database of members, and populates buttons for each member  
    function daily() { 
      console.log('daily() called');
      //show the correct table/list
      document.getElementById('daily').style.display = "initial";
      document.getElementById('week').style.display  = "none";
      document.getElementById('month').style.display = "none";
      document.getElementById('jobs').innerHTML = "";

      document.body.style.backgroundColor = "lightblue";

      //get the assignments from the database
      var xmlHttpRequest = new XMLHttpRequest();
      xmlHttpRequest.onreadystatechange = function() {
        if ( xmlHttpRequest.readyState == XMLHttpRequest.DONE && xmlHttpRequest.status == 200 ) {

          //manipulate the DOM with the member names 
          console.log('inside daily if statement');
          //turn json into an object
          var data = JSON.parse(xmlHttpRequest.responseText);

          //remove previous data
          do { 
            dailyList.removeChild(dailyList.lastElementChild);
          } while (dailyList.children.length);

          //loop through data and add a button to the list
          for (var i = 0; i < data.member.length - 1; i++) { 
            var item = document.createElement('li');
            var iButton = document.createElement('button');
            iButton.innerHTML = data.member[i].firstname;
            iButton.setAttribute("onclick", 'selectMember("' + data.member[i].firstname + '")');
            iButton.setAttribute("class", data.member[i].firstname);
            item.appendChild(iButton);

            dailyList.appendChild(item);
          }
        }
      };

      //the json is from the database here
      xmlHttpRequest.open('GET', 'https://nate-node.herokuapp.com/daily', true);
      xmlHttpRequest.send();
    }
