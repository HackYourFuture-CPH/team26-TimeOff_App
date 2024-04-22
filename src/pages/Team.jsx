import MyCalendar from '../component/Calendar'
import CreateMember from '../component/CreateMember'
import CreateTimeoff from '../component/CreateTimeoff'
import TeamDetails from '../component/TeamDetails'

function Team(){
return(
  <>
<TeamDetails></TeamDetails>
<CreateMember></CreateMember>
<MyCalendar></MyCalendar>
<CreateTimeoff></CreateTimeoff>
</>
)}

export default Team