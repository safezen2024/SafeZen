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
        "illness_desc": "Helps identify triggers and underlying causes.| Teaches coping strategies and relaxation techniques. | Reduces symptoms through cognitive-behavioral techniques\r "
    },
    {
        "illness_id": 2,
        "illness_name": "DEPRESSION",
        "illness_desc": "Provides a supportive environment to discuss feelings.\r | Assists in identifying and changing negative thought patterns.\r | Encourages the development of healthy lifestyle habits\r "
    },
    {
        "illness_id": 3,
        "illness_name": "EMOTIONAL DEVELOPMENT",
        "illness_desc": "Offers support during significant life events (e.g., moving, divorce).\r | Helps in adjusting to new circumstances and building resilience.\r | Provides strategies to cope with uncertainty and stress.\r "
    },
    {
        "illness_id": 4,
        "illness_name": "POST-LOSS ADAPTAION",
        "illness_desc": "Supports the grieving process and offers a space to express emotions.\r | Assists in finding ways to honor and remember loved ones.\r | Helps in rebuilding life after loss.\r "
    },
    {
        "illness_id": 5,
        "illness_name": "LOW SELF ESTEEM",
        "illness_desc": "Encourages self-exploration and understanding of self-worth.\r | Provides tools to build confidence and assertiveness.\r | Challenges negative self-perceptions and promotes positive self-talk.\r "
    },
    {
        "illness_id": 6,
        "illness_name": "MOOD INSTABILITY",
        "illness_desc": "Teaches techniques for emotional regulation and mindfulness.\r | Helps identify and understand emotional triggers.\r | Develops strategies to manage and express emotions healthily.\r "
    },
    {
        "illness_id": 7,
        "illness_name": "CHALLENGES IN SOCIAL RELATIONSHIP",
        "illness_desc": "Offers insights into relationship dynamics and patterns.\r | Improves communication skills and conflict resolution.\r | Supports building healthier and more fulfilling relationships.\r "
    },
    {
        "illness_id": 8,
        "illness_name": "ANGER ISSUES",
        "illness_desc": "Helps identify the root causes of anger.\r | Teaches anger management techniques and coping strategies.\r | Promotes healthier ways of expressing and dealing with anger.\r "
    },
    {
        "illness_id": 9,
        "illness_name": "FINANCIAL STRESS",
        "illness_desc": "Provides a space to discuss and manage financial anxieties.\r | Offers strategies for budgeting and financial planning.\r | Supports emotional well-being amidst financial challenges.\r "
    },
    {
        "illness_id": 10,
        "illness_name": "ADDICTION",
        "illness_desc": "Assists in understanding the nature and triggers of addiction.\r | Provides strategies for managing cravings and avoiding relapse.\r | Supports recovery through behavioral changes and support networks.\r "
    },
    {
        "illness_id": 11,
        "illness_name": "COPING WITH MIDLIFE CHALLENGES",
        "illness_desc": "Offers a space to explore identity and life purpose.\r | Helps in setting and achieving new life goals.\r | Supports navigating the emotional and psychological aspects of midlife.\r "
    },
    {
        "illness_id": 12,
        "illness_name": "SELF-INJURIOUS THOUGHTS",
        "illness_desc": "Provides immediate support and intervention.\r | Helps in developing safety plans and coping mechanisms.\r | Offers ongoing support to address underlying issues."
    },
    {
        "illness_id": 13,
        "illness_name": "WORKPLACE PRESSURE",
        "illness_desc": "Assists in managing work or school-related pressures.\r | Provides strategies for time management and productivity.\r | Supports career planning and academic success.\r "
    },
    {
        "illness_id": 14,
        "illness_name": "UNRESOLVED LIFE ISSUES",
        "illness_desc": "Helps in identifying and breaking negative patterns.\r| Provides tools to implement lasting behavioral changes.\r | Encourages self-reflection and personal growth.\r "
    },
    {
        "illness_id": 15,
        "illness_name": "Creating a secure environment",
        "illness_desc": "Offers a non-judgmental and confidential environment.\r | Supports processing and healing from past trauma.\r | Encourages the development of healthy coping mechanisms."
    }
];

export default illness_data;