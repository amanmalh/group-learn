import { useState } from "react";
import { patchGroup } from "../../utils/apiUtils";
import { useMutation } from "react-query";

const EditGroup = ({ group, onSubmit }) => {
  const id = group.id;
  const [name, setName] = useState(group.name);
  const [description, setDescription] = useState(group.description);
  const groupMutation = useMutation(patchGroup);

  const handleSubmit = async (e) => {
    e.preventDefault();
    groupMutation.mutate({ id, name, description });
  };
  return (
    <>
      {/* Put this part before </body> tag */}
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
        </div>
      </div>
    </>
  );
};

export default EditGroup;
