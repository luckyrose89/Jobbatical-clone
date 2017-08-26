import React from 'react';
import { Field, reduxForm } from 'redux-form';

const InputForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <div className='job-form'>
      <form onSubmit={ handleSubmit } >
        <h2>Enter Job Opening Descriptions</h2>
        <h4>Where Dream and Reality Merge</h4>
        <div>
          <label>Job Title</label>
          <div>
            <Field
              name="name"
              component="input"
              type="text"
              placeholder="Job Title"
              className="input-single"
            />
          </div>
        </div>
        
        <div>
          <label>Company Info</label>
          <div>
            <Field
              name="hiringOrganization.name"
              component="input"
              type="text"
              placeholder="Company's Name"
              className="input-single"
            />
          </div>
          <div>
            <Field
              name="hiringOrganization.location.addressCity"
              component="input"
              type="text"
              placeholder="City"
              className="input-single"
            />
            <Field
              name="hiringOrganization.location.addressRegion"
              component="input"
              type="text"
              placeholder="Region"
              className="input-single"
            />
            <Field
              name="hiringOrganization.location.addressCountry"
              component="input"
              type="text"
              placeholder="Country"
              className="input-single"
            />
          </div>
        </div>

        <div>
          <label>Job Location</label>
          <div>
            <Field
              name="jobLocation.addressCity"
              component="input"
              type="text"
              placeholder="City"
              className="input-single"
            />
            <Field
              name="jobLocation.addressRegion"
              component="input"
              type="text"
              placeholder="Region"
              className="input-single"
            />
            <Field
              name="jobLocation.addressCountry"
              component="input"
              type="text"
              placeholder="Country"
              className="input-single"
            />

          </div>
        </div>

        <div>
          <label>Display Picture</label>
          <div>
            <Field
              name="pictures"
              component="input"
              type="text"
              placeholder="https://testjobpost.com"
              className="input-single"
            />
          </div>
        </div>

        <div>
          <label>Description</label>
          <div>
            <Field
              name="description"
              component="input"
              type="text"
              placeholder="Job Description"
              className="input-single"
            />
          </div>
        </div>

        <div>
          <label>Keywords and Region</label>
          <div>
            <Field
              name="category.keyword"
              component="input"
              type="text"
              placeholder="Comma Separated (A, B, ..)"
              className="input-single"
            />
            <Field
              name="category.region"
              component="input"
              type="text"
              placeholder="Asia, United States, ..."
              className="input-single"
            />
            <Field
              name="industry"
              component="input"
              type="text"
              placeholder="Tech, healthcare,..."
              className="input-single"
            />
          </div>
        </div>

        <div>
          <label>Incentive and Compensation</label>
          <div>
            <Field name="incentiveCompensation" component="textarea"  className="input-textarea"/>
          </div>
        </div>

        <div>
          <label>Responsibilities</label>
          <div>
            <Field name="responsibilities" component="textarea"  className="input-textarea"/>
          </div>
        </div>

        <div>
          <label>Qualifications</label>
          <div>
            <Field name="qualifications" component="textarea" className="input-textarea"/>
          </div>
        </div>

        <div>
          <label>Employment Type</label>
          <div>
            <label>
              <Field name="employmentType" component="input" type="radio" value="Full-Time" />
              {' '}
              Full-Time
            </label>
            <label>
              <Field name="employmentType" component="input" type="radio" value="PFull-Time" />
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
  form: 'simple', // a unique identifier for this form
})(InputForm);
