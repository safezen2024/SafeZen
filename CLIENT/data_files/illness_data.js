import axios from "axios";

let illness_data = [];

async function setData(data){
	illness_data = data;
}
axios.defaults.withCredentials = true;
try {
	await axios.get("https://safezen.onrender.com/IndTherapy")
    .then(res => setData(res.data))
    .catch(err => console.error(err));
} catch (err) {
	console.error(err.message);
}

export default illness_data;