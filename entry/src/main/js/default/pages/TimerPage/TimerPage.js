import router from '@system.router'
import utils from '../../common/utils.js';

export default {
    data: {
        value: 0,
        timeoutID: 0,
        intervalID: 0,
    },

    setTimeOut() {
        var that = this;
        this.timeoutID = setTimeout(function() {
            console.log('do after 1s delay.');
            that.value += 1;
        }, 1000);
    },
    clearTimeOut() {
        clearTimeout(this.timeoutID);
        this.value = 0;
    },


    setInterval() {
        var that = this;
        this.intervalID = setInterval(function() {
            console.log('do very 1s.');
            that.value += 1;
        }, 1000);
    },
    clearInterval() {
        clearInterval(this.intervalID);
        this.value = 0;
    },

    touchMove(e) {  // Handle the swipe event.
        if(e.direction == "right")  // Swipe right to exit.
        {
            utils.backToHome();
        }
    },
}
