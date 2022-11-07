import { WebGLRenderer } from 'three';
import { PerspectiveCamera } from 'three';
import {
  SphereGeometry,
  MeshLambertMaterial,
  Mesh,
  Scene,
  AmbientLight,
  Fog,
  DirectionalLight,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default function Sphere({ scale }) {
  let scene = new Scene();
  scene.fog = new Fog(0x808080, 2000, 4000);

  let camera = new PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    8000
  );

  camera.position.set(0, 0, -1500);

  let ambientLight = new AmbientLight(0x0000ff);
  let light = new DirectionalLight(0xffffff, 0.7);
  light.position.set(-800, 900, 300);

  let renderer = new WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0xffffff, 0);
  renderer.setSize(window.innerWidth, window.innerHeight);

  // CONTROLS
  let cameraControls = new OrbitControls(camera, renderer.domElement);
  cameraControls.target.set(0, 0, 0);

  document.body.appendChild(renderer.domElement);

  function fillScene() {
    scene.add(camera);

    // LIGHTS
    scene.add(ambientLight);
    scene.add(light);

    const sphere = createSphere();
    scene.add(sphere);
  }

  function createSphere() {
    const material = new MeshLambertMaterial({
      color: 0xffffff,
      wireframe: true,
    });

    // const geometry = new SphereGeometry(400, 64, 32);
    const geometry = new SphereGeometry(+scale * 12.5, +scale * 2, +scale);
    const sphere = new Mesh(geometry, material);

    return sphere;
  }

  function animate() {
    requestAnimationFrame(animate);
    render();
  }

  function render() {
    renderer.render(scene, camera);
  }

  fillScene();
  animate();
}
