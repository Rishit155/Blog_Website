let toggle = document.querySelector("#header .toggle-button");
let collapse = document.querySelectorAll("#header .collapse");

toggle.addEventListener('click' , function(){
    collapse.forEach(col => col.classList.toggle("collapse-toggle"));
})
// Sticky Navigation
window.onscroll = function(){ myFunction()};

// get the current value 
let navbar = document.getElementById("header");

// get the navbar position
let sticky = navbar.offsetTop;

// sticky function
function myFunction(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    }
}

const form = document.querySelector('#comment-form');
const commentsList = document.querySelector('#comments ul');
const storageKey = 'comments';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const comment = document.querySelector('#comment').value.trim();
  
  if (!name || !email || !comment) {
    alert('Please fill in all fields');
    return;
  }
  
  const commentObj = { name, email, comment };
  const comments = JSON.parse(localStorage.getItem(storageKey)) || [];
  comments.push(commentObj);
  localStorage.setItem(storageKey, JSON.stringify(comments));
  
  displayComments();
  form.reset();
});

function displayComments() {
  commentsList.innerHTML = '';
  
  const comments = JSON.parse(localStorage.getItem(storageKey)) || [];
  comments.forEach((comment) => {
    const li = document.createElement('li');
    const strong = document.createElement('strong');
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    const img = document.createElement('img');
    img.src = "./assets/profile.png";
    p2.appendChild(strong);
    p2.appendChild(p);
    strong.textContent = `${comment.name}`;
    p.textContent = comment.comment;
    li.appendChild(img);
    li.appendChild(p2);
    
    commentsList.appendChild(li);
    //localStorage.clear(); to clear the local storage
  });
}

displayComments();
