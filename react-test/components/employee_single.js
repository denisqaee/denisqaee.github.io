import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

class Employee_single extends React.Component {
  render(){
    return (
      <div className="department_single departments">
        <NavLink to="/add">
          <section className="add_departments">
              <FontAwesomeIcon icon="plus" />
          </section>
        </NavLink>
        <section className="view_departments">
          <img src={this.props.department.img}/>
          <h1>{this.props.department.fio}</h1>
          <h1>{this.props.department.tel}</h1>
        </section>
        <NavLink to="/view">
          <section className="view_departments">
              <FontAwesomeIcon icon="search" />
          </section>
        </NavLink>
      </div>
    );
  }
}

export default Employee_single ;
