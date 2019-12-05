function doPost(e){
  // Lambda から POST されたパラメータを整形
  const params = JSON.parse(e.postData.getDataAsString())
  const clickType = params.clickType
  createEvents(clickType)
}

function createEvents(clickType) {
  // Googleカレンダーの取得
  const calendar = CalendarApp.getDefaultCalendar()
  const startTime = new Date()
  const endTime = new Date()
  var title = null
  var color = null
  // clickType によってタイトルとイベントの色を振分け
  switch(clickType) {
    case '1':
      title = 'おしっこ'
      color = CalendarApp.EventColor.PALE_BLUE
      break;
    case '2':
      title = 'ウンチ'
      color = CalendarApp.EventColor.RED
      break;
    case '3':
      title = 'おっぱい'
      color = CalendarApp.EventColor.YELLOW
      break;
   }
  // イベントを作成する
  calendar.createEvent(title, startTime, endTime).setColor(color)
}
