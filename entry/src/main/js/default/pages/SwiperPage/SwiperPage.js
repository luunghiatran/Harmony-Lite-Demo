import utils from '../../common/utils.js';
export default {
    data: {
        imagesList: [
            {
                id: 1,
                src: '/common/images/pic1.png'
            },
            {
                id: 2,
                src: '/common/images/pic2.png'
            },
            {
                id: 3,
                src: '/common/images/pic3.png'
            },
            {
                id: 4,
                src: '/common/images/pic4.png'
            },
            {
                id: 5,
                src: '/common/images/pic5.png'
            },
            {
                id: 6,
                src: '/common/images/pic6.png'
            },
        ],
    },
    touchMove(e){  // Handle the swipe event.
        if(e.direction == "right")  // Swipe right to exit.
        {
            utils.backToHome();
        }
    },
}