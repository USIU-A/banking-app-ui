import React from 'react';

// import './radioButtons.scss';

export default class RadioButtons extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            items,
            className
        } = this.props;

        return (
            <div className={`radio-buttons btn-group btn-group-toggle ${className}`}>
                {items.map((item, index) => this.renderButton(item, index))}
            </div>
        );
    }

    renderButton(item, index) {
        const {
            selected,
            onChange
        } = this.props;

        // Select the first option if none is selected
        const checked = selected ? item.id === selected.id : index === 0;

        return (
            <label key={item.id} className={`btn btn-outline-secondary ${checked ? 'active' : ''}`}>
                <input
                    type='radio'
                    name={item.name}
                    id={item.id}
                    autoComplete='off'
                    checked={checked}
                    onChange={() => onChange(item)}
                />
                {item.name}
            </label>
        );
    }
}
