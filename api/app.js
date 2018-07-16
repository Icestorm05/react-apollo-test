const express = require("express");
const expressGraphQL = require("express-graphql");
const { buildSchema } = require("graphql");
const courses = require("./courses.json");
const cors = require("cors");

const schema = buildSchema(`
  type Query {
    course(id: Int!): Course
    courses(topic: String): [Course]
  }
  type Mutation {
    updateCourseTopic(id: Int!, topic: String!): Course
  }
  type Course {
    id: Int
    title: String
    author: String
    description: String
    topic: String
    url: String
  }
`);

const getCourse = ({ id }) => {
  return courses.find(course => course.id === id);
};

const getCourses = ({ topic }) => {
  return topic ? courses.filter(course => course.topic === topic) : courses;
};

const updateCourseTopic = ({ id, topic }) => {
  const course = courses.find(course => course.id === id);
  if (course) {
    course.topic = topic;
  }
  return course;
};

const rootValue = {
  course: getCourse,
  courses: getCourses,
  updateCourseTopic
};

const app = express();
app.use(cors());
app.use(
  "/graphql",
  expressGraphQL({
    schema,
    rootValue,
    graphiql: true
  })
);
app.listen(8081, () => console.log("Listening on port 8081"));
