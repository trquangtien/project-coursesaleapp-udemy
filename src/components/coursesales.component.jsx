import React from 'react';

class CourseSales extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            total: 0
        }
    }

    sumPrice(price) {
        this.setState({
            total: this.state.total + price
        });
    }

    render() {
        var courseList = this.props.items.map((item, i) => {
            return <Course name={item.name}
                price={item.price}
                key={i}
                sumPriceHandle={this.sumPrice.bind(this)}
                active={item.active} />
        });
        return (
            <div>
                <h1>You can buy courses:</h1>
                <div id="courses">
                    {courseList}
                    <p id="total">Total: <b>${this.state.total}</b></p>
                </div>
            </div>
        );
    }
}

class Course extends React.Component {

    clicker() {
        var active = !this.state.active;
        this.setState({
            active: active,
        });

        this.props.sumPriceHandle(active ? this.props.price : -this.props.price);
    }

    constructor(props) {
        super(props);

        this.state = {
            active: false
        };
    }

    render() {
        return (
            <div>
                <p className={this.state.active ? 'active' : ''} onClick={this.clicker.bind(this)}>{this.props.name} <b>${this.props.price}</b></p>
            </div>
        );
    }
}

export default CourseSales;