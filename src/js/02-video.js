import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onTimeUpDate, 1000));

function onTimeUpDate({ seconds }) {
   //console.log(seconds);
   localStorage.setItem(LOCAL_STORAGE_KEY, seconds);
}

console.log(localStorage.getItem(LOCAL_STORAGE_KEY));

player.setCurrentTime(localStorage.getItem(LOCAL_STORAGE_KEY)).then(function(seconds) {
   // seconds = the actual time that the player seeked to
}).catch(function(error) {
   switch (error.name) {
       case 'RangeError':
           // the time was less than 0 or greater than the video’s duration
           break;

       default:
           // some other error occurred
           break;
   }
});