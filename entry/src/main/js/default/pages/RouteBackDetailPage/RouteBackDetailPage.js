import router from '@system.router'
import utils from '../../common/utils.js';

export default {
    data: {
        sentData: 'this is data',
    },
    onInit() {
        console.log('From Index Page' + this.sentData)

    },

    gotoHome() {
        router.replace({
            uri: 'pages/RouteBackHomePage/RouteBackHomePage',
            params: {
                dataFromDetail: 'data form DETAIL'
            }
        })
    }
}
