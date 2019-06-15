import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const Add = () => {
    return (
      <div id="add" className="departments">
          <section className="add_departments">

          </section>
          <NavLink to="/view">
            <section className="view_departments">
                <FontAwesomeIcon icon="search" />
            </section>
          </NavLink>
      </div>
    );
}

export default Add;
