import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const timeLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY) || 0;

function onTimeUpDate({ seconds }) {
   localStorage.setItem(LOCAL_STORAGE_KEY, seconds);
}

player.on('timeupdate', throttle(onTimeUpDate, 1000));


player.setCurrentTime(timeLocalStorage).then(function(error) {
}).catch(function(error) {
   switch (error.name) {
      case 'RangeError':
         break;
      default:
         break;
   }
});