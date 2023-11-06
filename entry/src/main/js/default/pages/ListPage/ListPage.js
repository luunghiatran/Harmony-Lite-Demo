import app from '@system.app'
import utils from '../../common/utils.js';


export default {
    data: {
        arrayData: [
            {id: 1, name: 'jack', age: 18},
            {id: 2, name: 'tony', age: 18},
        ],
    },
    touchMove(e){  // Handle the swipe event.
        if(e.direction == "right")  // Swipe right to exit.
        {
            utils.backToHome();
        }
    },
}