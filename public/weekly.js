    // this function fills in the table for the Weekly job assignments
    function week() { 
      console.log('week() called');
      //show the correct table/list
      document.getElementById('daily').style.display = "none";
      document.getElementById('week').style.display  = "initial";
      document.getElementById('month').style.display = "none";

      document.body.style.backgroundColor = "lightskyblue";

      //get the assignments from the database
      var xmlHttpRequest = new XMLHttpRequest();
      xmlHttpRequest.onreadystatechange = function() {
        if (xmlHttpRequest.readyState == XMLHttpRequest.DONE && xmlHttpRequest.status == 200 ) {

          //manipulate the DOM with the assignments 
          console.log('inside if statement');
          var data = JSON.parse(xmlHttpRequest.responseText);

          //only populate if data doesn't already exist
          if (!dinner.children[4]) { 

            //first row id=breakfast
            var job = document.createElement('td');
            job.innerHTML = data.job[5].jobname;
            breakfast.appendChild(job);

            // create the days of the week for breakfast
            for (var i = 0; i < data.breakfast.length; i++) { 
              var day = document.createElement('td');
              day.innerHTML = data.member[data.breakfast[i].nameid - 1].firstname;
              day.setAttribute("class", data.member[data.breakfast[i].nameid -1].firstname);
              breakfast.appendChild(day);
            }

            //second row id=empty
            var job = document.createElement('td');
            job.innerHTML = data.job[14].jobname;
            empty.appendChild(job);

            // create the days of the week for empty
            for (var i = 0; i < data.empty.length; i++) { 
              var day = document.createElement('td');
              day.innerHTML = data.member[data.empty[i].nameid - 1].firstname;
              day.setAttribute("class", data.member[data.empty[i].nameid -1].firstname);
              empty.appendChild(day);
            }

            // row id=play
            var job = document.createElement('td');
            job.innerHTML = data.job[15].jobname;
            play.appendChild(job);

            // create the days of the week for play 
            for (var i = 0; i < data.play.length; i++) { 
              var day = document.createElement('td');
              day.innerHTML = data.member[data.play[i].nameid - 1].firstname;
              day.setAttribute("class", data.member[data.play[i].nameid -1].firstname);
              play.appendChild(day);
            }

            // row id=family
            var job = document.createElement('td');
            job.innerHTML = data.job[0].jobname;
            family.appendChild(job);

            // create the days of the week for family 
            for (var i = 0; i < data.family.length; i++) { 
              var day = document.createElement('td');
              day.innerHTML = data.member[data.family[i].nameid - 1].firstname;
              day.setAttribute("class", data.member[data.family[i].nameid -1].firstname);
              family.appendChild(day);
            }

            // row id=outside
            var job = document.createElement('td');
            job.innerHTML = data.job[16].jobname;
            outside.appendChild(job);

            // create the days of the week for outside jobs
            for (var i = 0; i < data.outside.length; i++) { 
              var day = document.createElement('td');
              day.innerHTML = data.member[data.outside[i].nameid - 1].firstname;
              day.setAttribute("class", data.member[data.outside[i].nameid -1].firstname);
              outside.appendChild(day);
            }

            // row id=bedroom
            var job = document.createElement('td');
            job.innerHTML = data.job[2].jobname;
            bedroom.appendChild(job);

            // create the days of the week for bedroom 
            for (var i = 0; i < data.bedroom.length; i++) { 
              var day = document.createElement('td');
              day.innerHTML = data.member[data.bedroom[i].nameid - 1].firstname;
              day.setAttribute("class", data.member[data.bedroom[i].nameid -1].firstname);
              bedroom.appendChild(day);
            }

            // row id=together
            var job = document.createElement('td');
            job.innerHTML = "Complete together";
            together.appendChild(job);

            var sun = document.createElement('td');
            sun.innerHTML = "";
            together.appendChild(sun);

            var mon = document.createElement('td');
            mon.innerHTML = data.job[1].jobname;
            together.appendChild(mon);

            var tue = document.createElement('td');
            tue.innerHTML = data.job[2].jobname;
            together.appendChild(tue);

            var wed = document.createElement('td');
            wed.innerHTML = data.job[0].jobname ;
            together.appendChild(wed);

            var thur = document.createElement('td');
            thur.innerHTML = "Special Projects";
            together.appendChild(thur);

            var fri = document.createElement('td');
            fri.innerHTML = data.job[2].jobname;
            together.appendChild(fri);

            var sat = document.createElement('td');
            sat.innerHTML = "";
            together.appendChild(sat);

            // row id=dinner
            var job = document.createElement('td');
            job.innerHTML = data.job[4].jobname;
            dinner.appendChild(job);

            // create the days of the week for dinner
            for (var i = 0; i < data.dinner.length; i++) { 
              var day = document.createElement('td');
              day.innerHTML = data.member[data.dinner[i].nameid - 1].firstname;
              day.setAttribute("class", data.member[data.dinner[i].nameid -1].firstname);
              dinner.appendChild(day);
            }

            // row id=clear
            var job = document.createElement('td');
            job.innerHTML = data.job[3].jobname;
            clear.appendChild(job);

            // create the days of the week for clear
            for (var i = 0; i < data.clear.length; i++) { 
              var day = document.createElement('td');
              day.innerHTML = data.member[data.clear[i].nameid - 1].firstname;
              day.setAttribute("class", data.member[data.clear[i].nameid -1].firstname);
              clear.appendChild(day);
            }

            // row id=washDishes
            var job = document.createElement('td');
            job.innerHTML = data.job[17].jobname;
            washDishes.appendChild(job);

            // create the days of the week for washDishes
            for (var i = 0; i < data.wash.length; i++) { 
              var day = document.createElement('td');
              day.innerHTML = data.member[data.wash[i].nameid - 1].firstname;
              day.setAttribute("class", data.member[data.wash[i].nameid -1].firstname);
              washDishes.appendChild(day);
            }

          }
        }
      };

      //the json is from the database here
      xmlHttpRequest.open('GET', 'https://nate-node.herokuapp.com/week', true);
      xmlHttpRequest.send();
    }
