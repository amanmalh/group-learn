import { useQuery } from "react-query";
import { fetchGroups } from "../../utils/apiUtils";
import EditGroup from "./EditGroup";
import Group from "./group";

const Groups = () => {
  const { isLoading, data, error } = useQuery("groups", fetchGroups);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div> Error </div>;

  return (
    <>
      <label htmlFor="create-group" className="btn btn-primary w-40">
        New Group
      </label>
      <input type="checkbox" id="create-group" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label
            htmlFor="create-group"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Create Group</h3>
          <EditGroup action="create" />
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((group) => (
          <Group key={group._id} {...group} />
        ))}
      </div>
    </>
  );
};

export default Groups;
