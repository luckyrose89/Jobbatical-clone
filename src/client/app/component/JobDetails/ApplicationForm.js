import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './ApplicationForm.scss';

const required = value => value ? undefined : '!'

const renderField = ({ input, className, placeholder, type, meta: { touched, error, warning } }) => (
  <span>
      <input {...input} className={className} placeholder={placeholder} type={type}/>
      {touched && ((error && <span className={ styles['form-err'] }>{error}</span>) || (warning && <span className={ styles['form-err'] }>{warning}</span>))}
  </span>
)

const renderTextarea = ({ input, className, placeholder, type, meta: { touched, error, warning } }) => (
  <span>
      <textarea {...input} className={className} placeholder={placeholder} type={type}/>
      {touched && ((error && <span className={ styles['form-err'] }>{error}</span>) || (warning && <span className={ styles['form-err'] }>{warning}</span>))}
  </span>
)

const ApplicationForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <div className={ styles['apply-form'] }>
      <form onSubmit={ handleSubmit } >
        <h2>Four Questions For Your</h2>
        <h4>Where Exployers Get To Know You</h4>
        <div>
          <label>Name</label>
          <div>
            <Field
              name="firstname"
              component={renderField}
              validate={[ required ]}
              type="text"
              placeholder="First Name"
              className={ styles['input-single'] }
            />
            <Field
              name="lastname"
              component={renderField}
              validate={[ required ]}
              type="text"
              placeholder="Last Name"
              className={ styles['input-single'] }
            />
          </div>
        </div>

        <div>
          <label>You’re a new addition to the crayon box. What color would you be and why?</label>
          <div>
            <Field 
              name="question1" 
              component={renderTextarea}
              className={ styles['input-textarea'] } 
              validate={[ required ]}/>
          </div>
        </div>

        <div>
          <label>What do you think about when you’re alone in your car? </label>
          <div>
            <Field 
              name="question2" 
              component={renderTextarea}
              className={ styles['input-textarea'] } 
              validate={[ required ]}/>
          </div>
        </div>

        <div>
          <label>Any advice for your previous boss?</label>
          <div>
            <Field 
              name="question3" 
              component={renderTextarea}
              className={ styles['input-textarea'] } 
              validate={[ required ]}/>
          </div>
        </div>

        <div>
          <label>If I granted you three promises with regard to working here, what would they be? </label>
          <div>
            <Field 
              name="question4" 
              component={renderTextarea}
              className={ styles['input-textarea'] } 
              validate={[ required ]}/>
          </div>
        </div>

        <div>
          <label>Cookies?</label>
          <div>
            <label>
              <Field name="cookies" component={renderField} type="radio" value="Chocolate Chip" />
              {' '}
              Chocolate Chip 
            </label>
            <label>
              <Field name="cookies" component={renderField} type="radio" value="Oatmeal Raisin" />
              {' '}
              Oatmeal Raisin
            </label>
          </div>
        </div>

        <div>
          <button type="submit" className={ styles['application-btn'] } disabled={pristine || submitting}>Submit</button>
          <button type="button" className={ styles['application-btn'] } disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'ApplicationForm', // a unique identifier for this form
})(ApplicationForm);
