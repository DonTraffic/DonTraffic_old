// 3d three.js
window.onload = function () {
    var width = window.innerWidth;
    var height = window.innerHeight;

    var canvas = document.getElementById('canvas');
    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);

    var renderer = new THREE.WebGLRenderer({canvas: canvas, alpha: true, antialias: true});
    renderer.setClearColor(0x000000, 0);

    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 1000);

    var light = new THREE.AmbientLight(0xffffff);
    scene.add(light)

    var geometry = new THREE.SphereGeometry(200, 12, 12)
    var material = new THREE.MeshBasicMaterial({color: 0xfffffff, wireframe: true});
    var mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    function loop() {
        mesh.rotation.y += Math.PI/900;

        renderer.render(scene, camera);
        requestAnimationFrame(function() {loop();});
    }

    loop();


}