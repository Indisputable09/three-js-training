import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  CylinderGeometry,
  MeshNormalMaterial,
  Mesh,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default function Pyramid({ scale }) {
  const winW = window.innerWidth;
  const winH = window.innerHeight;

  const scene = new Scene();
  const camera = new PerspectiveCamera(50, winW / winH, 0.01, 10);

  const renderer = new WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0xffffff, 0);
  renderer.setSize(winW, winH);
  document.body.appendChild(renderer.domElement);
  ////////////////////////////////////////
  let cameraControls = new OrbitControls(camera, renderer.domElement);
  cameraControls.target.set(0, 0, 0);

  //   const radius = 4;
  //   const height = 5;

  const geometry = new CylinderGeometry(0, +scale, +scale + 1, 4, 1);
  const material = new MeshNormalMaterial();
  const pyramid = new Mesh(geometry, material);
  scene.add(pyramid);

  camera.position.z = 10;

  var render = function () {
    requestAnimationFrame(render);

    renderer.render(scene, camera);
  };

  render();
}
