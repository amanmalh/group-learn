import { useState } from "react";
import { Card, Grid, Icon } from "semantic-ui-react";
import EditGroup from "./EditGroup";
import GroupMembers from "./GroupMembers";

const Group = ({ _id, name, description, members, handleGroupEdit }) => {
  const groupMembersDialogId = `group-members-${_id}`;
  const [editModalOpened, setEditModalOpened] = useState(false);
  const [membersModalOpened, setMembersModalOpened] = useState(false);

  return (
    <Card fluid className="max-h-60 h-60 overflow-x-hidden overflow-y-auto">
      <Card.Content>
        <Card.Header>
          <Grid>
            <Grid.Column width={14}>{name}</Grid.Column>
            <Grid.Column width={2}>
              <span
                className="cursor-pointer text-gray-400 hover:text-gray-700"
                onClick={() => setEditModalOpened(true)}
              >
                <Icon name="edit" />
              </span>
            </Grid.Column>
          </Grid>
        </Card.Header>
        <Card.Description>
          {description.length < 250
            ? description
            : description.substring(0, 250) + "..."}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <EditGroup
          group={{ id: _id, name, description }}
          onSubmit={handleGroupEdit}
          action="edit"
          modalOpened={editModalOpened}
          setModalOpened={setEditModalOpened}
        />
        <GroupMembers
          id={_id}
          members={members}
          modalOpened={membersModalOpened}
          setModalOpened={setMembersModalOpened}
        />
        <span
          className="cursor-pointer hover:text-blue-600"
          onClick={() => setMembersModalOpened(true)}
        >
          <Icon name="group" />
          {members.length} member{members.length > 1 ? "s" : ""}
        </span>
      </Card.Content>
    </Card>
  );
};

export default Group;
