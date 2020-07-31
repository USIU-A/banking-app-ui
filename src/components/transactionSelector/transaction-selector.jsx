import React from 'react';

import './transaction-selector.scss';
import RadioButtons from '../radioButtons/RadioButtons';
//import moment from 'moment';

export const DATA_CHOICES = {
    'Deposit': {
        id: 1,
        name: 'Deposit'
    },
    'Withdraw': {
        id: 2,
        name: 'Withdraw'
    },
    'Balance': {
        id: 3,
        name: 'Balance'
    }
};

export default class TransactionSelector extends React.Component {
    constructor(props) {
        super(props);

        const selectedDataType = DATA_CHOICES[props.default];
        props.onChange(...this.getDataType(selectedDataType));

        this.state = {
            selectedDataType
        };
    }

    render() {
        const {
            choices,
            onChange
        } = this.props;

        return (
            <div className='transaction-radio-buttons'>
                <RadioButtons
                    items={choices.map((choice) => DATA_CHOICES[choice])}
                    selected={this.state.selectedDataType}
                    onChange={(selectedDataType) => {
                        this.setState({ selectedDataType });
                        onChange(...this.getDataType(selectedDataType))
                    }}
                />
            </div>
        );
    }

    getDataType(selectedDataType){
        return [selectedDataType];
    }
}
