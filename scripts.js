document.addEventListener("DOMContentLoaded", () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Işık
  const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
  scene.add(light);

  // Texture loader
  const loader = new THREE.TextureLoader();

  // Instagram ikonu
  const instagramTexture = loader.load("assets/icons/instagram.png");
  const instagramMaterial = new THREE.MeshBasicMaterial({ map: instagramTexture, transparent: true });
  const instagramGeometry = new THREE.PlaneGeometry(2, 2);
  const instagramMesh = new THREE.Mesh(instagramGeometry, instagramMaterial);
  instagramMesh.position.set(-3, 0, -5);
  scene.add(instagramMesh);

  // LinkedIn ikonu
  const linkedinTexture = loader.load("assets/icons/linkedin.png");
  const linkedinMaterial = new THREE.MeshBasicMaterial({ map: linkedinTexture, transparent: true });
  const linkedinGeometry = new THREE.PlaneGeometry(2, 2);
  const linkedinMesh = new THREE.Mesh(linkedinGeometry, linkedinMaterial);
  linkedinMesh.position.set(3, 0, -5);
  scene.add(linkedinMesh);

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
});
