// import axios from "axios";
// axios.defaults.withCredentials = true;

// let doctors_data = [];
// async function setData(data){
// 	doctors_data = data;
// 	console.log(doctors_data);
// }

// try {
// 	await axios.get("https://safezen.onrender.com/doctorsData")
//     .then(res => setData(res.data))
//     .catch(err => console.error(err));
// } catch (err) {
// 	console.error(err.message);
// }
// export default doctors_data;


let doctors_data = [
    {
        "doctor_id": 1,
        "name": "Mrs. Priya Zoting",
        "profile_img": "/src/Priya Zoting.jpg",
        "specialization": "Counsellor|Psychologist|Psychotherapist",
        "qualification": "MA ( Clinical Psychology)|MS ( Counselling & Psychotherapy)"
    },
    {
        "doctor_id": 2,
        "name": "Dr. Latil Nandurkar",
        "profile_img": "/src/Dr. Lalit.jpg",
        "specialization": "Counselor|Psychologist",
        "qualification": "B.A.M.S|Master of psychological therapies|Master of science of psychology"
    },
    {
        "doctor_id": 3,
        "name": "Ms. Aditi Waghmare",
        "profile_img": "/src/Aditi.jpg",
        "specialization": "Counselor",
        "qualification": "Master in clinical psychology"
    },
    {
        "doctor_id": 4,
        "name": "Ms. Prerna Gaidhane",
        "profile_img": "/src/Prerna.jpg",
        "specialization": "Counselor",
        "qualification": "Masters in clinical psychology"
    }
];

export default doctors_data;