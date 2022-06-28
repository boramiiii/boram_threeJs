function Light(props) {
	return (
		<mesh position={props.position}>
			<pointLight color={props.color} intensity={props.intennsity} castShadow />
			{props.show && (
				<>
					<sphereBufferGeometry args={[0.1, 10, 10]} />
					<meshPhongMaterial emissive={props.color} />
				</>
			)}
		</mesh>
	);
}

export default Light;
