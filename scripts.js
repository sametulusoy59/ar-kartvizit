document.addEventListener("DOMContentLoaded", () => {
  const mindarThree = new window.MINDAR.IMAGE.MindARThree({
    container: document.body,
    imageTargetSrc: "https://cdn.jsdelivr.net/npm/mindar@latest/dist/mindar-image-targets/targets.mind",
  });

  const { renderer, scene, camera } = mindarThree;

  // Işık ekleyelim
  const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
  scene.add(light);

  // Instagram ikonu
  const textureLoader = new THREE.TextureLoader();
  const instagramTexture = textureLoader.load("assets/icons/instagram.png");
  const instagramMaterial = new THREE.MeshBasicMaterial({ map: instagramTexture, transparent: true });
  const instagramGeometry = new THREE.PlaneGeometry(1, 1);
  const instagramMesh = new THREE.Mesh(instagramGeometry, instagramMaterial);
  instagramMesh.position.set(-1, 0, 0);

  // LinkedIn ikonu
  const linkedinTexture = textureLoader.load("assets/icons/linkedin.png");
  const linkedinMaterial = new THREE.MeshBasicMaterial({ map: linkedinTexture, transparent: true });
  const linkedinGeometry = new THREE.PlaneGeometry(1, 1);
  const linkedinMesh = new THREE.Mesh(linkedinGeometry, linkedinMaterial);
  linkedinMesh.position.set(1, 0, 0);

  scene.add(instagramMesh);
  scene.add(linkedinMesh);

  // Animasyon döngüsü
  const start = async () => {
    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  };
  start();
});
