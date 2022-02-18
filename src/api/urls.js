import axios from 'axios';

//https://evacuation-uep.herokuapp.com/
const instance = axios.create({
  baseURL: 'https://evacuation-uep.herokuapp.com',
});

//n dd tanan na request maagi muna dd cn na config
//pinaka middleware

export default instance;
