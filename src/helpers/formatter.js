export function formatTime (time) {
  let hours = 0
  if (time >= 3600) {
    hours = Math.floor(time / 3600)
    time = time - hours * 3600
  }
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time - minutes * 60)
  return (hours ? pad(hours) + ':' : '') + pad(minutes) + ':' + pad(seconds)
}

function pad (number) {
  return (number < 10 ? '0' : '') + number.toFixed(0)
}
