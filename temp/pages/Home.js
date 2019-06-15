import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
      <div id="home">
          <NavLink to="/add">
            <section className="add_departments">
                <h1>Добавить отдел</h1>
            </section>
          </NavLink>
          <NavLink to="/view">
            <section className="view_departments">
              <h1>Просмотреть отделы</h1>
            </section>
          </NavLink>
      </div>
    );
}

export default Home;
