import utils from '../../common/utils.js';

export default {
    data: {
        country: [
                "China",
                "Pakistan",
                "Saudi Arabia",
                "UAE",
                "America",
                "Canada"
        ],
    },
    touchMove(e){  // Handle the swipe event.
        if(e.direction == "right")  // Swipe right to exit.
        {
            utils.backToHome();
        }
    },
}