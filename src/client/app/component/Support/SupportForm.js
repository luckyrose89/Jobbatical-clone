import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './SupportForm.scss';

const required = value => value ? undefined : '!'

const renderField = ({ input, className, placeholder, init, type, meta: { touched, error, warning } }) => (
  <span>
      <input {...input} className={className} placeholder={placeholder} value={init} type={type}/>
      {touched && ((error && <span className={ styles['form-err'] }>{error}</span>) || (warning && <span className={ styles['form-err'] }>{warning}</span>))}
  </span>
)

const renderTextarea = ({ input, className, placeholder, init, type, meta: { touched, error, warning } }) => (
  <span>
      <textarea {...input} className={className} placeholder={placeholder} value={init} type={type}/>
      {touched && ((error && <span className={ styles['form-err'] }>{error}</span>) || (warning && <span className={ styles['form-err'] }>{warning}</span>))}
  </span>
)

const SupportForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
        <form onSubmit={ handleSubmit } >
          <div>
            <label></label>
            <div>
              <Field
                name="email"
                component={renderField}
                validate={[ required ]}
                type="text"
                placeholder="email@mail.com"
                className={ styles['support-email'] }
              />
            </div>
          </div>

          <div>
            <label></label>
            <div>
              <Field
                name="inquiry"
                component={renderTextarea}
                validate={[ required ]}
                type="text"
                placeholder="Enter Your Message Here (Only 1 record per email will be recorded)"
                className={ styles['support-details'] }
              />
            </div>
          </div>

          <div>
            <button type="submit" disabled={pristine || submitting} className={ styles['more-button'] } >
              Submit
            </button>
            <button type="button" disabled={pristine || submitting} onClick={reset} className={ styles['more-button'] }>
              Clear Values
            </button>
          </div>
        </form>
  );
};

export default reduxForm({
  form: 'requestSupport', // a unique identifier for this form
})(SupportForm);
