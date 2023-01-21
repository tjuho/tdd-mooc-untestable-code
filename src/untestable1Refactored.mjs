const millisPerDay = 24 * 60 * 60 * 1000;

export function daysUntilChristmas() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return daysUntilChristmasHelper(today);
}

export function daysUntilChristmasHelper(date){
  const christmasDay = new Date(date.getFullYear(), 12 - 1, 25);
  if (date.getTime() > christmasDay.getTime()) {
    christmasDay.setFullYear(new Date().getFullYear() + 1);
  }
  return Math.floor((christmasDay.getTime()-date.getTime())/millisPerDay);
}