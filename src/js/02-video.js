import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const timeLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY) || 0;

player.on('timeupdate', throttle(onTimeUpDate, 1000));

function onTimeUpDate({ seconds }) {
   //console.log(seconds);
   localStorage.setItem(LOCAL_STORAGE_KEY, seconds);
}

player.setCurrentTime(timeLocalStorage).then(function(seconds) {
   // seconds = the actual time that the player seeked to
}).catch(function(error) {
   switch (error.name) {
       case 'RangeError':
           break;
       default:
           break;
   }
});