import React from 'react';

class Course extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            active: false
        };
    }

    clicker() {
        var active = !this.state.active;
        this.setState({
            active: active,
        });

        this.props.sumPriceHandle(active ? this.props.price : -this.props.price);
    }

    render() {
        return (
            <div>
                <p className={this.state.active ? 'active' : ''} onClick={this.clicker.bind(this)}>{this.props.name} <b>${this.props.price}</b></p>
            </div>
        );
    }
}

export default Course;