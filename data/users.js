const users = [{
    id: 1,
    name: "Richard Hendricks",
    email: "richard@piedpiper.com",
    tests: {
        test1 : {
            id: 100,
            date: Date.UTC(2019,3,1),
            name: "history",
            Grade: 100
        },
        test2 : {
            id: 101,
            date: Date.UTC(2019,5,6),
            name: "math",
            Grade: 90
        },
        test3 : {
            id: 102,
            date: Date.UTC(2019,12,1),
            name: "shit",
            Grade: 100
        }
    }
},
{
    id: 2,
    name: "Bertram Gilfoyle",
    email: "gilfoyle@piedpiper.com",
    tests: {
        test1 : {
            id: 100,
            date: Date.UTC(2019,3,1),
            name: "history",
            Grade: 60
        },
        test2 : {
            id: 101,
            date: Date.UTC(2019,5,6),
            name: "math",
            Grade: 70
        },
        test3 : {
            id: 102,
            date: Date.UTC(2019,12,1),
            name: "shit",
            Grade: 100
        }
    }
},
];

exports.users = users;

