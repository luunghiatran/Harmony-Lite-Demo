import vibrator from '@system.vibrator';
import geolocation from '@system.geolocation';
import device from '@system.device';
import brightness from '@system.brightness';
import utils from '../../common/utils.js';

export default {
    data: {
        messageStatus: '',
        myMessage: '',
    },
    changeMessage(){
        //var that = this
        // callbacks use that.myMessage
        var message = "my new message";
        console.log('message ${message}');
        this.myMessage = message;
    },
    makeVibrate(){
        var that = this
        vibrator.vibrate({
            mode: 'short',
            success() {
                console.log('success to vibrate');
                that.messageStatus = "Vibrating";
            },
            fail(data, code) {
                console.log('handle fail, data = ${data}, code = ${code}');
                that.messageStatus = 'handle fail, data = ${data}, code = ${code}';
            },
        });
    },
    getLocation(){
        var that = this
        geolocation.getLocation({
            success: function(data) {
                console.log('success get location data. latitude:' + data.latitude + 'longitude:' + data.longitude);
                that.messageStatus = 'latitude: ' + data.latitude + ', longitude: ' + data.longitude;
            },
            fail: function(data, code) {
                console.log('fail to get location. code:' + code + ', data:' + data);
                that.messageStatus = 'fail to get location. code:' + code + ', data:' + data;
            },
        });
    },

    getDeviceInfo(){
        var that = this
        device.getInfo({
            success: function(data) {
                console.log('success get device info brand:' + data.brand);
                that.messageStatus = 'Device Info brand:' + data.brand;
            },
            fail: function(data, code) {
                console.log('fail get device info code:'+ code + ', data: ' + data);
                that.messageStatus = 'fail get device info code:'+ code + ', data: ' + data;
            },
        });
    },

    setBrightness(brightnessValue){
        var that = this
        brightness.setValue({
            value: brightnessValue,
            success: function(){
                console.log('handling set brightness success.');
                that.messageStatus = 'Brightness: '+ brightnessValue;
            },
            fail: function(data, code){
                console.log('handling set brightness value fail, code:' + code + ', data: ' + data);
            },
        });
    },
    touchMove(e){  // Handle the swipe event.
        if(e.direction == "right")  // Swipe right to Home.
        {
            utils.backToHome();
        }
    },

}