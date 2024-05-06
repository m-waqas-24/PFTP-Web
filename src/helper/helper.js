// Base URL LOCAL
// const base_api = "http://127.0.0.1:8000/api/";
// const base_img = "http://127.0.0.1:8000/";
const user = JSON.parse(localStorage.getItem("authUser"));
// Base URL Demo Live
// const base_api = "https://dev-api.pftpedu.org/api/";
// const base_img = "https://dev-api.pftpedu.org/";

// Base URL Live
const base_api = "https://aws.pftpedu.org/api/";
const base_img = "https://aws.pftpedu.org/";
const base_onsite_api = "https://admin-onsite.pftpedu.org/api/";
const base_onsite_img = "https://admin-onsite.pftpedu.org/";

module.exports = global.config = {
    URL: {
        api: {
            public: base_api+"public/",
            user: base_api+"user/",
            apply: base_api+"apply/",
            student: base_api+"student/",
        },
        img: {
            public: base_img+"storage/",
        }
        ,
        onsite_img: {
            public: base_onsite_img+"storage/",
        },
        onsite_api: {
            public: base_onsite_api+"public/",
        }
    },
    Token : user ? user.token : "",
    Login : user ? user.login : false,
    FBToken: "EAAVcfYF2TwYBAD4Eg81jZAzaQAz2pyaZCuLIFVccQfXZBtFso5VQGQhIoHoi2QlTqIkwMsbrohaZBvsZCVXtWOCLlH2sB4Ip1moFtCeHAO0n5ErGufOS0VEFFJ2eUrmJOsO3u5hfMxQahL8JV47jCz5WFNZB8CfTnbOj5iN0m1hnITP2QFUaejEBNxfn5FA7cZD"
    // other global config variables you wish
};