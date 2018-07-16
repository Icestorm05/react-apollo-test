import PropTypes from "prop-types";
import React, { SFC } from "react";

import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { ICourse } from "~/src/types/course";

interface ICoursesListProps {
  courses: ICourse[];
}

const CoursesList: SFC<ICoursesListProps> = ({ courses }) => (
  <Paper className="CoursesList">
    <Table className="CoursesListTable">
      <TableHead>
        <TableRow>
          <TableCell>Title</TableCell>
          <TableCell>Author</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Topic</TableCell>
          <TableCell>URL</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {courses.map(course => (
          <TableRow key={course.id}>
            <TableCell>{course.title}</TableCell>
            <TableCell>{course.author}</TableCell>
            <TableCell>{course.description}</TableCell>
            <TableCell>{course.topic}</TableCell>
            <TableCell>{course.url}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

CoursesList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      topic: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  )
};

export default CoursesList;
