import { useState } from "react";
import { useMutation } from "react-query";
import AsyncSelect from "react-select/async";
import { getUsersByUsername, patchGroupMembers } from "../../utils/apiUtils";

const GroupMembers = ({ id, members }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const addMembersMutation = useMutation(patchGroupMembers);
  const handleAddMembers = () => {
    const addUserOperation = selectedOption.map((members) => ({
      id: members.value,
      operation: "add",
    }));
    addMembersMutation.mutate({
      groupId: id,
      memberOperation: addUserOperation,
    });
  };

  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="group-members" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label
            htmlFor="group-members"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Group Members</h3>
          <div className="grid grid-cols-12 mt-4">
            <div className="col-span-10 mr-4">
              <AsyncSelect
                loadOptions={getUsersByUsername}
                onChange={setSelectedOption}
                isMulti
              />
            </div>
            <div className="col-span-2 text-right">
              <label
                htmlFor="my-modal"
                className="btn"
                onClick={handleAddMembers}
              >
                Add
              </label>
            </div>
          </div>
          <div className="h-96 mt-4 overflow-auto">
            {members.map((member) => (
              <div key={member._id} className="p-2">
                {member.username}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupMembers;
