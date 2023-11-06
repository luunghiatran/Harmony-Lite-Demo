import geolocation from '@system.geolocation';
import battery from '@system.battery';

export default {
    data: {
        index: 0,
        latlon: "",
        accuracy: 0,
        battery: 0,
        percentage: 0,
        myInterval: NaN,
        todolist: [
            {
                title: 'Check the System',
                date: '2021-01-01 10:00:00',
            },
            {
                title: 'Add Notification',
                date: '2021-01-02 20:00:00',
            },
            {
                title: 'Create New Repo',
                date: '2020-01-02 21:00:00',
            },
            {
                title: 'Other Sample Header',
                date: '2020-06-27 20:00:00',
            },
            {
                title: 'Other Sample Header',
                date: '2020-06-27 20:00:00',
            },
            {
                title: 'Other Sample Header',
                date: '2020-06-27 20:00:00',
            },
            {
                title: 'Other Sample Header',
                date: '2020-06-27 20:00:00',
            },
        ],
    },
    updateData() {
        var anchor = this;
        geolocation.getLocation({
            success: function (data) {
                anchor.latlon = "\n" + data.latitude + "\n" + data.longitude;
                anchor.accuracy = data.accuracy;
            }
        })
        battery.getStatus({
            success: function (data) {
                anchor.battery = data.level;
            }
        })
    },
    onInit() {
        console.log(">>> onInit")
        this.updateData();
    },
    startProgressBar(){
        var anchor = this;
        anchor.myInterval = setInterval(function () {
            if (anchor.percentage <= 100) {
                anchor.percentage += 1;
            } else {
                anchor.percentage = 0;
            }
        }, 100);
    },
    stopProgressBar(){
        var anchor = this;
        clearInterval(anchor.myInterval);
    },
};