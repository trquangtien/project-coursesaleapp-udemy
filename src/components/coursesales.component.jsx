import React from 'react';
import Course from './course.component.jsx'

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

export default CourseSales;