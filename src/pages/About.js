import React, {Component} from "react";
import SVGMask from '../components/SVGMask';

const style = {
	display: 'block',
	position: 'absolute',
	height: '100vh',
	top: 0,
	left: 0,
	width: '100vw'
};

export default class About extends Component {

	shouldComponentUpdate(nextProps) {
		return this.props.state !== nextProps.state;
	}

	render() {
		const props = this.props;

		const colors = {
			project: 'red',
			lab: 'yellow',
			about: 'green'
		};

		return <div>
			<SVGMask type='-my-my' state={props.state}/>
			<div style={Object.assign({}, style, {
				background: colors[props.type],
				contain: 'content',
				transform: `translate3d(0,0,0)`,
				zIndex: props.state == 'entering' ? 1 : 0
			})}>
				<h1 style={{color: 'white', paddingTop: '100px', zIndex: 1, display: 'block', position: 'relative'}}>
					{Date.now()} {props.type} {props.state}
				</h1>
				{props.type}
			</div>
		</div>
	}
}