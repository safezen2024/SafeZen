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
        "relillness_desc": "Pre-Marital Counseling: Helping couples prepare for marriage by addressing potential issues and setting realistic expectations. | Marriage Counseling: Assisting married couples in resolving conflicts, improving communication, and reigniting their connection. | Conflict Resolution: Teaching effective conflict management and problem-solving techniques to foster a healthier relationship.\n"
    },
    {
        "relillness_id": 2,
        "relillness_name": "Family Counseling",
        "relillness_desc": "Parent-Child Relationships: Addressing issues between parents and children to improve communication and understanding. | Blended Family Issues: Helping families navigate the complexities of merging different family units. | Sibling Relationships: Resolving conflicts and fostering stronger bonds between siblings.\n"
    },
    {
        "relillness_id": 3,
        "relillness_name": "Individual Relationship Counseling",
        "relillness_desc": "Self-Esteem and Confidence: Building self-esteem and confidence to improve overall relationship dynamics. | Dating and Single Life: Offering guidance on dating challenges and helping individuals find fulfilling relationships. | Healing from Breakups: Providing support and strategies for moving on from past relationships.\n"
    },
    {
        "relillness_id": 4,
        "relillness_name": "Specialized Relationship Counseling",
        "relillness_desc": "LGBTQ+ Relationships: Addressing unique challenges faced by LGBTQ+ individuals and couples. | \nIntercultural Relationships: Helping couples navigate cultural differences and enhance mutual understanding. | Long-Distance Relationships: Offering strategies to maintain intimacy and connection despite physical distance\n"
    }
];

export default relillness_data;