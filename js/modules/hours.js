export default function initHours () {
  const bussinesHour = document.querySelector('[data-week]');
  
  const week = bussinesHour.dataset.week.split(',').map(Number);
  const hours = bussinesHour.dataset.hours.split(',').map(Number);
  
  
  const today = new Date();
  const dayToday = today.getDay();
  const hoursNow = today.getHours();
  
  const openWeek = week.indexOf(dayToday) !== -1;
  
  const opening = (hoursNow > hours[0] && hoursNow < hours[1]);
  
  if(openWeek && opening) {
    bussinesHour.classList.add('open')
  }   
}


