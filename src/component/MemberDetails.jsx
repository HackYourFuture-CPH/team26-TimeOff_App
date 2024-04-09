import CreateTimeoff from "./CreateTimeoff";
import DeleteMember from "./DeleteMember";


function MemberDetails({ member }) {
  return (
    <div className="member-details">
      <h2>{member.first_name}</h2>
      <p>Booked days off: {member.assigned_dayoff}</p>
      <p>Allowed Days off: {member.allowed_dayoff}</p>

      <div className="form-container">
        {member.assigned_dayoff >= member.allowed_dayoff ? (
          <p>You have used all your allowed days off. 😞</p>
        ) : (
          <>
          <CreateTimeoff memberId={member.id} maxDaysoff={member.allowed_dayoff} />
          <DeleteMember memberId={member.id} />
          </>
        )}
      </div>
    </div>
  );
}

export default MemberDetails;
