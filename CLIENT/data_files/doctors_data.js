import axios from "axios";

let doctors_data = [];

async function setData(data){
	doctors_data = data;
	console.log(doctors_data);
}

try {
	await axios.get("http://localhost:4666/doctorsData")
    .then(res => setData(res.data))
    .catch(err => console.error(err));
} catch (err) {
	console.error(err.message);
}
export default doctors_data;
