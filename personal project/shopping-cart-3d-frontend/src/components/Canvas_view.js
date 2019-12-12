import React, { Component } from 'react'
import './Canvas_view.css'
import * as THREE from "three";
import { Col } from 'antd';
const OrbitControls = require('three-orbit-controls')(THREE);

export default class CanvasView extends Component {
    componentDidMount() {
        // === THREE.JS CODE START ===
        var scene = new THREE.Scene();
        scene.background = new THREE.Color( 0xffffff )
        var camera = new THREE.PerspectiveCamera( 40, window.innerWidth/window.innerHeight, 0.1, 1000 );
        var container = document.getElementById( 'canvas' );
        var renderer = new THREE.WebGLRenderer();
        var CANVAS_WIDTH = window.innerWidth/1.4,
            CANVAS_HEIGHT = window.innerHeight/1.4;
        renderer.setSize( CANVAS_WIDTH, CANVAS_HEIGHT );
        container.appendChild( renderer.domElement );

        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( { color: 0x00f050 } );
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );
        camera.position.z = 5;

        var controls = new OrbitControls( camera, renderer.domElement );
        controls.enableDamping = true;
        controls.campingFactor = 0.25;
        controls.enableZoom = true;
        controls.enablePan = true;
        
        var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
        keyLight.position.set(-100, 0, 100);
        
        var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
        fillLight.position.set(100, 0, 100);
        
        var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
        backLight.position.set(100, 0, -100).normalize();
        
        scene.add(keyLight);
        scene.add(fillLight);
        scene.add(backLight);

        var animate = function () {
          requestAnimationFrame( animate );
          cube.rotation.x += 0.01;
          cube.rotation.y += 0.01;
          renderer.render( scene, camera );
        };
        animate();
        // === THREE.JS EXAMPLE CODE END ===
      }
    
    render() {
        return (
            <Col span={18}>
                <div className='canvas'>
                    <div id="canvas"></div>
                </div>
            </Col>
        )
    }
}
