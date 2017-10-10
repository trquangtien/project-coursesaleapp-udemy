import React from 'react';
import Course from './course.component.jsx';
import CourseService from './../services/courseService.js';

class CourseSales extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            total: 0
        }
    }

    loadDataFromAPI() {
        CourseService.getAllCourses().then(res => {
            console.log(res.data);
        });
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

                <br /><br />
                <button onClick={this.loadDataFromAPI.bind(this)}>Test</button>
            </div>
        );
    }
}

export default CourseSales;