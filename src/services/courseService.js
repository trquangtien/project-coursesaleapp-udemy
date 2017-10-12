import axios from 'axios'

class CourseService {

    async getAllCoursesAsync() {
        return await axios.get('https://demonodejsserver.herokuapp.com/api/course');
    }

    static getAllCourses() {
        return axios.get('https://demonodejsserver.herokuapp.com/api/course');
    }
}

export default CourseService;