import axios from 'axios'

class CourseService {

    static getAllCourses() {
        return axios.get('https://demonodejsserver.herokuapp.com/api/course');
    }
}

export default CourseService;