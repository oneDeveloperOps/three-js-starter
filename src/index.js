import './style.sass'
import * as THREE from 'three' 
import gsap from 'gsap'

//4 elements
//scene
const scene = new THREE.Scene();
//objects
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({ color: '#bdb2ff' });
//mesh
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
//sizes
const sizes = {
    width: 800,
    height: 600
};

// Camera- rendering
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height);
camera.position.z = 3;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({ 
    canvas: document.getElementById("webgl")
});
renderer.setSize(sizes.width, sizes.height);

let clock = new THREE.Clock();

const animate = () => {
    const elapsed = clock.getElapsedTime();
    camera.position.y = Math.sin(elapsed); 
    camera.position.x = Math.cos(elapsed);
    camera.lookAt(mesh.position)
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
}

animate()
