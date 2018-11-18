import Router from 'preact-router';
import Match from 'preact-router/match';

import {h, Component} from 'preact'; // eslint-disable-line no-unused-vars
import Transition from 'preact-transition-group';

import Home from '../pages/Home';
import About from '../pages/About';
import Project from './Project';
import Menu from './Menu';

class TransitionRouter extends Router {
	render(props, state) {
		return (
				<Transition component="section">
					{super.render(props, state)}
				</Transition>
		);
	}
}

class Wrapper extends Component {
	constructor(props) {
		super(props);

		this.state = {
			projectId: -1
		};
	}

	render() {
		return <div className='app-wrapper'>
			<svg viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`} style={{height: '0px', width: '0px'}}>
				<clipPath id="myClip">
					<circle cx="40" cy="35" r="35" />
				</clipPath>
			</svg>
			{this.props.children}
		</div>
	}
}

const PROJECT_LIST = new Map([
	[
		'slug-0',
		{
			projectName: "hello hi bye",
			heroImage: "/dist/abstract-q-c-640-480-6.jpg"
		}
	],
	[
		'slug-1',
		{
			projectName: "hello hi bye 7",
			heroImage: "/dist/abstract-q-c-640-480-7.jpg"
		}
	],
	[
		'slug-2',
		{
			projectName: "hello hi bye 8",
			heroImage: "/dist/abstract-q-c-640-480-8.jpg"
		}
	],
	[
		'slug-3',
		{
			projectName: "hello hi bye 9",
			heroImage: "/dist/abstract-q-c-640-480-9.jpg"
		}
	],
	[
		'slug-4',
		{
			projectName: "hello hi bye 21",
			heroImage: "/dist/abstract-q-c-640-480-6.jpg"
		}
	],
	[
		'slug-5',
		{
			projectName: "hello hi bye 22",
			heroImage: "/dist/abstract-q-c-640-480-7.jpg"
		}
	],
	[
		'slug-6',
		{
			projectName: "hello hi bye 23",
			heroImage: "/dist/abstract-q-c-640-480-8.jpg"
		}
	],
	[
		'slug-7',
		{
			projectName: "hello hi bye 24",
			heroImage: "/dist/abstract-q-c-640-480-9.jpg"
		}
	],
]);

export default class App extends Component {
	getChildContext() {
		return {
			projectList:PROJECT_LIST,
			getPrevNext: (projectList, projectId) => {
				const keys = Array.from(projectList.keys());
				const entries = Array.from(projectList.entries());
				const index = keys.indexOf(projectId);

				const prevIndex = index - 1 < 0 ? keys.length - 1: index - 1;
				const nextIndex = (index + 1) % keys.length;

				return [entries[prevIndex], entries[index], entries[nextIndex]];
			}
		};
	}

	constructor(props) {
		super(props);
	}

	render() {
		return <Wrapper>
			<Match path="/">{({url}) => <Menu url={url} />}</Match>
			<Match path="/">{
				_ => <h1>hi hi</h1>
			}</Match>
			<TransitionRouter>
				<Home key="wrap-home" path="/" />
				<About key="wrap-about" path="/about"/>
				<About key="wrap-about" path="/lab"/>
				<Project key="wrap-project" path="/projects/:projectId" />
			</TransitionRouter>
		</Wrapper>
	}
}