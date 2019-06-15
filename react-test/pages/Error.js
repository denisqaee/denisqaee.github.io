import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
      <div id="error">
          <div className="error-page">
            <h1>Ошибка 404: Данной страницы не существует.</h1>
            <NavLink to="/">
              <button>На главную</button>
            </NavLink>
          </div>
      </div>
    );
}

export default Error;
