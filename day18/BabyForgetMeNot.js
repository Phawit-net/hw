// 🔥 Edit here
// const App = React.createElement('ul', null,React.createElement('li',null,'Baby,',React.createElement('li',null,React.createElement('b',null,'Forget'),React.createElement('li',null,'me',React.createElement('li',null,'not.')))))

const App = React.createElement('ul', null,
    React.createElement('li', null,"Baby,"),
    React.createElement('b', null,
    React.createElement('li', null,"Forget")),
    React.createElement('li', null,"me"),
    React.createElement('li', null,"not."))

console.log(App)
const rootElement = document.getElementById('root')

console.log(ReactDOM.render(App, rootElement))

// ---------------------------------------
const showMsg = true
const App = <div>{showMsg && 'This is a link.'}</div>

const rootElement = document.getElementById('root')

console.log(ReactDOM.render(App, rootElement))


HTML
<div id="root"></div>