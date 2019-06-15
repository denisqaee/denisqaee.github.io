import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Department_single from './department_single';
import Employee_single from './employee_single';
import { data_departments } from './departments';
import { data_employees } from './employees';

import Home from './../pages/Home';
import Add from './../pages/Add';
import View from './../pages/View';
import Error from './../pages/Error';

export default function Routes() {
  return  (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add" component={Add} exact/>
        <Route path="/view" component={View} exact />
        {data_departments.map(function (department) {
          return <Route key={department.id}
                        path={"/view/" + department.id + "/employees"}
                        component={ (props) =>
                                      <Department_single {...props}
                                      department={department}/> }
                        exact />;
        })}

        {data_employees.map(function (employee) {
          return <Route key={employee.id}
                        path={"/employee/" + employee.id}
                        component={ (props) =>
                                      <Employee_single {...props}
                                      department={employee}/> }
                        exact />;
        })}
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}
