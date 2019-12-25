import transactionFormComponent from './transaction-form.component';
import './transaction-form.style.css';
import '@uirouter/angularjs';
import transactionFormRoutes from './transaction-form.routes';
import approvalResponse from '../approval-response/approval-response.module';

const transactionFormModule = angular
    .module('transactionForm', ['ui.router', approvalResponse])
    .component('transactionForm', transactionFormComponent)
    .config(transactionFormRoutes)
    .name;

export default transactionFormModule;
