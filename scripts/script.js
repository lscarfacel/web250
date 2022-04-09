// Clock
const deg = 6;
       const hr = document.querySelector(`#hr`);
       const mn = document.querySelector(`#mn`);
       const SC = document.querySelector(`#SC`);

       setInterval(()=>{
           let day =new Date();
           let hh = day.getHours() * 30;
           let mm = day.getMinutes() * deg;
           let ss = day.getSeconds() * deg;

           hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
           mn.style.transform = `rotateZ(${mm}deg)`;
           SC.style.transform = `rotateZ(${ss}deg)`;
       })
// validation
if (document.addEventListener) {
document.addEventListener("DOMContentLoaded", function() {
    load_home(null, 'pages/home.html');
}, false);
}

function load_home(e, file) {
(e || window.event).preventDefault(); // prevents anchor doing its thing
var con = document.getElementById('page-loader'), // assigns page-loader to con
    xhr = new XMLHttpRequest(); // assigns a new HTTP request to xhr
xhr.onreadystatechange = function(e) {
    if (xhr.readyState == 4 /*&& xhr.status == 200*/ ) {
    con.innerHTML = xhr.responseText;
    }
}

xhr.open("GET", file);
xhr.setRequestHeader('Content-type', 'text/html');
xhr.send();
}

// toggle menu
function toggle(){
    var sec = document.getElementById('sec');
    var nav = document.getElementById('navigation');
    sec.classList.toggle('active');
    nav.classList.toggle('active');
}
// get data 
function getData() {
  let firstName = document.getElementById('firstName').value, lastName = document.getElementById('lastName').value;
  let fullName = "Name: " + firstName + " " + lastName;
  let personal = "Personal Background: " + document.getElementById('personal').value, professional = "Professional Background: " + document.getElementById('professional').value;
  let academic = "Academic Background: " + document.getElementById('academic').value, platform = "Primary Computer Platform: " + document.getElementById('platform').value;
  let courses = "Courses I'm Taking, and why: " + document.getElementById('courses').value, funnyFact = "Interesting thing about me: " + document.getElementById('funnyFact').value;
  let funnyFact1 = "I'd also like to share: " + document.getElementById('funnyFact1').value;

  var answer = "Didn't pick a choice"
  let SelectedValue = document.querySelector( 'input[name="answer"]:checked');
  if(SelectedValue != null) {
      answer = ("Your answer was: " + SelectedValue.value);
      }

  let markedCheckbox = document.querySelectorAll('input[name="choices"]:checked');
  let output = [];
  markedCheckbox.forEach((checkbox) => {
  output.push(' ' + checkbox.value)
  });
  var finalChecks = ("You have a" + output + ' as a pet');
  let formData = [fullName, personal, professional, academic,
     platform, courses, funnyFact, funnyFact1, answer, finalChecks];
  showData(formData);
  }

function showData(formData) {
  clearLi = document.querySelectorAll('li');
  clearLi.forEach((li) => li.remove())

  for (let i = 0; i < formData.length; i++) {
      var newListNum = document.createElement('li');
      var newText = document.createTextNode(formData[i]);
      newListNum.appendChild(newText);
      var position = document.getElementsByTagName('ul')[0];
      position.appendChild(newListNum);
      }
  }