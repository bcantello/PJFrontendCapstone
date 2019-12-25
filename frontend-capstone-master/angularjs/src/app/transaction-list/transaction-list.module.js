import transactionListComponent from './transaction-list.component';
import './transaction-list.styles.css';
import '@uirouter/angularjs';
import TransactionListService from './transaction-list.service';
import transactionRoutes from './transaction-list.routes';
import capitalizeFilter from './capitalize.filter';
import transactionForm from '../transaction-form/transaction-form.module';

const transactionList = angular
    .module('transactionList', ['ui.router', transactionForm])
    .component('transactionList', transactionListComponent)
    .service('transactionListService', TransactionListService)
    .config(transactionRoutes)
    .filter('capitalize', capitalizeFilter)
    .name;

export default transactionList;
