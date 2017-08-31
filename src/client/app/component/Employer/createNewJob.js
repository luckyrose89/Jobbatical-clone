import fetch from 'isomorphic-fetch';

export const CREATE_NEW_JOB = 'CREATE_NEW_JOB';

export default (async function createNewJob(values) {
console.log('creating post request with', values);
  return fetch('/api/job', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ values }, null, 2),
  }).then(
  window.alert(`You submitted:\n\n${JSON.stringify(values.name, null, 2)}`)
  )
});