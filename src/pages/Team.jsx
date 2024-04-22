import MyCalendar from '../component/Calendar'
import CreateMember from '../component/CreateMember'
import CreateTimeoff from '../component/CreateTimeoff'
import DeleteTeam from '../component/DeleteMember'
import TeamDetails from '../component/TeamDetails'

function Team(){
return(
  <>
<TeamDetails></TeamDetails>
<CreateMember></CreateMember>
<DeleteTeam></DeleteTeam>
<MyCalendar></MyCalendar>
<CreateTimeoff></CreateTimeoff>

</>
)}

export default Team