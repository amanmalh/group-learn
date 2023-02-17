import { useQuery } from "react-query";
import { fetchGroups } from "../../utils/apiUtils";
import Group from "./group";

const Groups = () => {
  const { isLoading, data, error } = useQuery("groups", fetchGroups);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div> Error </div>;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((group) => (
        <Group key={group._id} {...group} />
      ))}
    </div>
  );
};

export default Groups;
