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
} from "@mui/material";
import axios from "axios";
import Link from "next/link";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function StudentList() {
  const getStudentList = async () => {
    try {
      console.log("getStudentList");
      const response = await axios.get("/api/students");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Box padding={2}>
      <Stack alignItems="flex-end">
        <Link passHref href="">
          {" "}
          <Button>Add Student</Button>
        </Link>
      </Stack>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Book Name</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Published_Year</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>Atomic Habits</TableCell>
              <TableCell>William</TableCell>
             
              <TableCell>1980</TableCell>

              <TableCell align="center">
                <Link href={"/book/1"} passHref>
                  <IconButton>
                    <VisibilityIcon />
                  </IconButton>
                </Link>
                <Link href={"/books/1/edit"} passHref>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                </Link>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
