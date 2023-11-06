import utils from '../../common/utils.js';

export default {
    data: {
        progressNumber: 0,
    },
    updateProgress() {
        if(this.progressNumber > 99){
            this.progressNumber = 0
        } else {
            this.progressNumber = this.progressNumber + 10
        }
    },
    touchMove(e) {  // Handle the swipe event.
        if(e.direction == "right")  // Swipe right to exit.
        {
            utils.backToHome();
        }
    }
}
