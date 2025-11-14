// function StudentList(){

//     const students = ["Vamsee", "Krishna", "Ravindra", "Reddy"];

//     return(
//         <>
//             {
//                 students.map((student)=>(<p>{student}</p>))
//             }
//         </>
//     )
// }

// export default StudentList;


function StudentList(){

    const students = [
        {
            id : 1, 
            name : "Vamseee"
        },
        {
            id : 2, 
            name : "Krishna"
        },
        {id : 3, name : "Ravindra"},
        {id : 4, name : "Reddy"},
        {id : 5, name : "Reddy"}
    ];

    return(
        <div className="p-3">
            <h2 className="text-2xl font-bold text-indigo-600 ml-3">Lists & Keys Demo</h2>
            {
                students.map((student)=>(
                <p className="p-3 bg-indigo-100 m-3 text-center rounded-2xl" key={student.id}>{student.name}
                </p>))
            }
        </div>
    )
}

export default StudentList;