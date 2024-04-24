import MyCalendar from '../component/Calendar'
import CreateMember from '../component/CreateMember'
import CreateTimeoff from '../component/CreateTimeoff'
import DeleteTeam from '../component/DeleteMember'
import TeamMembers from '../component/TeamDetails'
import MembersList from '../component/MembersList'
import '../styles/team.css'

function Team(){
return(
  <>
  <section className="welcome-team">
    {/* <h1>Welcom Back, {team.team_name}</h1> */}
    <MembersList></MembersList>
  </section>
  <div className="container-section">
    <section className="left-section">
      <section className="TeamMember">
        <TeamMembers></TeamMembers>
      </section>
      <section className="MyCalendar">
        <MyCalendar></MyCalendar>
      </section>
    </section>
    <section className="right-section">
      <section className="CreateMember">
        <CreateMember></CreateMember>
        <DeleteTeam></DeleteTeam>
        <CreateTimeoff></CreateTimeoff>
      </section>
      <section className="DayOff">
        <h3>Day Off Rank</h3>
      </section>
    </section>
  </div>

</>
)}

export default Team