AOS.init();



var typed = new Typed('#element', {
 strings: [
 '<i class="parrafoInicial">Soy Michael Camacho, un desarrollador de software dedicado a hacer del mundo un lugar mejor, una línea de código a la vez. Mi pasión por el desarrollo de software se basa en mi amor por la resolución de problemas y la creación de soluciones innovadoras. ¡Gracias por su atención!</i>'
 ],

 typeSpeed: 20
});



document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.getElementById("scrollButton");
    scrollButton.addEventListener("click", function () {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });
    });
});

// Animacion parrafo sobre mí



var typed = new Typed('#pSobremi', {
    strings: [
    '<i class="parrafoInicial1">Estudiante de Análisis y Desarrollo de Software con enfoque en desarrollo web, diseño de interfaces atractivas y funcionales, y creación de aplicaciones interactivas. Habilidades destacadas en HTML, CSS, JavaScript y bases de datos. Apasionado por explorar nuevas tecnologías y abierto a nuevos desafíos. Estoy emocionado por seguir aprendiendo y creciendo en un campo en constante evolución. Mi objetivo es impulsar la innovación y obtener resultados destacados en proyectos desafiantes.</i>'
    ],
   
    typeSpeed: 30
   });

   document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.getElementById("scrollButton");
    scrollButton.addEventListener("click", function () {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });
    });
});
clock();

function clock() {
  const date = new Date();

  const hours = ((date.getHours() + 11) % 12 + 1);
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  
  const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;
  
  document.querySelector('.hour').style.transform = `rotate(${hour}deg)`
  document.querySelector('.minute').style.transform = `rotate(${minute}deg)`
  document.querySelector('.second').style.transform = `rotate(${second}deg)`
}

setInterval(clock, 1000);


// DESCARGA BOTON CV
document.querySelectorAll('.botonSobremi1').forEach(botonSobremi1 => {

    let duration = 3000,
        svg = botonSobremi1.querySelector('svg'),
        svgPath = new Proxy({
            y: null,
            smoothing: null
        }, {
            set(target, key, value) {
                target[key] = value;
                if(target.y !== null && target.smoothing !== null) {
                    svg.innerHTML = getPath(target.y, target.smoothing, null);
                }
                return true;
            },
            get(target, key) {
                return target[key];
            }
        });

    botonSobremi1.style.setProperty('--duration', duration);

    svgPath.y = 20;
    svgPath.smoothing = 0;

    botonSobremi1.addEventListener('click', e => {

        if (botonSobremi1.classList.contains('loading')) {
            return;
        }

        e.preventDefault();

        botonSobremi1.classList.add('loading');

        gsap.to(svgPath, {
            smoothing: .3,
            duration: duration * .065 / 1000
        });

        gsap.to(svgPath, {
            y: 12,
            duration: duration * .265 / 1000,
            delay: duration * .065 / 1000,
            ease: Elastic.easeOut.config(1.12, .4)
        });

        setTimeout(() => {
            svg.innerHTML = getPath(0, 0, [
                [3, 14],
                [8, 19],
                [21, 6]
            ]);
        }, duration / 2);

        // Agregamos un retraso para dar tiempo a la animación
        setTimeout(() => {
            window.location.href = botonSobremi1.getAttribute('href');
        }, duration);

    });

});

function getPoint(point, i, a, smoothing) {
    let cp = (current, previous, next, reverse) => {
            let p = previous || current,
                n = next || current,
                o = {
                    length: Math.sqrt(Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)),
                    angle: Math.atan2(n[1] - p[1], n[0] - p[0])
                },
                angle = o.angle + (reverse ? Math.PI : 0),
                length = o.length * smoothing;
            return [current[0] + Math.cos(angle) * length, current[1] + Math.sin(angle) * length];
        },
        cps = cp(a[i - 1], a[i - 2], point, false),
        cpe = cp(point, a[i - 1], a[i + 1], true);
    return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
}

function getPath(update, smoothing, pointsNew) {
    let points = pointsNew ? pointsNew : [
            [4, 12],
            [12, update],
            [20, 12]
        ],
        d = points.reduce((acc, point, i, a) => i === 0 ? `M ${point[0]},${point[1]}` : `${acc} ${getPoint(point, i, a, smoothing)}`, '');
    return `<path d="${d}" />`;
}


// ANIMACION CARRUSEL PROYECTOS

// const carousel = document.querySelector(".carousel");
// const prevButton = document.querySelector(".prev");
// const nextButton = document.querySelector(".next");

// let currentIndex = 0;
// const itemWidth = carousel.querySelector(".carousel-item").clientWidth;

// prevButton.addEventListener("click", () => {
//   if (currentIndex > 0) {
//     currentIndex--;
//     carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
//   }
// });

// nextButton.addEventListener("click", () => {
//   if (currentIndex < carousel.children.length - 1) {
//     currentIndex++;
//     carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
//   }
// });



// CAMBIAR COLORES

function activarPanel() {
    const contenedor = document.querySelector(".cont-colores");
    const boton = document.querySelector(".open-panel");

    contenedor.classList.toggle("active");
    boton.classList.toggle("active");
}

var link = document.getElementById("fileCss");

function primario() {
    link.href = "css/Styles.css";
}

function secundario() {
    link.href = "css/Styles-secundario.css";
}

function terciario() {
    link.href = "css/Styles-terciario.css";
}




