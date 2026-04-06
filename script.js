document.addEventListener("DOMContentLoaded", () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const loader = new THREE.TextureLoader();
  const clickableObjects = [];

  // Instagram ikonu
  loader.load("assets/icons/instagram.png", (texture) => {
    const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(-3, 0, -5);
    mesh.userData = { url: "https://www.instagram.com/sametulusoy59" };
    scene.add(mesh);
    clickableObjects.push(mesh);
  });

  // LinkedIn ikonu
  loader.load("assets/icons/linkedin.png", (texture) => {
    const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(3, 0, -5);
    mesh.userData = { url: "https://tr.linkedin.com/in/csametulusoy" };
    scene.add(mesh);
    clickableObjects.push(mesh);
  });

  camera.position.z = 5;

  // Raycaster ve mouse
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  function onClick(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(clickableObjects);
    if (intersects.length > 0) {
      const url = intersects[0].object.userData.url;
      window.open(url, "_blank");
    }
  }

  window.addEventListener("click", onClick);

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
});
