import utils from '../../common/utils.js';

export default {
    data: {
        images: [
            { src: '/common/images/pic1.png' },
            { src: '/common/images/pic2.png' },
            { src: '/common/images/pic3.png' },
            { src: '/common/images/pic4.png' },
            { src: '/common/images/pic5.png' },
            { src: '/common/images/pic6.png' },
        ],
    },
    handleClick() {
        const animator = this.$refs.animator; // Obtain the DOM element whose ref attribute is animator.
        const state = animator.getState();
        console.log(state);
        if (state === 'paused') {
            animator.resume();
        } else if (state === 'stopped') {
            animator.start();
        } else {
            animator.pause();
        }
    },
    backAction() {
        utils.backToHome();
    },
}