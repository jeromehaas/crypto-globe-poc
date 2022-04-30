import '../styles/main.css'
import * as THREE from 'three';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls'
import * as dat from 'dat.gui';

class Globe {

	constructor() {
		this.name = 'globe'
		this.canvas = document.querySelector('.globe__canvas');
		this.scene = new THREE.Scene();
		this.renderer = null;
		this.camera = null;
		this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
		this.clock = new THREE.Clock();
		this.debugger = null;
		this.light = null;
		this.controls = null;
		this.meshes = {
			sphere: null
		}
	};

	init = () => {
		this.createCamera();
		this.createLight();
		this.createMesh();
		this.createTrackball();
		this.createDebugger();
		this.createResizer();
		this.createRenderer();
		this.render();
	};

	createResizer = () => {
		window.addEventListener('resize', () => {
			this.renderer.setSize(window.innerWidth, window.innerHeight);
			this.renderer.render(this.scene, this.camera);	
			this.createCamera();
			this.render();
			this.createTrackball();
		});
	};

	createDebugger = () => {
		this.debugger = new dat.GUI();
		this.debugger.add(this.meshes.sphere.rotation, 'x').min(0).max(10);
		this.debugger.add(this.meshes.sphere.rotation, 'y').min(0).max(10);
		this.debugger.add(this.meshes.sphere.rotation, 'z').min(0).max(10);
	};

	createTrackball = () => {
		this.controls = new TrackballControls(this.camera, this.canvas);
		this.controls.enableDamping = true;
	};

	createCamera = () => {
		this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		this.camera.position.set(0, 0, 10);
		this.scene.add(this.camera);
	}

	createLight = () => {
		this.light = new THREE.AmbientLight(0xffffff, 1, 4);
		this.light.position.set( 5, 5, 5 );
		this.scene.add(this.light);
	};

	createRenderer = () => {
		this.renderer = new THREE.WebGLRenderer({ 
			canvas: this.canvas,
			antialias: true
		 });
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.render(this.scene, this.camera);
		this.renderer.setClearColor(0xeaeaea, 0);
	};

	createMesh = () => {
		const geometry = new THREE.SphereBufferGeometry(3, 32, 32);
		const material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('./maps/map-world.png') });
		this.meshes.sphere = new THREE.Mesh(geometry, material);	
		this.scene.add(this.meshes.sphere);
	};

	render = () => {
		const elapsedTime = this.clock.getElapsedTime();
		this.meshes.sphere.rotation.y = elapsedTime * 0.1;
		this.controls.update()
		this.renderer.render(this.scene, this.camera);
		window.requestAnimationFrame(this.render);
	};

};

export default Globe;