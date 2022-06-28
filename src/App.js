import './scss/style.scss';
import Orbit from './components/Orbit';
import Model from './components/Model';
import CameraControls from './components/CameraControls';
import CameraBtns from './components/CameraBtns';
import Txt from './components/Txt';
import Light from './components/Light';

import { Suspense, useState } from 'react';
import { Canvas, extend } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
extend({ OrbitControls });


function App() {
	const [Index, setIndex] = useState(0);


	return (
		<figure>
			<h1>Village</h1>
			<Txt Index={Index} />
			<CameraBtns setIndex={setIndex} />
			<Canvas
				shadowMap
				style={{ background: '#bbb' }}
				camera={{ position: [7, 7, 7] }}>
				{/* <axesHelper args={[5]} /> */}
				<Orbit />
				<CameraControls />
				<ambientLight color={'#888'} intensity={0.8} />
				<Light
					position={[-5, 4, 0]}
					show={true}
					color={'#ff9900'}
					intensity={0.5}
				/>
				<Light
					position={[0, 5, 0]}
					show={true}
					color={'#ff9900'}
					intensity={1}
				/>

				<Suspense fallback={null}>
					<Model
						path={process.env.PUBLIC_URL + '/village/scene.gltf'}
						position={[2, -2, 6]}
						scale={0.1}
					/>
				</Suspense>
			</Canvas>
		</figure>
	);
}

export default App;