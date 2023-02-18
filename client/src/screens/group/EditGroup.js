import { useState } from "react";
import { patchGroup, postGroup } from "../../utils/apiUtils";
import { useMutation, useQueryClient } from "react-query";

const EditGroup = ({ group, action }) => {
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
    },
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (action === "edit")
      groupMutation.mutate({ id, name, description }, invalidateGroups);
    if (action === "create")
      createGroupMutation.mutate({ name, description }, invalidateGroups);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Type here"
          className="input input-bordered mt-4 w-full max-w-xs"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className="textarea textarea-bordered mt-4 w-full max-w-xs"
          name="description"
          placeholder="Bio"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>

        <div className="modal-action">
          <button
            type="submit"
            htmlFor="my-modal"
            className={groupMutation.isLoading ? "btn loading" : "btn"}
          >
            Update
          </button>
        </div>
      </form>
    </>
  );
};

export default EditGroup;
