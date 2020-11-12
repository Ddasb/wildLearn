const express = require('express');
const express_graphql = require('express-graphql').graphqlHTTP;
const { buildSchema } = require('graphql');

// GraphQL schema
const schema = buildSchema(`
    type Query {
        course(id: Int!): Course
        courseString(string: String!): Course
        courses(topic: String): [Course]
    },
    type Mutation {
        updateCourseTopic(id: Int!, topic: String!): Course
        addCourse(title: String!, author: String!, description: String!, topic: String!, url: String): [Course]
    },
    type Course {
        id: Int
        title: String
        author: String
        description: String
        topic: String
        url: String
    }
`);

const coursesData = [
    {
        id: 1,
        title: 'The Complete Node.js Developer Course',
        author: 'Andrew Mead, Rob Percival',
        description: 'Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!',
        topic: 'Node.js',
        url: 'https://codingthesmartway.com/courses/nodejs/'
    },
    {
        id: 2,
        title: 'Node.js, Express & MongoDB Dev to Deployment',
        author: 'Brad Traversy',
        description: 'Learn by example building & deploying real-world Node.js applications from absolute scratch',
        topic: 'Node.js',
        url: 'https://codingthesmartway.com/courses/nodejs-express-mongodb/'
    },
    {
        id: 3,
        title: 'JavaScript: Understanding The Weird Parts',
        author: 'Anthony Alicea',
        description: 'An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more.',
        topic: 'JavaScript',
        url: 'https://codingthesmartway.com/courses/understand-javascript/'
    }
]

const getCourse = function(args) { 
    let id = args.id;
    return coursesData.filter(course => {
        return course.id == id;
    })[0];
}

const getCourses = function(args) {
    if (args.topic) {
        let topic = args.topic;
        return coursesData.filter(course => course.topic === topic);
    } else {
        return coursesData;
    }
}

const updateCourseTopic = function({id, topic}) {
    coursesData.map(course => {
        if (course.id === id) {
            course.topic = topic;
            return course;
        }
    });
    return coursesData.filter(course => course.id === id) [0];
}

const getCourseString = function(args) { 
    let string = args.string;
    return coursesData.filter(course => {
        let contains = false;
        console.log(Object.keys(course).length);
        for(let i = 0; i < Object.keys(course).length; i++) {
            if(Object.values(course).includes(string)) {
                contains = true
            }
        }
        return contains;
    })[0];
}

const addCourseAuto = function(args) {
    let entree = args;
    let nextIndex = Object.values(coursesData).length + 1;
    entree.id = nextIndex;

    coursesData.push(entree);
    console.log(coursesData);
    
    return coursesData;
}

const root = {
    course: getCourse,
    courseString: getCourseString,
    courses: getCourses,
    updateCourseTopic: updateCourseTopic,
    addCourse: addCourseAuto
};

// Create an express server and a GraphQL endpoint
const app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));