// import axios from "axios";
// axios.defaults.withCredentials = true;

// let relillness_data = [];
// async function setData(data){
// 	relillness_data = data;
// 	console.log(relillness_data);
// }
// try {
// 	await axios.get("https://safezen.onrender.com/RelTherapy")
//     .then(res => setData(res.data))
//     .catch(err => console.error(err));
// } catch (err) {
// 	console.error(err.message);
// }


let relillness_data = [
    {
        "relillness_id": 1,
        "relillness_name": "Couples Counseling",
        "relillness_desc": "Pre-Marital Counseling: Prepares couples for marriage by addressing issues and setting expectations. Marriage Counseling: Helps couples resolve conflicts, improve communication, and reconnect. Conflict Resolution: Teaches effective conflict management and problem-solving skills."
    },
    {
        "relillness_id": 2,
        "relillness_name": "Family Counseling",
        "relillness_desc": "Parent-Child: Improves communication and understanding between parents and children. Blended Families: Guides families in navigating challenges of merging units. Siblings: Resolves conflicts and strengthens sibling bonds."
    },
    {
        "relillness_id": 3,
        "relillness_name": "Individual Relationship Counseling",
        "relillness_desc": "Self-Esteem: Boosts confidence to enhance relationships. Dating: Guides individuals in navigating dating challenges. Breakups: Supports healing and moving on from past relationships."
    },
    {
        "relillness_id": 4,
        "relillness_name": "Specialized Relationship Counseling",
        "relillness_desc": "LGBTQ+: Supports unique challenges for individuals and couples. Intercultural: Helps navigate cultural differences and build understanding. Long-Distance: Provides strategies to maintain intimacy and connection."
    }
];

export default relillness_data;