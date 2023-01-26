const start = document.getElementById('start');
const one = document.getElementById('one')

    start.addEventListener('click', e => {
        one.classList.toggle('active')
    })
    
const btn = document.getElementById('btn');
const amount = document.getElementById('amount');
const phoneNumber = document.getElementById('phoneNumber');
let success = document.querySelector('.success');
let nn = document.getElementById('nn')
btn.addEventListener('click', e =>{
        /* // Set your app credentials
        const credentials = {
            apiKey: '51a01d34c0c7121f237cb06a896daed8ad2585b4be794d8a62cac6ce75735bea',
            username: 'nickiscott',
        }

        // Initialize the SDK
        const AfricasTalking = require('africastalking')(credentials);

        // Get the airtime service
        const airtime = AfricasTalking.AIRTIME;

        function sendAirtime() {
            const options = {
                recipients: [{
                    phoneNumber: phoneNumber.value,
                    currencyCode: "NGN",
                    amount: amount.value
                }]
            };

            // That’s it hit send and we’ll take care of the rest
            airtime.send(options)
                .then(response => {
                    console.log(response);
                }).catch(error => {
                    console.log(error);
                });
        }

        sendAirtime();
        console.log(1) */
        setTimeout(e => {
            success.style.display = 'block'
            nn.innerText = phoneNumber.value;
        },2000)

})





