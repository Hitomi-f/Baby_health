const axios = require('axios');

// IoTボタンを押すとeventが渡されるー①
exports.handler = async (event) => {
  let status;
  // clickTypeを取得してstatusを変更
  switch(event.deviceEvent.buttonClicked.clickType) {
    case "SINGLE":
      status = '1';
      break;
    case "DOUBLE":
      status = '2';
      break;
    case "LONG":
      status = '3';
      break;
  }
  // GAS APIにstatusをPOST
  await axios.post(process.env.URL, { clickType: status })
    .then(res => console.log(res))
    .catch(err => console.error(err))
};
