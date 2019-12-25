
const chargeCard = function () {
    function initializeClickListener () {
        const userData = document.getElementById('chargebutton');
        if (userData) {
            userData.addEventListener('click', postData);
        }
    }

    function postData(event) {
        event.preventDefault();

        const url = 'http://127.0.0.1:5000/transactions';

        fetch(url, {
                method: 'POST',
                body: buildForm(),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            }).then(transactionValidationResponse)
            .catch((err) => console.log(err));
    }

    function buildForm () {
        let amount = document.getElementById('amount').value;
        let name = document.getElementById('name').value;
        let cardNumber = document.getElementById('cardNumber').value;
        let cardExpMonth = document.getElementById('cardExpMonth').value;
        let cardExpYear = document.getElementById('cardExpYear').value;
        let cardCvv = document.getElementById('cardCvv').value;

        return JSON.stringify({
            amount: amount,
            cardCvv: cardCvv,
            cardExpMonth: cardExpMonth,
            cardExpYear: cardExpYear,
            cardNumber: cardNumber,
            name: name
        })
    }

    function transactionValidationResponse(res) {
        if (res.status === 200) {
            window.location.href = 'index.html'
        }
        else{
            clearError();
            res.json().then((data) => {
                Object.keys(data).forEach(key=>{
                    document.getElementById(key + '-error').innerHTML = data[key];
                })
            });
        }
    }

    function clearError () {
        let elements = document.querySelectorAll('.errorMessage');
        for (let i = 0; i < elements.length; i++) {
            elements[i].innerHTML = '';
        }
    }

    return {'InitializeClickListener': initializeClickListener};
};

const processTransaction = chargeCard();

processTransaction.InitializeClickListener();


