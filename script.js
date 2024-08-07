let sections = document.querySelectorAll('.section-heading-wrap');
let navLinks = document.querySelectorAll('nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            // console.log(id)
            // if(id == 'home') {
            //     navLinks.forEach(links => {
            //         links.classList.remove('activate');
            // })};
            navLinks.forEach(links => {
                links.classList.remove('activate');
                if(id != 'home'){
                    document.querySelector('nav a[onclick*= ' + id + ']').classList.add('activate');
                }
        });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};

const scriptURL = 'https://script.google.com/macros/s/AKfycbz0m6UVtt5BqoNSPF3aqJenNIHrj0fBit0M3_fLTtyAFVRG6Eb-lmRbwas5cYzgW7pPaA/exec'
const form = document.forms['submit-to-google-sheet']


form.addEventListener('submit', e => {
    e.preventDefault()
    console.log(new FormData(form))
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            alert("Message Sent successfully!")
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
});


(function () {
    
    $('h1').each(
    function () {
        //Extract text from html, and attach it to "Txt" variable.
        var Txt = $(this).text();
        console.log(Txt)
        //Empty var-string waiting for loop.
        var Gtxt = '';
        //Loop through text to add <span id="green> on every letter.
        for (i in Txt) {
            //add letter by letter to Gtxt ( <span id="green"> letter </span> )
            Gtxt = (Gtxt + '<span id="change">' + Txt[i] + '</span>');

            //IF for Newline on period.
            if (Txt[i] == '.') {
                Gtxt = (Gtxt + '<br>');
            }
        }
        //Add processed text to Html $('h2')
        $(this).html(Gtxt);
    });
});

function scrollSmoothTo(elementId) {
    var element = document.getElementById(elementId);
    element.scrollIntoView({ block: 'start',  behavior: 'smooth' });
}

// Animation Style
window.addEventListener('DOMContentLoaded', (event) => {
    particlesJS("particles-js", {
        particles: {
        number: {
            value: 121,
            density: {
            enable: true,
            value_area: 631.3280775270874
            }
        },
        color: {
            value: "#fff"
        },
        shape: {
            type: "circle",
            stroke: {
            width: 0,
            color: "#000000"
            },
            polygon: {
            nb_sides: 5
            },
            image: {
            src: "img/github.svg",
            width: 100,
            height: 100
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
            }
        },
        size: {
            value: 10,
            random: true,
            anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
            }
        },
        line_linked: {
            enable: false,
            distance: 500,
            color: "#ffffff",
            opacity: 0.3,
            width: 2
        },
        move: {
            enable: true,
            speed: 1.75,
            direction: "bottom",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
            }
        }
        },
        interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
            enable: true,
            mode: "bubble"
            },
            onclick: {
            enable: true,
            mode: "repulse"
            },
            resize: true
        },
        modes: {
            grab: {
            distance: 400,
            line_linked: {
                opacity: 0.4
            }
            },
            bubble: {
            distance: 400,
            size: 7,
            duration: 0.3,
            opacity: 1,
            speed: 2
            },
            repulse: {
            distance: 200,
            duration: 0.4
            },
            push: {
            particles_nb: 4
            },
            remove: {
            particles_nb: 2
            }
        }
        },
        retina_detect: true
    });
});
  
  