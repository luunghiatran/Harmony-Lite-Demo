import router from '@system.router'
import utils from '../../common/utils.js';

export default {
    data: {
        dataFromDetail: 0,
    },
    gotoDetail() {
        router.replace({
            uri: 'pages/RouteBackDetailPage/RouteBackDetailPage',
            params: {
                sentData: 'data form HOME'
            }
        })
    },
    touchMove(e) {  // Handle the swipe event.
        if(e.direction == "right")  // Swipe right to exit.
        {
            utils.backToHome();
        }
    }
}

