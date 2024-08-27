const notificationTemplate = document.getElementsByClassName('notification-template');
const notificationStatus = document.getElementsByClassName('notification-status');
const markAll = document.getElementById('mark-all');
const countNotification = document.getElementById('notification-count')

for (let i = 0; i < notificationTemplate.length; i++) {

   notificationTemplate[i].addEventListener('click', function() {
        console.log('Notify me');
        notificationTemplate[i].style.backgroundColor = 'white';
        unreadNotification--;
        countNotification.textContent = unreadNotification;

        if (unreadNotification < 0) {
            countNotification.textContent = '0'
        }

      /*  if (notificationTemplate[i].style.backgroundColor = 'white') {
            for (let i = 0; i < notificationStatus.length; i++) {
                notificationStatus[i].style.backgroundColor = 'white';
            };
        } */

        statusUpdate()
    }, {once: true});
};


function statusUpdate() {
    for (let i = 0; i < notificationStatus.length; i++) {
        notificationStatus[i].style.backgroundColor = 'white';
    };
};

markAll.addEventListener('click', function() {
    for (let i = 0; i < notificationTemplate.length; i++) {
        notificationTemplate[i].style.backgroundColor = 'white';
    };

    countNotification.textContent = '0';
    statusUpdate();
});

let unreadNotification = 7;

countNotification.textContent = unreadNotification
    