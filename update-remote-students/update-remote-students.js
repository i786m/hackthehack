// Please do not change the name of this function
function updateRemoteStudents (students) {
 let updatedStudents = [...students]  
 console.log(updatedStudents)
 updatedStudents.forEach((student)=>{
    if(!student.hasOwnProperty('location')){
      student['location']='remote'
    }
  })
  console.log(students, '-->',updatedStudents)
  return updatedStudents
}

module.exports = updateRemoteStudents;
