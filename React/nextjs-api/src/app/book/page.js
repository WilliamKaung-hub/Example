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
import { useEffect,useState } from "react";

export default function BookList() {
  const [books, setBooks] = useState([]);

  const getBookList = async () => {
    try {
      const response = await axios.get("/api/books");
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };
   useEffect(() => {
      getBookList();
    }, []);

  return (
    <Box padding={2}>
      <Stack alignItems="flex-end">
        <Link passHref href="">
          {" "}
          <Button>Add Book</Button>
        </Link>
      </Stack>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Book_ID</TableCell>
              <TableCell>Book Name</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Published_Year</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
           {books.length > 0 ? (
              books.map((book, index) => (
                <TableRow
                  key={book.id}
                  hover
                  sx={{
                    "&:hover": {
                      backgroundColor: "#f0f0f0",
                    },
                  }}
                >
              <TableCell>{index+1}</TableCell>
              <TableCell>{book.title}</TableCell>
             
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.published_year}</TableCell>

             <TableCell align="center">
                    <Link href={`/books/${book.id}`} passHref>
                      <IconButton color="primary">
                        <VisibilityIcon />
                      </IconButton>
                    </Link>
                    <Link href={`/books/${book.id}/edit`} passHref>
                      <IconButton color="success">
                        <EditIcon />
                      </IconButton>
                    </Link>
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(book.id)}
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
