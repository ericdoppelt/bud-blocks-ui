import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LogoHeader from '../LogoHeader.js';
import store from '../UserStore';
import { observer } from 'mobx-react';
import {formatMoney, clampInput, addBalance, removeBalance, inputMoneyFormat } from '../Utils';
import './Bank.css';



@observer
class Bank extends Component {

  constructor(props) {
    super(props)

    this.state = {
      showDeposit: false,
      showWithdraw: false,
      withdrawShow: '',
      depositShow: ''
    }
  }

    depositMoney(e) {
      if (e.which === 13) {
        store.balance += Number(e.target.value);
        this.setState({depositShow: ''});
        addBalance(store.username, Number(e.target.value));
      }
    }

    withdrawMoney(e) {
      if (e.which === 13) {
        store.balance -= Number(e.target.value);
        this.setState({withdrawShow: ''});
        removeBalance(store.username, Number(e.target.value));
      }
    }

    handleWithdrawChange(e) {
      this.setState({withdrawShow: clampInput(e.target.value, 0, store.balance)})
    }

    handleDepositChange(e) {
      this.setState({depositShow: clampInput(e.target.value, 0, 999)})
    }

  render() {
    return (
    <body>
      <LogoHeader/>
        <div className = 'balanceHeader'>
          <h2> Balance: ${formatMoney(store.balance)} </h2>
        </div>
        <div className = 'deposit'>
          <h3>Deposit</h3>
          <TextField hintText="Amount" placeholder = 'Deposit Amount' type='text' value = {inputMoneyFormat(this.state.depositShow)} onChange={this.handleDepositChange.bind(this)} onKeyPress={this.depositMoney.bind(this)}/>
        </div>
        <div className = 'withdraw'>
          <h3>Withdraw</h3>
          <div>
            <TextField placeholder='Withdraw Amount' type='text' value = {inputMoneyFormat(this.state.withdrawShow)} onChange={this.handleWithdrawChange.bind(this)} onKeyPress={this.withdrawMoney.bind(this)}/>
          </div>
        </div>
    </body>
  )
}
}

export default Bank;
