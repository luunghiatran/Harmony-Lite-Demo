import utils from '../../common/utils.js';

export default {
    data: {
        title: 'World'
    },
    touchMove(e){  // Handle the swipe event.
        if(e.direction == "right")  // Swipe right to exit.
        {
            utils.backToHome();
        }
    },
}