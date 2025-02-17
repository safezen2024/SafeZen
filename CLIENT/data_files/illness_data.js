// import axios from "axios";
// axios.defaults.withCredentials = true;

// let illness_data = [];
// async function setData(data){
// 	illness_data = data;
// 	console.log(illness_data);
// }

// try {
// 	await axios.get("https://safezen.onrender.com/IndTherapy")
//     .then(res => setData(res.data))
//     .catch(err => console.error(err));
// } catch (err) {
// 	console.error(err.message);
// }


let illness_data = [
    {
        "illness_id": 1,
        "illness_name": "ANXIETY",
        "illness_desc": "Identifies triggers and underlying causes. Teaches coping strategies and relaxation techniques. Reduces symptoms using cognitive-behavioral methods."
    },
    {
        "illness_id": 2,
        "illness_name": "DEPRESSION",
        "illness_desc": "Provides a supportive environment to discuss feelings. Assists in identifying and changing negative thought patterns. Encourages the development of healthy lifestyle habits"
    },
    {
        "illness_id": 3,
        "illness_name": "EMOTIONAL DEVELOPMENT",
        "illness_desc": "Offers support during significant life events (e.g., moving, divorce). Helps in adjusting to new circumstances and building resilience. Provides strategies to cope with uncertainty and stress."
    },
    {
        "illness_id": 4,
        "illness_name": "POST-LOSS ADAPTAION",
        "illness_desc": "Supports the grieving process and offers a space to express emotions. Assists in finding ways to honor and remember loved ones. Helps in rebuilding life after loss."
    },
    {
        "illness_id": 5,
        "illness_name": "LOW SELF ESTEEM",
        "illness_desc": "Encourages self-exploration and understanding of self-worth. Provides tools to build confidence and assertiveness. Challenges negative self-perceptions and promotes positive self-talk."
    },
    {
        "illness_id": 6,
        "illness_name": "MOOD INSTABILITY",
        "illness_desc": "Teaches techniques for emotional regulation and mindfulness. Helps identify and understand emotional triggers. Develops strategies to manage and express emotions healthily."
    },
    {
        "illness_id": 7,
        "illness_name": "CHALLENGES IN SOCIAL RELATIONSHIP",
        "illness_desc": "Offers insights into relationship dynamics and patterns. Improves communication skills and conflict resolution. Supports building healthier and more fulfilling relationships."
    },
    {
        "illness_id": 8,
        "illness_name": "ANGER ISSUES",
        "illness_desc": "Helps identify the root causes of anger. Teaches anger management techniques and coping strategies. Promotes healthier ways of expressing and dealing with anger."
    },
    {
        "illness_id": 9,
        "illness_name": "FINANCIAL STRESS",
        "illness_desc": "Provides a space to discuss and manage financial anxieties. Offers strategies for budgeting and financial planning. Supports emotional well-being amidst financial challenges."
    },
    {
        "illness_id": 10,
        "illness_name": "ADDICTION",
        "illness_desc": "Assists in understanding the nature and triggers of addiction. Provides strategies for managing cravings and avoiding relapse. Supports recovery through behavioral changes and support networks."
    },
    {
        "illness_id": 11,
        "illness_name": "COPING WITH MIDLIFE CHALLENGES",
        "illness_desc": "Offers a space to explore identity and life purpose. Helps in setting and achieving new life goals. Supports navigating the emotional and psychological aspects of midlife."
    },
    {
        "illness_id": 12,
        "illness_name": "SELF-INJURIOUS THOUGHTS",
        "illness_desc": "Provides immediate support and intervention. Helps in developing safety plans and coping mechanisms. Offers ongoing support to address underlying issues."
    },
    {
        "illness_id": 13,
        "illness_name": "WORKPLACE PRESSURE",
        "illness_desc": "Assists in managing work or school-related pressures. Provides strategies for time management and productivity. Supports career planning and academic success."
    },
    {
        "illness_id": 14,
        "illness_name": "UNRESOLVED LIFE ISSUES",
        "illness_desc": "Helps in identifying and breaking negative patterns. Provides tools to implement lasting behavioral changes. Encourages self-reflection and personal growth."
    },
    {
        "illness_id": 15,
        "illness_name": "Creating a secure environment",
        "illness_desc": "Offers a non-judgmental and confidential environment. Supports processing and healing from past trauma. Encourages the development of healthy coping mechanisms."
    }
];

export default illness_data;