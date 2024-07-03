import axios from "axios";
axios.defaults.withCredentials = true;

let relillness_data = [];
async function setData(data){
	relillness_data = data;
}
try {
	await axios.get("https://safezen.onrender.com/RelTherapy")
    .then(res => setData(res.data))
    .catch(err => console.error(err));
} catch (err) {
	console.error(err.message);
}

export default relillness_data;