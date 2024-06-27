import axios from "axios";

let relillness_data = [];

async function setData(data){
	relillness_data = data;
}
axios.defaults.withCredentials = true;
try {
	await axios.get("https://safezen.onrender.com/RelTherapy")
    .then(res => setData(res.data))
    .catch(err => console.error(err));
} catch (err) {
	console.error(err.message);
}

export default relillness_data;