import EditGroup from "./EditGroup";
import GroupMembers from "./GroupMembers";

const Group = ({ _id, name, description, members, handleGroupEdit }) => {
  const groupMembersDialogId = `group-members-${_id}`;
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
          <label htmlFor={groupMembersDialogId} className="btn btn-primary">
            Members
          </label>
          <input type="checkbox" id="edit-group" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <label
                htmlFor="edit-group"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="font-bold text-lg">Edit Group</h3>
              <EditGroup
                group={{ id: _id, name, description }}
                onSubmit={handleGroupEdit}
                action="edit"
              />
            </div>
          </div>
          <GroupMembers id={_id} members={members} />
        </div>
      </div>
    </div>
  );
};

export default Group;
