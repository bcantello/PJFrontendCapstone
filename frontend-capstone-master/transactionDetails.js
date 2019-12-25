
const createTransactionTable = function () {
    const getTransactionData = async function () {
        const url = 'http://127.0.0.1:5000/transactions';
        let transactionPayload = await fetch(url);
        let transactionData = await transactionPayload.json();
        return transactionData;
    };
  
    const compileTable = async function () {
        let transData = await getTransactionData();
        let frag = document.createDocumentFragment();
        for (let x of transData.transactions) {
            let tr = document.createElement('tr');
            tr.innerHTML = `
            <td><input type="checkbox"></td>
            <td>${x.status}</td>
            <td>${x.name}</td>
            <td>${x.amount}</td>
            <td>${x.created}</td>
            `
            frag.appendChild(tr);
        }
        document.querySelector('tbody').appendChild(frag);
    };

    return {'compileTable': compileTable}
};

const createTable = createTransactionTable();

createTable.compileTable();