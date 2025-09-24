import Student from './Student'
import { students } from '../utils/students'

function TD2() {
  return (
    <>
      {
        students.map((student)=>(
          <Student key={student.id} firstName={student.firstName} lastName={student.lastName} campus={student.campus} devLanguage={student.devLanguage} avatar={student.avatar} isFromRi7={student.isFromRi7} />
        ))
      }
    </>
  )
}

export default TD2