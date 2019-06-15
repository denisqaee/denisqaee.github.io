import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { Departments, data_departments } from './../components/departments';

const View = () => {
    return (
      <div id="view" className="departments">
          <NavLink to="/add">
            <section className="add_departments">
                <FontAwesomeIcon icon="plus" />
            </section>
          </NavLink>
          <section className="view_departments">
            <Departments departments={data_departments}/>
          </section>
      </div>
    );
}

export default View;
