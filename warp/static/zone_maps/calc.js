const calcpoints = (x,y1,y2,rows) => {
  const points = [];
  for(var i = 0; i<rows; i++) {
    const step = +((y2-y1)/(rows-1)).toFixed(0);
    const start = y1 - 24;
    points.push([x-24,start+(i*step)])
  }
  return points.map(point => `${point[0]},${point[1]}`).join('\n');
}
