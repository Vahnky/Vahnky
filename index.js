(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  

    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "08/17/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }

    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "New Track Out !";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());














const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show');}
      else{
        entry.target.classList.remove('show');
      }
    });
  });

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el))


















let cursorX = 0;
let cursorY = 0;

window.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('cursor');
    cursorX = e.pageX;
    cursorY = e.pageY;
    cursor.style.left = `${cursorX - cursor.offsetWidth / 2}px`;
    cursor.style.top = `${cursorY - cursor.offsetHeight / 2}px`;
});

setInterval(() => {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${cursorX + (Math.random() * 100 - 50)}px`;
    star.style.top = `${cursorY + (Math.random() * 100 - 50)}px`;
    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 800);
}, 100);



const buttons = document.querySelectorAll('a#titr')
buttons.forEach(btn => {
  btn.addEventListener('click', function(e){
    e.preventDefault();  // Empêche l'ouverture immédiate du lien
    let x = e.clientX - btn.getBoundingClientRect().left;
    let y = e.clientY - btn.getBoundingClientRect().top;

    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    ripples.classList.add('C');  // Ajoute la classe 'C' à la span

    this.appendChild(ripples);

    setTimeout(() => {
      ripples.remove();
    }, 200);

    // Ouvre le lien après que l'animation soit terminée (ici, après 1 seconde)
    setTimeout(() => {
      window.open(btn.getAttribute('href'), '_blank');
    }, 200);
  })
})




