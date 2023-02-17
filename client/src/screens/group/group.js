import EditGroup from "./EditGroup";
import GroupMembers from "./GroupMembers";

const Group = ({ _id, name, description, members, handleGroupEdit }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="grid"></div>
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <label htmlFor="edit-group" className="btn btn-primary">
            Edit
          </label>
          <label htmlFor="group-members" className="btn btn-primary">
            Add Members
          </label>
          <EditGroup
            group={{ id: _id, name, description }}
            onSubmit={handleGroupEdit}
          />
          <GroupMembers id={_id} members={members} />
        </div>
      </div>
    </div>
  );
};

export default Group;
