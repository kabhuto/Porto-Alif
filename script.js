// Navbar Shadow

window.addEventListener('scroll', () => {

    const nav = document.querySelector('nav');

    if(window.scrollY > 50){

        nav.style.boxShadow =
        '0 5px 20px rgba(0,0,0,.3)';

    }else{

        nav.style.boxShadow = 'none';

    }

});


// Scroll Animation

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add('show');

        }

    });

},{
    threshold:0.1
});

document.querySelectorAll(
'.stat,.card,.research-card,.project-card,.timeline-item'
).forEach((el)=>{

    el.classList.add('hidden');

    observer.observe(el);

});


// Active Navbar

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll',()=>{

    let current='';

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 150;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute('id');

        }

    });

    navLinks.forEach(link=>{

        link.style.color='white';

        if(
            link.getAttribute('href') ===
            `#${current}`
        ){

            link.style.color='#38bdf8';

        }

    });

});