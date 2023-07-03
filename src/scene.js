import * as THREE from 'three';    

let camera, renderer, scene;

export const createScene = (el, ethAddress) => {

  
  initScene()
  fetchNFTs().then()


};

const initScene = ()=>{
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );


  camera.position.z = 50;
  camera.position.y = 15;  
  camera.lookAt(new THREE.Vector3(0,0,0));
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  scene = new THREE.Scene();  

  scene.add(camera);
  document.body.appendChild(renderer.domElement);  

}

const fetchNFTs = async ()=>{
  try {
    await Moralis.start({
      apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjJjNmNmMjk3LTMwNzgtNDkwZi1iZjFmLTM3ZGZmZDk5NTllNyIsIm9yZ0lkIjoiMzQ2NTYyIiwidXNlcklkIjoiMzU2MjQ2IiwidHlwZUlkIjoiYzYxNzA2NjMtODU4Yi00MmQ2LWE4NjUtMTIxNTM1ZTQ2OTRmIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2ODg0MDQ3NzcsImV4cCI6NDg0NDE2NDc3N30.hhoVUYNe3cRiaqq9JMotSzMrDxTp_dg7SyC-vuu1vNU"
    });
  
    const response = await Moralis.EvmApi.nft.getWalletNFTs({
      "chain": "0x1",
      "format": "decimal",
      "mediaItems": false,
      "address": "0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
    });
  
    console.log(response.raw);
  } catch (e) {
    console.error(e);
  }  
}