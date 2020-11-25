function sendData(event_data, endpoint) {
  console.log(event_data);
  var xhr = new XMLHttpRequest();
  var stringifiedData = JSON.stringify(event_data);

  xhr.open('POST', endpoint);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(stringifiedData);

  xhr.onload = function () {
    if (xhr.status.toString()[0] !== '2') {
      console.error(xhr.status + '> ' + xhr.statusText);
    }
  };
}
