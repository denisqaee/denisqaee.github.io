function Hero() {
  return (
    <div className="containter">
      <img src="img/react.png" />
      <h1>React</h1>
      <p>Библиотека для создания пользовательских интерфейсов</p>
    </div>
  );
}

ReactDOM.render(Hero, document.getElementById('root'));
