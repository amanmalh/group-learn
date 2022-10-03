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
        created: {
            reqired: false,
            type: Date
        },
        updated: {
            reqired: false,
            type: Date
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
            type: [User]
        },
        subTopics: [String],
        notes: {
            reqired: true,
            type: [Note]
        },
        created: {
            reqired: true,
            type: Date
        },
        updated: {
            reqired: true,
            type: Date
        },
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
        },
        created: {
            reqired: true,
            type: Date
        },
        updated: {
            reqired: true,
            type: Date
        },

    }
```
