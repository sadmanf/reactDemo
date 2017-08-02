const React = require('react');
const ReactDom = require('react-dom');
var App = require('./components/App').default;

// class App extends React.Component {
// 	render () {
// 		return (
// 			<div> This is an App </div>
// 		);
// 	}
// }


document.addEventListener('DOMContentLoaded', function() {
	console.log(App);
	ReactDom.render(
		<App />,
		document.getElementById('app')
	);	
})

