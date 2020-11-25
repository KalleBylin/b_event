function sendData(event_data, endpoint) {
  var xhr = new XMLHttpRequest();
  var stringifiedData = JSON.stringify(event_data);

  xhr.open('POST', endpoint);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(stringifiedData);

  return true;
}
