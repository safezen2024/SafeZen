import axios from "axios";

let relillness_data = [];

async function setData(data){
	relillness_data = data;
}

try {
	await axios.get("http://localhost:4666/RelTherapy")
    .then(res => setData(res.data))
    .catch(err => console.error(err));
} catch (err) {
	console.error(err.message);
}

export default relillness_data;