import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const Employee_single = function(props) {
  return (
    <div className="department_single departments">
      <NavLink to="/add">
        <section className="add_departments">
            <FontAwesomeIcon icon="plus" />
        </section>
      </NavLink>
      <section className="view_departments">
        <h1>{props.department.fio}</h1>
        <h1>{props.department.tel}</h1>
      </section>
      <NavLink to="/view">
        <section className="view_departments">
            <FontAwesomeIcon icon="search" />
        </section>
      </NavLink>
    </div>
  );
}

export default Employee_single ;
