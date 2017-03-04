import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import { RaisedButton } from 'material-ui';
import './UserForm.css';

let UserForm = function (props) {
  const { submitting } = props;
  return (
    <section className="UserForm">
      <form onSubmit={props.handleSubmit}>
        <Field name="name" component={TextField} fullWidth={true} floatingLabelText="Name" hintText="Name"/>
        <Field name="email" component={TextField} fullWidth={true} floatingLabelText="Email address" hintText="Email address"/>
        <RaisedButton type="submit" label="Save" primary={true} fullWidth={true} disabled={submitting} style={{marginTop: '15px'}} />
      </form>
    </section>
  );
};

const doSubmit = (form, dispatch, props) => {
  props.doSubmit(form);
};

UserForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  doSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

// Decorate with redux-form
UserForm = reduxForm({
  form: 'userForm',
  onSubmit: doSubmit
})(UserForm);

// Connect initial values to new state property
UserForm = connect(
  state => ({
    initialValues: state.users.user
  })
)(UserForm);

export default UserForm;
