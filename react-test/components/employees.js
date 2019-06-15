import React from 'react';
import { NavLink } from 'react-router-dom';

const Employee = function(props) {
  return (
    <div>
      <NavLink to={"/employee/" + props.id} className="employee">
        <h1>{props.fio}</h1>
      </NavLink>
    </div>
  );
}

class Employees extends React.Component {
  render() {
    var id_department = this.props.department.department.id;
    return (
      <div>
        {this.props.employees.map(function (props) {
          if (props.id_department === id_department) {
            return <Employee id={props.id}
                            fio={props.fio} />;
          } else {
            return null;
          }
        })}
      </div>
    );
  }
}

var data_employees = [
    {
      id: 1,
      id_department: 1,
      fio: 'Иванов Иван Иванович',
      tel: '+7-(999)-999-99-99',
      img: './../images/workers/ivanov.jpg'
    },
    {
      id: 2,
      id_department: 1,
      fio: 'Юрьев Юрий Юрьевич',
      tel: '+7-(888)-888-88-88',
      img: './../images/workers/uriev.jpg'
    },
    {
      id: 3,
      id_department: 4,
      fio: 'Алексеев Алексей Алексеевич',
      tel: '+7-(777)-777-77-77',
      img: './../images/workers/alekseev.jpg'
    },
    {
      id: 4,
      id_department: 4,
      fio: 'Евгеньева Евгения Евгеньевич',
      tel: '+7-(666)-666-66-66',
      img: './../images/workers/evgenieva.jpg'
    },
    {
      id: 5,
      id_department: 3,
      fio: 'Александров Александр Александрович',
      tel: '+7-(555)-555-55-55',
      img: './../images/workers/aleksandrov.jpg'
    },
    {
      id: 6,
      id_department: 2,
      fio: 'Денисов Денис Денисович',
      tel: '+7-(444)-444-44-44',
      img: './../images/workers/denisov.jpg'
    },
]

export { Employees, data_employees } ;
