import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { Employees, data_employees } from './employees';

const Department_single = function(props) {
  return (
    <div className="department_single departments">
      <NavLink to="/add">
        <section className="add_departments">
            <FontAwesomeIcon icon="plus" />
        </section>
      </NavLink>
      <section className="view_departments">
        <Employees department={props} employees={data_employees}/>
      </section>
      <NavLink to="/view">
        <section className="view_departments">
            <FontAwesomeIcon icon="search" />
        </section>
      </NavLink>
    </div>
  );
}

export default Department_single;
