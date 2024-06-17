import axios from "axios";

let illness_data = [];

async function setData(data){
	illness_data = data;
}

try {
	await axios.get("http://localhost:4666/IndTherapy")
    .then(res => setData(res.data))
    .catch(err => console.error(err));
} catch (err) {
	console.error(err.message);
}

export default illness_data;