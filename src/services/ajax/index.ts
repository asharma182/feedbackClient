export const createFeedbackForm = (data: any) => {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let requestOptions: any = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(data),
    redirect: 'follow'
  };

  return fetch("http://localhost:3001/createFeedback", requestOptions)
    .then(response => response.text())
    .then(result => result)
    .catch(error => console.log('error', error));
}

export const getAllFeedbacks = () => {
  let requestOptions: any = {
    method: 'GET',
    redirect: 'follow'
  };

  return fetch("http://localhost:3001/feedback", requestOptions)
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.log('error', error));

}

export const getOneFeedback = (id: number) => {
  let requestOptions: any = {
    method: 'GET',
    redirect: 'follow'
  };

  return fetch("http://localhost:3001/feedback/"+id, requestOptions)
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.log('error', error));

}

export const removeFeedback = (id: number) => {

  var requestOptions: any = {
    method: 'DELETE',
    redirect: 'follow'
  };

  return fetch("http://localhost:3001/delete/feedback/" + id, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

export const updateFeedback = (data: any) => {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions: any = {
    method: 'PUT',
    headers: myHeaders,
    body: JSON.stringify(data),
    redirect: 'follow'
  };

  return fetch("http://localhost:3001/editFeedback/"+data.id, requestOptions)
    .then(response => response.text())
    .then(result => result )
    .catch(error => console.log('error', error));
}