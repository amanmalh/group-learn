## Schemas for various entities

### User:

```js
    {
        id: {
            reqired: false,
            type: String
        },
        username: {
            reqired: true,
            type: String
        },
        firstName: {
            reqired: true,
            type: String
        },
        lastName: {
            reqired: true,
            type: String
        },
        email: {
            reqired: true,
            type: String
        },
        password: {
            reqired: true,
            type: String
        },
        active: {
            reqired: false,
            type: Boolean
        },
    }
```

### Topic:

```js
    {
        id: {
            reqired: true,
            type: String
        },
        title: {
            reqired: true,
            type: String
        },
        description: {
            reqired: true,
            type: String
        },
        type: {
            reqired: true,
            type: String,
            enum: [
                "topic",
                "subtopic"
            ]
        },
        owner: {
            reqired: true,
            type: String
        },
        learners: {
            reqired: true,
            type: [Learner]
        },
        subTopics: [String],
        notes: {
            reqired: true,
            type: [Note]
        }
    }
```

### Note:

```js
    {
        id: {
            reqired: true,
            type: String
        },
        type: {
            reqired: true,
            type: String,
            enum: [
                "text",
                "code"
                "image",
                "document",
            ]
        },
        content: {
            reqired: true,
            type: Mixed
        },
        createdBy: {
            reqired: true,
            type: String
        }
    }
```

### Learner

```js
    {
        id: {
            reqired: true,
            type: String
        },
        status: {
            reqired: true,
            type: String,
            enum: [
                "inProgress",
                "complete"
            ]
        },
    }
```
