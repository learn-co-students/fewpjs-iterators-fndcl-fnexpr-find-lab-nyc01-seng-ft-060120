

superbowlWin = (record) => {
  let object = record.find(record => record.result === 'W')
  return !!object ? object.year : undefined
}