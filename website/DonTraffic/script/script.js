
new Vue ({
    el: '#sectionsSkills',
    data: {
        
    },
    methods: {
        funBlockSkill(value, num) {
          let elem = $('#example' + value);
          if (num == false) {
            elem.css('width', '100vw');
            elem.css('height', '100vh');
            elem.css('border-radius', '0px');
            elem.css('z-index', '10');
          } else {
            elem.css('width', '0vw');
            elem.css('height', '0vh');
            elem.css('border-radius', '50%');
            elem.css('z-index', '-10');
          }
        },
    },
});

// 3d three.js
window.onload = function () {
    var width = window.innerWidth + 400;
    var height = window.innerHeight + 400;

    var canvas = document.getElementById('canvas');
    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);

    var renderer = new THREE.WebGLRenderer({canvas: canvas, alpha: true, antialias: true});
    renderer.setClearColor(0x000000, 0);

    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, -2000);
    camera.position.set(0, 0, 24);

    const light = new THREE.DirectionalLight(0xffffff, 0.4);
    light.position.set(100, 100, 0);
    light.target.position.set(-50, 0, -100);
    scene.add(light);
    scene.add(light.target);

    var lightAmbient = new THREE.AmbientLight(0xffffff, 0.05);
    scene.add(lightAmbient);

    var meshes = [];

    var objLoader = new THREE.OBJLoader();

    objLoader.load( 'img/planetModel.obj', function ( object ) {

        object.traverse( function ( child ) {
            if ( child instanceof THREE.Mesh ){
                meshes.push(child);
            }
        });

        var body = meshes[0];

        body.material = new THREE.MeshPhongMaterial({
            map: new THREE.TextureLoader().load('img/planetTexture.jpg'),
        });

        scene.add(body);

        var render = function () {
            requestAnimationFrame( render );
            renderer.render(scene, camera);
        };

        function loop() {
            body.rotation.y += Math.PI/900;

            renderer.render(scene, camera);
            requestAnimationFrame(function() {loop();});
        }
  
        loop();
    
        render();

    });

}

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);


// header
function headerFun (id) {
  let nameWebsite = $('#nameWebsite');
  let persona = $('#persona');
  let heading = $('#heading');
  if (id == 1) {
      nameWebsite.css('opacity','0');
      nameWebsite.css('zIndex','0');
      heading.css('opacity','1');
      heading.css('zIndex','1');
  } else if (id == 2) {
      heading.css('opacity','0');
      heading.css('zIndex','0');
      persona.css('opacity','1');
      persona.css('zIndex','1');
  } else {
      persona.css('opacity','0');
      persona.css('zIndex','0');
      nameWebsite.css('opacity','1');
      nameWebsite.css('zIndex','1');
  }
}

let num = 1;
function funInfo () {
  let container = $('#infoContainer');
  let content = $('#infoContent');
  let button = $('#infoButton');

  if (num == 1) {

    container.css('height', '100vh')
    container.css('width', '100vw')
    container.css('top', '0')
    container.css('right', '0')
    container.css('border-radius', '0')
    container.css('background-color', 'rgba(95, 95, 95, .7)')

    content.css('opacity', '1')

    button.css('opacity', '0')
    button.css('height', '0') 

    num = 2

  } else {

    container.css('height', '40px')
    container.css('width', '40px')
    container.css('top', '10px')
    container.css('right', '10px')
    container.css('border-radius', '50%')
    container.css('background-color', 'rgba(95, 95, 95, 0)')

    content.css('opacity', '0')

    button.css('opacity', '1')
    button.css('height', '100%')   

    num = 1
    
  }

}

