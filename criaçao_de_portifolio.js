const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const savedTheme = localStorage.getItem('theme');

if(savedTheme) 
{
    body.classList.add(savedTheme);
}

toggleButton.addEventListener('click', () => 
{
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) 
    {
        localStorage.setItem('theme', 'dark-mode');
    } 
    else 
    {
        localStorage.removeItem('theme');
    }


});



window.addEventListener("load", () => {
    document.querySelectorAll(".fade-in").forEach((element) => {
      element.style.opacity = 1;
      element.style.transition = "opacity 1.5s";
    });
  });



  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  

  const objetivoText = "Trabalhar em equipe, colaborando com a empresa e o crescimento profissional...";
  let i = 0;
  function typeEffect() {
    if (i < objetivoText.length) {
      document.getElementById("objetivo").textContent += objetivoText.charAt(i);
      i++;
      setTimeout(typeEffect, 50);
    }
  }
  window.addEventListener("load", typeEffect);
  
