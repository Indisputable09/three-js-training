import { Group } from 'three';
import { FogExp2 } from 'three';
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  MeshBasicMaterial,
  Mesh,
  BoxGeometry,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default function Cube({ scale }) {
  const scene = new Scene();
  scene.fog = new FogExp2(0xcccccc, 0.002);
  const camera = new PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0xffffff, 0);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.update();

  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const geometry = new BoxGeometry(+scale, +scale, +scale);
  const material = new MeshBasicMaterial({ color: 'green' });
  const cube = new Mesh(geometry, material);
  //   getUuid(cube.uuid);
  //   console.log(cube.uuid);
  scene.add(cube);

  const group = new Group();
  group.add(cube);

  scene.add(group);

  camera.position.z = 10;

  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();
}
