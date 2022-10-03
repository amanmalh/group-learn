const getTopics = (req, res) => {
  // get all topics for user
  res.json({ topics: [1, 2, 3] });
};

const getTopic = (req, res) => {
  // get topic for user
};

const addTopic = (req, res) => {
  // add topic for user
};

const removeTopic = (req, res) => {
  // remove topic
};

const editTopic = (req, res) => {
  // modifiy existing topic
};

const addSubTopic = (req, res) => {
  // add sub topics to existing topic
};

export { getTopics, getTopic, addTopic, removeTopic, editTopic, addSubTopic };
