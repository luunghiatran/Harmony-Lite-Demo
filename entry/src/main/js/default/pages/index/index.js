import router from '@system.router'
import app from '@system.app'


export default {
    data: {
    },
    clickAction(){
        router.replace({
            uri: 'pages/detail/detail'
        });
    },
    openPage($page){
        console.log($page);
        router.replace({
            uri: 'pages/'+$page
        });
    },
    touchMove(e){  // Handle the swipe event.
        if(e.direction == "right")  // Swipe right to exit.
        {
            this.appExit();
        }
    },
    appExit(){  // Exit the application.
        app.terminate();
    }
}