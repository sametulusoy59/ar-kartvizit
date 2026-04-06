document.addEventListener("DOMContentLoaded", () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Işık
  const light = new THREE.AmbientLight(0xffffff);
  scene.add(light);

  // Texture loader
  const loader = new THREE.TextureLoader();

  // Instagram ikonu
  loader.load("assets/icons/instagram.png", (texture) => {
    const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(-3, 0, -5);
    scene.add(mesh);
  });

  // LinkedIn ikonu
  loader.load("assets/icons/linkedin.png", (texture) => {
    const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(3, 0, -5);
    scene.add(mesh);
  });

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
});
