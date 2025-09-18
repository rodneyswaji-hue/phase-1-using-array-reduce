const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const totalBatteries =  batteryBatches.reduce((sum, batch) => {
  return sum + batch;
}, 0);
// Code your solution here
