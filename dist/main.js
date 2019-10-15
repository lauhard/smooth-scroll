  let options = {
    rootMargin: "-50% 0px -50% 0px ",
    threshold: 0
  }
  
  let sections = document.querySelectorAll('.sec');
  const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(ent => {
        console.log(ent.target.className + " " + ent.isIntersecting);
        if(!ent.isIntersecting) {
            document.querySelector(`[data-sec="${ent.target.classList[1]}"]`).classList.remove('active');
        }else{
            document.querySelector(`[data-sec="${ent.target.classList[1]}"]`).classList.add('active');
            return
        }
    });
  },options);

  sections.forEach(section => {
    observer.observe(section);
  });
  
  