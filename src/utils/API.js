import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=300&nat=us";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
    getEmployees: function () {
        console.log(axios.get(BASEURL));
        return axios.get(BASEURL);
    }
}


