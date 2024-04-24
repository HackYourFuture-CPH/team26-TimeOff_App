import MyCalendar from '../component/Calendar'
import CreateMember from '../component/CreateMember'
import CreateTimeoff from '../component/CreateTimeoff'
import DeleteTeam from '../component/DeleteMember'
import TeamDetails from '../component/TeamDetails'

function Team(){
return(
  <>
<TeamDetails />
<CreateMember />
<DeleteTeam />
<MyCalendar />
<CreateTimeoff />
</>
)}

export default Team