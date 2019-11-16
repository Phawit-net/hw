const App = React.createElement('h2', {style:{color:'green'}}, 'Hello React!','Hi')
const rootElement = document.getElementById('winner')
console.log(App)

ReactDOM.render(App, rootElement)


HTML 
<div id="root">Hi</div>
<div id="winner">React</div>