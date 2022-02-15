import axios from 'axios';

//https://evacuation-uep.herokuapp.com/
const instance = axios.create({
  baseURL: 'http://192.168.1.61:3000',
});

//n dd tanan na request maagi muna dd cn na config
//pinaka middleware

export default instance;
