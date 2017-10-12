import React from 'react';
import Course from './course.component.jsx';
import CourseService from './../services/courseService.js';

class CourseSales extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            arrCourses: []
        }
    }

    async testAsyncToGetAPI() {
        var arrTest = [];

        try {
            var res = await new CourseService().getAllCoursesAsync();
            arrTest = res.data;

            console.log(arrTest);
        }
        catch (err) {
            console.log(err);
        }
    }

    componentDidMount() {
        CourseService.getAllCourses().then(res => {
            this.setState({
                arrCourses: res.data
            });
        }).catch(function (err) {
            console.log(err);
        });
    }

    sumPrice(price) {
        this.setState({
            total: this.state.total + price
        });
    }

    render() {
        var courseList = this.state.arrCourses.map((item, i) => {
            return <Course name={item.name}
                price={item.price}
                key={i}
                sumPriceHandle={this.sumPrice.bind(this)}
                active={item.active} />
        });

        var totalRender = this.state.total <= 0 ? 0 : parseFloat(this.state.total).toFixed(2);

        return (
            <div>
                <h1>You can buy courses:</h1>
                <div id="courses">
                    {courseList}
                    <p id="total">Total: <b>${totalRender}</b></p>
                </div>
                <br /><br />
                <button onClick={this.testAsyncToGetAPI.bind(this)}>Test Async</button>
            </div>
        );
    }
}

export default CourseSales;