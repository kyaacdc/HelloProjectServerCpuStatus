var Child = {
    props: ['cpuMessage'],
    template: '<p>{{cpuMessage}}</p>'
};

var vm = new Vue({
    el: '#app',
    data: {
        buttonName: 'Get CPU Load!',
        message: 'Server CPU usage',
        messageTitle: 'Get CPU Usage',
        cpuUsage: ' none ',
        isClicked: false,
        styleObjectBefore: {
            color: 'blue',
            fontSize: '30px'
        },
        styleObjectAfter: {
            color: 'red',
            fontSize: '50px'
        }

    },
    methods: {
        cpuLoading: function (event) {
            vm.isClicked = false;
            vm.buttonName = " ... please wait ... ";
            vm.cpuUsage = ' ... calculating ... ';
            $.ajax({
                url: 'cpu'})
                .done(function(data) {
                    console.log(data);
                    vm.isClicked = true;
                    cpuUsageValue = vm.cpuUsage = data;
                    vm.buttonName = 'Get CPU Load Again!';
                });
        }
    },
    components: {
        'cpuload': Child
    }
});
