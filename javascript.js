function openTab(event, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "#f2f2f2";
    }

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.style.backgroundColor = "#ddd";
}

// Set the default tab to be opened
document.getElementById("cyberSecurity").style.display = "block";
document.getElementsByClassName("tablinks")[0].style.backgroundColor = "#ddd";

function submitForm() {
    var query = document.querySelector('.search-input').value;
    var searchMessage = document.getElementById('search-message');
    if (query.trim() === '') {
        searchMessage.style.display = 'block';
        return;
    } else {
        searchMessage.style.display = 'none';
      
         alert("Perform search operation here");
    }
}

const inputs = document.querySelectorAll(".input");
 
function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}
 
function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}
 
inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
 
document.getElementById("sendMessageButton").addEventListener("click", function() {
  document.getElementById("messageNotification").style.display = "block";
  setTimeout(function() {
    document.getElementById("messageNotification").style.display = "none";
  }, 5000);
});

document.getElementById("vision").innerText = "Our vision at Binary Brains is to lead the way in technological innovation, driving progress with precision and creativity.";
document.getElementById("mission").innerText = "Our mission is to empower individuals with the skills and knowledge needed to thrive in a digital world, fostering a culture of continuous learning and growth.";


function openTab(evt, serviceName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(serviceName).style.display = "block";
  evt.currentTarget.className += " active";
}


const tabs = document.querySelectorAll('.tabs input[name="tab"]');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('change', function() {
    tabContents.forEach(content => {
      if (content.id === 'content-' + this.id.slice(4)) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

