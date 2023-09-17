export interface ConfettiShape {
	shape: string
	speed: number
	color: string
}

const shapes = [
	'square',
	'rectangle',
	'hexagram',
	'pentagram',
	'dodecagram',
	'wavy-line'
]

const colors = [
	'yellow',
	'blue',
	'red',
	'white',
	'purple',
	'pink',
	'green',
	'cyan',
	'steelblue',
	'orange',
	'indigo'
]
const speeds = [10, 13, 15, 18, 19, 23, 27, 29, 34, 48, 49]

function getRandomInt(min: number, max: number): number {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1)) + min
}

export function createConfettiItems(): ConfettiShape[] {
	return Array.from({ length: 100 }, (_, index) => ({
		shape: shapes[getRandomInt(0, shapes.length - 1)],
		speed: speeds[getRandomInt(0, speeds.length - 1)],
		color: colors[getRandomInt(0, colors.length - 1)]
	}))
}
