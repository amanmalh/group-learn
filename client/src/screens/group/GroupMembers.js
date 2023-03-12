import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import AsyncSelect from "react-select/async";

import {
  fetchGroupById,
  getUsersByUsername,
  patchGroupMembers,
} from "../../utils/apiUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button, Grid, Modal } from "semantic-ui-react";

const GroupMembers = ({ id, modalOpened, setModalOpened }) => {
  const queryClient = useQueryClient();
  const [selectedOption, setSelectedOption] = useState(null);
  const { data } = useQuery(`group-${id}`, () => fetchGroupById(id));
  const dialogId = "group-members-" + id;
  const updateMembersMutation = useMutation(patchGroupMembers, {
    onSuccess: () => {
      queryClient.invalidateQueries(`group-${id}`);
    },
  });

  const handleAddMembers = () => {
    const addUserOperation = selectedOption.map((members) => ({
      id: members.value,
      operation: "add",
    }));
    updateMembersMutation.mutate({
      groupId: id,
      memberOperation: addUserOperation,
    });
  };

  const removeMember = (memberId) => {
    const removeUserOperation = [
      {
        id: memberId,
        operation: "remove",
      },
    ];
    updateMembersMutation.mutate({
      groupId: id,
      memberOperation: removeUserOperation,
    });
  };

  return (
    <>
      {/* Put this part before </body> tag */}
      {/* <input type="checkbox" id={dialogId} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label
            htmlFor={dialogId}
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
            {!data && <div>Loading...</div>}
            {data &&
              data.members.map((member) => (
                <div
                  key={member._id}
                  className="p-2 hover:bg-base-300 rounded-lg"
                >
                  <div className="grid grid-cols-12">
                    <div className="col-span-11">{member.username}</div>
                    <div className="col-span-1">
                      <FontAwesomeIcon
                        className="cursor-pointer"
                        icon={faXmark}
                        onClick={() => removeMember(member._id)}
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div> */}

      <Modal
        onClose={() => setModalOpened(false)}
        onOpen={() => setModalOpened(true)}
        open={modalOpened}
      >
        <Modal.Header>Group Members</Modal.Header>
        <Modal.Content>
          <Grid>
            <Grid.Row>
              <Grid.Column width={10}>
                <AsyncSelect
                  loadOptions={getUsersByUsername}
                  onChange={setSelectedOption}
                  isMulti
                />
              </Grid.Column>
              <Grid.Column width={6}>
                <Button onClick={handleAddMembers}>Add</Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={16}>
                {!data && <div>Loading...</div>}
              </Grid.Column>
            </Grid.Row>
            {data &&
              data.members.map((member) => (
                <Grid.Row key={member._id}>
                  <Grid.Column width={2}>{member.username}</Grid.Column>
                  <Grid.Column width={1}>
                    <FontAwesomeIcon
                      className="cursor-pointer"
                      icon={faXmark}
                      onClick={() => removeMember(member._id)}
                    />
                  </Grid.Column>
                </Grid.Row>
              ))}
          </Grid>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setModalOpened(false)}>
            Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default GroupMembers;
