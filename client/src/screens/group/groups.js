import { useState } from "react";
import { useQuery } from "react-query";
import { fetchGroups } from "../../utils/apiUtils";
import { Button, Grid } from "semantic-ui-react";
import EditGroup from "./EditGroup";
import Group from "./Group";

const Groups = () => {
  const { isLoading, data, error } = useQuery("groups", fetchGroups);
  const [newGroupModalOpened, setNewGroupModalOpened] = useState(false);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div> Error </div>;
  const onGroupCreate = () => {
    setNewGroupModalOpened(false);
  };
  return (
    <>
      <Button positive onClick={() => setNewGroupModalOpened(true)}>
        New Group
      </Button>
      <br /> <br />
      <EditGroup
        action="create"
        onGroupCreate={onGroupCreate}
        modalOpened={newGroupModalOpened}
        setModalOpened={setNewGroupModalOpened}
      />
      <Grid columns={3} stackable>
        {data.map((group) => (
          <Grid.Column key={group._id}>
            <Group {...group} />
          </Grid.Column>
        ))}
      </Grid>
    </>
  );
};

export default Groups;
