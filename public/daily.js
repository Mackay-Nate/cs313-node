
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




    
    function selectMember(dropdown) {
      console.log("received request for selectMember " + dropdown);
  
      switch (dropdown) { 
        case "Nate":
          dailyJobs(1, dropdown);
          break;
        case "Jen":
          dailyJobs(2, dropdown);
          break;
        case "grandpa":
          dailyJobs(4, dropdown);
          break;
        case "grandma":
          dailyJobs(3, dropdown);
          break;
        case "Natalie":
          dailyJobs(5, dropdown);  
          break;
        case "Ava":
          dailyJobs(6, dropdown);
          break;
        case "Corbin":
          dailyJobs(7, dropdown);
          break;
      }
    }
  
    function dailyJobs(nameId, name) { 
      //get the assignments from the database
      var xmlHttpRequest = new XMLHttpRequest();
      xmlHttpRequest.onreadystatechange = function() {
        if (xmlHttpRequest.readyState == XMLHttpRequest.DONE && xmlHttpRequest.status == 200 ) {
  
          console.log('inside dailyJobs if statement');
          var data = JSON.parse(xmlHttpRequest.responseText);
          day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
          message = "<h3>" + name + "'s Jobs</h3>";
  
          //looping throught the days of the week
          for (var i = 1; i < 7; i ++) {
            temp    = "";
            if (data.breakfast[i].nameid == nameId) { 
              temp += data.job[5].jobname; 
            }
            if (data.empty[i].nameid == nameId) { 
              if (temp != "") {temp += ", ";}
              temp += data.job[14].jobname; 
            }
            if (data.play[i].nameid == nameId) { 
              if (temp != "") {temp += ", ";}
              temp += data.job[15].jobname; 
            }
            if (data.family[i].nameid == nameId) { 
              if (temp != "") {temp += ", ";}
              temp += data.job[0].jobname; 
            }
            if (data.outside[i].nameid == nameId) { 
              if (temp != "") {temp += ", ";}
              temp += data.job[16].jobname; 
            }
            if (data.bedroom[i].nameid == nameId) { 
              if (temp != "") {temp += ", ";}
              temp += data.job[2].jobname; 
            }
            if (data.dinner[i].nameid == nameId) { 
              if (temp != "") {temp += ", ";}
              temp += data.job[4].jobname; 
            }
            if (data.clear[i].nameid == nameId) { 
              if (temp != "") {temp += ", ";}
              temp += data.job[3].jobname; 
            }
            if (data.wash[i].nameid == nameId) { 
              if (temp != "") {temp += ", ";}
              temp += data.job[17].jobname; 
            }
  
            // only add the day if a job exists that day
            if (temp) {
              message += day[i] + ": " + temp + "<br>";
            }
          }
  
          document.getElementById('jobs').innerHTML = message;
        }
      };
  
      //the json is from the database here
      xmlHttpRequest.open('GET', 'https://nate-node.herokuapp.com/week', true);
      xmlHttpRequest.send();
    }
  