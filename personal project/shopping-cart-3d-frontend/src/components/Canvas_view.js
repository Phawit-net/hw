import React, { Component } from 'react'
import './Canvas_view.css'
import * as THREE from "three";
import { Col } from 'antd';

export default class CanvasView extends Component {
    componentDidMount() {
        // === THREE.JS CODE START ===
        var scene = new THREE.Scene();
        // scene.background = new THREE.Color( 0xffffff );
        var camera = new THREE.PerspectiveCamera( 40, window.innerWidth/window.innerHeight, 0.1, 1000 );
        var container = document.getElementById( 'canvas' );
        var renderer = new THREE.WebGLRenderer();
        var CANVAS_WIDTH = window.innerWidth/2,
            CANVAS_HEIGHT = window.innerHeight/2;
        renderer.setSize( CANVAS_WIDTH, CANVAS_HEIGHT );
        container.appendChild( renderer.domElement );

        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );
        camera.position.z = 5;
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
            <Col span={12}>
                <div className='canvas'>
                    <div id="canvas"></div>
                </div>
            </Col>
        )
    }
}
