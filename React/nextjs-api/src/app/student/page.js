"use client";

import {
  Box,
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Typography,
} from "@mui/material";
import axios from "axios";
import Link from "next/link";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";

export default function StudentList() {
  const [students, setStudents] = useState([]);

  const getStudentList = async () => {
    try {
      const response = await axios.get("/api/students");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/students/${id}`);
      setStudents((prev) => prev.filter((student) => student.id !== id));
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  useEffect(() => {
    getStudentList();
  }, []);

  return (
    <Box
      padding={4}
      sx={{
        backgroundColor: "#f5f7fa",
        minHeight: "100vh",
      }}
    >
      <Box
        mb={3}
        p={2}
        borderRadius={2}
        boxShadow={2}
        sx={{ backgroundColor: "#fff" }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h5" fontWeight="bold">
            Student List
          </Typography>
          <Link href="/students/create" passHref>
            <Button variant="contained" color="primary">
              Add Student
            </Button>
          </Link>
        </Stack>
      </Box>

      <TableContainer
        component={Paper}
        sx={{ borderRadius: 2, boxShadow: 3 }}
      >
        <Table>
          <TableHead sx={{ backgroundColor: "#1976d2" }}>
            <TableRow>
              {[
                "No.",
                "Name",
                "Phone",
                "DOB",
                "Father Name",
                "Age",
                "Gender",
                "Address",
                "Major",
                "Action",
              ].map((header, idx) => (
                <TableCell
                  key={idx}
                  sx={{ color: "#fff", fontWeight: "bold", textAlign: idx === 9 ? "center" : "left" }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {students.length > 0 ? (
              students.map((student, index) => (
                <TableRow
                  key={student.id}
                  hover
                  sx={{
                    "&:hover": {
                      backgroundColor: "#f0f0f0",
                    },
                  }}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.phone}</TableCell>
                  <TableCell>{student.dob}</TableCell>
                  <TableCell>{student.father_name}</TableCell>
                  <TableCell>{student.age}</TableCell>
                  <TableCell>{student.gender}</TableCell>
                  <TableCell>{student.address}</TableCell>
                  <TableCell>{student.major}</TableCell>
                  <TableCell align="center">
                    <Link href={`/students/${student.id}`} passHref>
                      <IconButton color="primary">
                        <VisibilityIcon />
                      </IconButton>
                    </Link>
                    <Link href={`/students/${student.id}/edit`} passHref>
                      <IconButton color="success">
                        <EditIcon />
                      </IconButton>
                    </Link>
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(student.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={10} align="center">
                  No students found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
  