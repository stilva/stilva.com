import React, {memo, useContext, Component} from 'react';
import { css, cx } from 'linaria';

import GLSL from '@stilva/glsl';

const canvas = css`
  bottom: 0;
  display: block;
  height: 100vh;
  left: 0;
  min-height: 100vh;
  min-width: 100vw;
  opacity: 1;
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;
  z-index: 0;
`;

export default class Background extends Component {
  componentDidMount() {
    this.glsl = new GLSL(this.el);

    // < 0 hide
    // 0. no animation
    // > 0. show
    this.updateDirection = this.glsl.addVariable('u_dir', [!!this.props.previousRoute ? 1.: 0.]);
    this.updateOffset = this.glsl.addVariable('u_offset', [0.]);

    this.glsl.fragment`float easing(float k) {
      // Quintic
      // return --k * k * k * k * k + 1.;
      // Exponential
      return k == 1. ? 1. : 1. - pow(2., - 10. * k);
    }
    
    float easeOut(float k) {
      return k == 0. ? 0. : pow(1024., k - 1.);
    }
    
    float noise(vec2 u) {
        // return fract(sin(u.x * 7.)*92.*cos(u.y *9.)*39.);
        return fract(dot(sin(cos(u.x * 3.14) * 123.12)*142.,cos(u.y *34.95)*165.47));
    }
    
    vec2 bezier(float t, vec4 p) {
      return 3. * pow(1. - t, 2.) * t * p.rg + 3. * (1. - t) * pow(t, 2.) * p.ba + pow(t, 3.);
    }
    
    float rect(float t, vec2 uv) {
      vec2 zero = vec2(0., 0.);
      vec2 translate = vec2(t);
      vec2 pt = step(zero, uv + translate);
      return 1. - pt.x * pt.y * step(0., 1.0 - (uv.x + translate.x));
    }

    void main() {
				vec2 uv = gl_FragCoord.xy/u_resolution.xy;
				float color1, color2, color3 = 0.;
        float adjusted_time = clamp((u_time - u_offset) / .85, 0., 1.);
        
        if(u_dir > 0.) {
          color1 = rect(clamp(1. - bezier(adjusted_time, vec4(0., .68, 0., .99)).y, 0., 1.), uv);
          color2 = rect(clamp(1. - bezier(adjusted_time, vec4(0., .31, 0., .82)).y, 0., 1.), uv);
          color3 = rect(clamp(1. - bezier(adjusted_time, vec4(.73, .0, .51, .99)).y, 0., 1.), uv);
        }
        
        if(u_dir == 0.) {
          color1 = rect(0., uv);
          color2 = rect(0., uv);
          color3 = rect(0., uv);
        }
        
        if(u_dir < 0.) {
          color1 = rect(clamp(bezier(adjusted_time, vec4(.73, .0, .51, .99)).y, 0., 1.), uv);
          color2 = rect(clamp(bezier(adjusted_time, vec4(0., .31, 0., .82)).y, 0., 1.), uv);
          color3 = rect(clamp(bezier(adjusted_time, vec4(0., .68, 0., .99)).y, 0., 1.), uv);
        }

        gl_FragColor = vec4(0., 0., 0., 1.);
        gl_FragColor = mix(gl_FragColor, vec4(0., 0., 0., .9), color3);
        gl_FragColor = mix(gl_FragColor, vec4(0., 0., 0., .85), color2);
        gl_FragColor = mix(gl_FragColor, vec4(0., 0., 0., 0.), color1);
			}`;

    this.glsl.render();
  }

  componentWillUnmount() {
    this.glsl.kill();
  }

  shouldComponentUpdate({transitionstate}) {
    if(transitionstate == 'exiting' && this.props.transitionstate == 'entered') {
      this.updateDirection([-1.]);
      this.updateOffset([(Date.now() - this.glsl._initTime)/1000]);
    }

    return false;
  }

  render() {
    return <canvas
      className={canvas}
      ref={node => this.el = node}
      width={400}
      height={400}
    />;
  }
}