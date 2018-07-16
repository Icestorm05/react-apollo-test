import { Query } from "react-apollo";
import gql from "graphql-tag";
import React, { SFC } from "react";

import CoursesList from "~/src/components/CoursesList";

const CoursesQuery = gql`
  query getCourses($topic: String) {
    courses(topic: $topic) {
      id
      title
      author
      description
      topic
      url
    }
  }
`;

const HomePage: SFC = () => (
  <main id="HomePage">
    <Query query={CoursesQuery}>
      {({ loading, error, data: { courses } }) => {
        if (loading) return <p>Loading...</p>;
        if (error)
          return (
            <p>
              <b>Error: </b>
              {error}
            </p>
          );
        return <CoursesList courses={courses} />;
      }}
    </Query>
  </main>
);

export default HomePage;
