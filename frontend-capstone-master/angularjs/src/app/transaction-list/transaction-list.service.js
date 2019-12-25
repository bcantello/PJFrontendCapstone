export default class TransactionListService {
    constructor($http) {
        this.http = $http;
    }

    getTransactions() {
        return this.http
            .get('http://127.0.0.1:5000/transactions')
            .then((transactions) => transactions.data);
    }
}
