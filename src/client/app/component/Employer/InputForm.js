import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './InputForm.scss';

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

const InputForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <div className={ styles['job-form'] }>
      <form onSubmit={ handleSubmit } >
        <h2>Enter Job Opening Descriptions</h2>
        <h4>Where Dream and Reality Merge</h4>
        <div>
          <label>Job Title</label>
          <div>
            <Field
              name="name"
              component={renderField}
              validate={[ required ]}
              type="text"
              placeholder="Job Title"
              className={ styles['input-single'] }
            />
          </div>
        </div>
        
        <div>
          <label>Company Info</label>
          <div>
            <Field
              name="hiringOrganization.name"
              component={renderField}
              validate={[ required ]}
              type="text"
              placeholder="Company's Name"
              className={ styles['input-single'] }
            />
          </div>
          <div>
            <Field
              name="hiringOrganization.location.addressCity"
              component={renderField}
              validate={[ required ]}
              type="text"
              placeholder="City"
              className={ styles['input-single'] }
            />
            <Field
              name="hiringOrganization.location.addressRegion"
              component={renderField}
              validate={[ required ]}
              type="text"
              placeholder="Region"
              className={ styles['input-single'] }
            />
            <Field
              name="hiringOrganization.location.addressCountry"
              component={renderField}
              validate={[ required ]}
              type="text"
              placeholder="Country"
              className={ styles['input-single'] }
            />
          </div>
        </div>

        <div>
          <label>Job Location</label>
          <div>
            <Field
              name="jobLocation.addressCity"
              component={renderField}
              validate={[ required ]}
              type="text"
              placeholder="City"
              className={ styles['input-single'] }
            />
            <Field
              name="jobLocation.addressRegion"
              component={renderField}
              validate={[ required ]}
              type="text"
              placeholder="Region"
              className={ styles['input-single'] }
            />
            <Field
              name="jobLocation.addressCountry"
              component={renderField}
              validate={[ required ]}
              type="text"
              placeholder="Country"
              className={ styles['input-single'] }
            />

          </div>
        </div>

        <div>
          <label>Display Picture</label>
          <div>
            <Field
              name="pictures"
              component={renderField}
              validate={[ required ]}
              type="text"
              placeholder="https://testjobpost.com"
              className={ styles['input-single'] }
            />
          </div>
        </div>

        <div>
          <label>Description</label>
          <div>
            <Field
              name="description"
              component={renderField}
              validate={[ required ]}
              type="text"
              placeholder="Job Description"
              className={ styles['input-single'] }
            />
          </div>
        </div>

        <div>
          <label>Keywords and Region</label>
          <div>
            <Field
              name="category.keyword"
              component={renderField}
              validate={[ required ]}
              type="text"
              placeholder="Comma Separated (A, B, ..)"
              className={ styles['input-single'] }
            />
            <Field
              name="category.region"
              component={renderField}
              validate={[ required ]}
              type="text"
              placeholder="Asia, United States, ..."
              className={ styles['input-single'] }
            />
            <Field
              name="industry"
              component={renderField}
              validate={[ required ]}
              type="text"
              placeholder="Tech, healthcare,..."
              className={ styles['input-single'] }
            />
          </div>
        </div>

        <div>
          <label>Incentive and Compensation</label>
          <div>
            <Field 
              name="incentiveCompensation" 
              component={renderTextarea}
              className={ styles['input-textarea'] } 
              validate={[ required ]}/>
          </div>
        </div>

        <div>
          <label>Responsibilities</label>
          <div>
            <Field 
              name="responsibilities" 
              component={renderTextarea}
              className={ styles['input-textarea'] } 
              validate={[ required ]}/>
          </div>
        </div>

        <div>
          <label>Qualifications</label>
          <div>
            <Field 
              name="qualifications" 
              component={renderTextarea}
              className={ styles['input-textarea'] } 
              validate={[ required ]}/>
          </div>
        </div>

        <div>
          <label>Employment Type</label>
          <div>
            <label>
              <Field name="employmentType" component={renderField} type="radio" value="Full-Time" />
              {' '}
              Full-Time
            </label>
            <label>
              <Field name="employmentType" component={renderField} type="radio" value="Part-Time" />
              {' '}
              Part-Time
            </label>
          </div>
        </div>

        <div>
          <button type="submit" disabled={pristine || submitting}>Submit</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'newJob', // a unique identifier for this form
})(InputForm);
