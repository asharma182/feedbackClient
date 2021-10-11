import React from 'react';
import { CreateFormPage } from '../pages/CreateFormPage/CreateFormPage';
import { ListFormPage } from '../pages/ListFormPage/ListFormPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import { EditFeedbackPage } from '../pages/EditFormPage/EditFeedbackPage';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/home" component={CreateFormPage} />
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route exact path="/list" component={ListFormPage} />
      <Route exact path="/edit/:id" component={EditFeedbackPage} />
    </Switch>
  );
};