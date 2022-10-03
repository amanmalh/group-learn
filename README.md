# Group Learn
Web app that allows users to efficiently learn topics by  dividing topics into sub topics and distributing it within the group.

## Terminologies
### Topics
A topic is an entity that you want to study. Topics can be sub-divided into multiple subtopics. 

### Notes
Each topic will be assigned a note where learners can share their learnings. Notes support rich content, so that learners can share text, images, links, code snippets, etc.

### Learner
A learner is a user who wants to learn a topic.

### Owner 
An owner is a learner who owns the topic. It is the owner's responsibility to study a topic and provide knowledge transfers to the learners assigned to the topic. Once all the owners have learned the topic, owner can mark the topic as complete.

### Splitting
A topic can be subdivided in to sub topics. Each such subtopic will be a topic of its own. This process is called splitting.

## Relationships
- Topic -> Sub-topics: One-Many
- Topic -> Learners: Many-Many
- Topic -> Owner: Many-One
- Topic -> Notes: One-Many


