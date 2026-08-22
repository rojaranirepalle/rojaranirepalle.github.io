/* ===================================================
   AI Portfolio
   main.js
=================================================== */

document.addEventListener("DOMContentLoaded", () => {

    navbarScroll();

    smoothScroll();

    activeMenu();

    revealElements();

    animatedCounters();

    backToTop();

});


/* ==========================================
   NAVBAR SCROLL
========================================== */

function navbarScroll(){

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 50){

            navbar.classList.add("scrolled");

        }
        else{

            navbar.classList.remove("scrolled");

        }

    });

}


/* ==========================================
   SMOOTH SCROLL
========================================== */

function smoothScroll(){

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

}


/* ==========================================
   ACTIVE MENU
========================================== */

function activeMenu(){

    const sections=document.querySelectorAll("section");

    const navLinks=document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const top=section.offsetTop-120;

            const height=section.clientHeight;

            if(pageYOffset>=top){

                current=section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#"+current){

                link.classList.add("active");

            }

        });

    });

}


/* ==========================================
   SCROLL REVEAL
========================================== */

function revealElements(){

    const reveals=document.querySelectorAll(

        ".card,.project-card,.skill-card,.timeline-item,.contact-card"

    );

    function reveal(){

        const windowHeight=window.innerHeight;

        reveals.forEach(item=>{

            const top=item.getBoundingClientRect().top;

            if(top<windowHeight-120){

                item.classList.add("fade-up");

            }

        });

    }

    reveal();

    window.addEventListener("scroll",reveal);

}


/* ==========================================
   ANIMATED COUNTERS
========================================== */

function animatedCounters(){

    const counters=document.querySelectorAll(".counter");

    const speed=200;

    counters.forEach(counter=>{

        function update(){

            const target=+counter.getAttribute("data-target");

            const count=+counter.innerText;

            const increment=target/speed;

            if(count<target){

                counter.innerText=Math.ceil(count+increment);

                setTimeout(update,15);

            }
            else{

                counter.innerText=target;

            }

        }

        update();

    });

}


/* ==========================================
   BACK TO TOP BUTTON
========================================== */

function backToTop(){

    const btn=document.getElementById("backToTop");

    if(!btn) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>400){

            btn.classList.add("show");

        }
        else{

            btn.classList.remove("show");

        }

    });

    btn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}


/* ==========================================
   LOADING ANIMATION
========================================== */

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});