const employee={
    empId:2,
    name:'ram',
    designation:"java developer",
    techstack:[{
        plang:"java",
        server:"Apache Tomcat",
        database:"mysql",
        database2:"mongdb",
    },
    {
        plang:"python",
        server:"Django",
        database:"mysql",
        database2:"mongdb",
    },
    {
        plang:"React",
        server:"Node server",
        database:"mysql",
        database2:"mongdb",
    },
    ]
}
console.log(employee)
console.log(employee.techstack[0])
console.log(employee.techstack[1])
console.log(employee.techstack[2].server)
