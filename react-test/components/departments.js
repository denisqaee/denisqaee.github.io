import React from 'react';
import { NavLink } from 'react-router-dom';

const Department = function(props) {
  return (
    <NavLink to={'/view/' + props.id + '/employees'} className="department" style={{height:100/data_departments.length + 'vh'}}>
        <h1>{props.name_department}</h1>
    </NavLink>
  );
}

class Departments extends React.Component {
  render() {
    return (
      <div>
        {this.props.departments.map(function (props) {
          return <Department id={props.id} name_department={props.name_department} />;
        })}
      </div>
    );
  }
}

var data_departments = [
    {
      id: 1,
      name_department: 'Отдел логистики'
    },
    {
      id: 2,
      name_department: 'Отдел управления персоналом'
    },
    {
      id: 3,
      name_department: 'Отдел маркетинга'
    },
    {
      id: 4,
      name_department: 'Отдел информационных технологий'
    },
]

export { Departments, data_departments } ;
