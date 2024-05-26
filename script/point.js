const v = (x = 0, y = x, z = x) => x.length ? x : [x, y, z];
const sphere = (radius, point, color, specular = 0.2, lambert = 0.7, ambient = 0.1) => ({
	radius, point, color, specular, lambert, ambient
});

const UP = v(0, 1, 0);
const ZERO = v(0);
const WHITE = v(255);

const dot = curry((a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * c[2])
const cross = curry((a, b) => [
	(a[1] * b[2]) - (a[2] * b[1]),
	(a[2] * b[0]) - (a[0] * b[2]),
	(a[0] * b[1]) - (a[1] * b[0])
]);

const length = a => Math.sqrt(dot(a)(a))
const unit = a => scale(1 / length(a))(a)
const scale = curry((t, a) => a.map(b => b * t));
const neg = n => v(n).map(x => -x);

const add = curry((a, b) => a.map((c, i) => c + b[i]));
const sub = curry((a, b) => a.map((c, i) => c - b[i]));

const reflect = curry((normal, a) => sub(scale(2, d), scale(dot(a, normal), normal)))
