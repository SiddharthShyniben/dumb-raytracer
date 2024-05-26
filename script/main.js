const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const {width, height} = canvas;

const scene = {
	camera: {
		point: v(0, 1.8, 10),
		fov: 45,
		vector: v(0, 3, 0)
	},
	lights: [v(-30, -20, 10)],
	objects: [
		sphere(3, v(0, 3.5, -3), v(155, 200, 155)),
		sphere(.2, v(-4, 2, -1), v(155), .1, .9, 0),
		sphere(.1, v(-4, 3, -1), v(255))
	]
}

function render({camera, lights, objects}) {
	const eye = unit(sub(camera.vector, camera.point));
	const vpRight = unit(cross(eye, up));
	const vpUp = unit(cross(vpRight, eye));

	const fov = (Math.PI * (camera.fov / 2)) / 180;
	const halfWidth = Math.tan(fov);
	const halfHeight = (height / width) * halfWidth
}
