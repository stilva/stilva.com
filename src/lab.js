export default [
	{
		type: 'Paragraph',
		title: 'GLSL',
		date: 'September 2018',
		content: [
			`Writing fragment shaders is a lot of fun. Setting up everything to easily write a shader is much less so.`,
			`Having had to go through the whole ceremony on more than one occasion in the last few months, I've decided to finally write a small library to ease the pain.`,
		]
	},
	{
		type: 'CanvasComponent',
		componentDidMount: function (node) {
			const GLSL = require('@stilva/glsl');

			const glsl = new GLSL(node);
			glsl.addVariable('u_delta', [0, 2, 4]);

			glsl.fragment`void main() {
				vec2 uv = gl_FragCoord.xy/u_resolution.xy;
				vec3 col = 0.5 + 0.5 * cos(u_time + uv.xyx + u_delta);
				gl_FragColor = vec4(col, 1.0);
			}`;

			glsl.render();
		}
	},
	{
		type: 'Paragraph',
		content: [
			`This library allows for a much more concise way of writing shaders.`,
			`The clearing of the buffer in the rendering loop, setting the vertex shader, uniform locations etc are all taken care of for you.`
		]
	},
	{
		type: 'Code',
		content: `
const GLSL = require('@stilva/glsl');

const glsl = new GLSL(node);
glsl.addVariable('u_delta', [0, 2, 4]);

glsl.fragment\`void main() {
  vec2 uv = gl_FragCoord.xy/u_resolution.xy;
  vec3 col = 0.5 + 0.5 * cos(u_time + uv.xyx + u_delta);
  gl_FragColor = vec4(col, 1.0);
}\`;

glsl.render();`
	},
	{
		type: 'Paragraph',
		content: [
			`Still very much a WIP, and here's my to-do list:`,
			`– Add tests, maybe jest + puppeteer, or just jest + Karma runner.`,
			`– Add a resize function, based on the canvas size.`,
			`– Add the texel read/write option once I figure out the best API for it.`,
		]
	}
];
