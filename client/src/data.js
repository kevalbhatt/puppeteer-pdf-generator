import loginData from './logindata';
import goalData from './goaldata';

var mainData = {
  Login: {
    data: loginData,
    graphType: "Bar",
    filters: [{
        label: "User Type",
        name: "userType",
        type: "list",
        options: [{
            label: "Admin",
            value: "admin"
          }, {
            label: "Student",
            value: "student"
          },
          {
            label: "Teacher",
            value: "teacher"
          }
        ]
      }, {
        label: "Login From",
        name: "loginFrom",
        type: "date",
        options: {
          format: "DD-MMM-YYYY",
          mode: "days"
        }
      },
      {
        label: "Login To",
        name: "loginTo",
        type: "date",
        options: {
          format: "DD-MMM-YYYY",
          mode: "days"
        }
      }
    ]
  },
  Goal: {
    data: goalData,
    graphType: "GroupBar",
    filters: [{
      label: "ClassRoom",
      name: "classRoom",
      type: "list",
      options: [{
          label: "test",
          value: "test"
        }, {
          label: "abc",
          value: "abc"
        },
        {
          label: "cxz",
          value: "cxz"
        }
      ]
    }]
  },
};

const reportType = [{
  id: 1,
  name: "Login"
}, {
  id: 2,
  name: "Goal"
}];

export {
  reportType,
  mainData
};
