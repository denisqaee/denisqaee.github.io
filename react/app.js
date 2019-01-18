var image = React.createElement('img', { src: 'img/react.png' });
var title = React.createElement('h1', null, 'Привет, React!');
var subtitle = React.createElement('p', null, 'Библиотека для создания пользовательских элементов');
var container = React.createElement('div', {className: 'container'}, image, title, subtitle); 

ReactDOM.render(container, document.getElementById('root'));