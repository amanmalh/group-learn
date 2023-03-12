import { useState } from "react";
import { patchGroup, postGroup } from "../../utils/apiUtils";
import { useMutation, useQueryClient } from "react-query";
import { Button, Form, Modal, TextArea } from "semantic-ui-react";

const EditGroup = ({
  group,
  action,
  onGroupCreate,
  modalOpened,
  setModalOpened,
}) => {
  if (action === "create") {
    group = { id: "", name: "", description: "" };
  }
  const queryClient = useQueryClient();
  const id = group.id;
  const [name, setName] = useState(group.name);
  const [description, setDescription] = useState(group.description);
  const groupMutation = useMutation(patchGroup);
  const createGroupMutation = useMutation(postGroup);
  const invalidateGroups = {
    onSuccess: () => {
      queryClient.invalidateQueries("groups");
      setModalOpened(false);
    },
  };
  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    if (action === "edit")
      groupMutation.mutate({ id, name, description }, invalidateGroups);
    if (action === "create") {
      createGroupMutation.mutate({ name, description }, invalidateGroups);
      setName("");
      setDescription("");
    }
  };

  const handleCancel = () => {
    if (action === "create") {
      setName("");
      setDescription("");
    }
    setModalOpened(false);
  };

  return (
    <>
      <Modal
        onClose={() => setModalOpened(false)}
        onOpen={() => setModalOpened(true)}
        open={modalOpened}
      >
        <Modal.Header>New Group</Modal.Header>
        <Modal.Content>
          <Form onSubmit={handleSubmit}>
            <Form.Input
              type="text"
              name="name"
              placeholder="Type here"
              className="input input-bordered mt-4 w-full max-w-xs"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextArea
              className="textarea textarea-bordered mt-4 w-full max-w-xs"
              name="description"
              placeholder="Bio"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></TextArea>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={handleCancel}>
            Cancel
          </Button>
          <Button
            content={action === "create" ? "Create" : "Update"}
            labelPosition="right"
            icon="checkmark"
            onClick={handleSubmit}
            positive
          />
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default EditGroup;
