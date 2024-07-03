import axios from "axios";
axios.defaults.withCredentials = true;

let illness_data = [];
async function setData(data){
	illness_data = data;
}

try {
	await axios.get("https://safezen.onrender.com/IndTherapy")
    .then(res => setData(res.data))
    .catch(err => console.error(err));
} catch (err) {
	console.error(err.message);
}

export default illness_data;