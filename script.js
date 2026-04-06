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


  // CV hologram yazıları
const cvTexts = [
  "Bilgisayar Yüksek Mühendisi",
  "Unity & Vuforia Tezi",
  "Uluslararası Bildiri",
  "Çalışma Deneyimi:",
  "- Turuncu Mavi Web Tasarım (Stajyer)",
  "- ÇOSB Müdürlüğü (Stajyer)",
  "- Türkiye Ministry of Industry and Technology (2024- Halen)"
];

const cvMeshes = [];
const fontLoader = new THREE.FontLoader();
fontLoader.load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json", (font) => {
  cvTexts.forEach((text, i) => {
    const geometry = new THREE.TextGeometry(text, {
      font: font,
      size: 0.3,
      height: 0.05,
    });
    const material = new THREE.MeshBasicMaterial({ color: i % 2 === 0 ? 0x00ffff : 0xff0000 });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(-4, 2 - i * 0.5, -6);
    scene.add(mesh);
    cvMeshes.push(mesh);
  });
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
