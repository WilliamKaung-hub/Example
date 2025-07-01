"use client";

import {
  Box,
  TextField,
  Typography,
  Stack,
  Button,
  Paper,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

// Validation schema
const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  author: yup.string().required("Author name is required"),
  published_year: yup
    .number()
    .typeError("Publised must be a number")
    .required("Published is required"),
});

export default function CreateBook() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      author: "",
      published_year: "",
    },
  });

  const onSubmit = async (formData) => {
    try {
      const bodyData = {
        title: formData.title,
        author: formData.author,  
        published_year: formData.published_year,
        
      };
      const response = await axios.post("/api/books", bodyData);
      reset();
      console.log("Successfully saved.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f5f7fa",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 4,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 600,
          padding: 4,
          borderRadius: 3,
          backgroundColor: "#fff",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            <Typography variant="h5" fontWeight="bold" textAlign="center">
              Add a Book
            </Typography>

            <TextField
              label="title"
              fullWidth
              {...register("title")}
              error={!!errors.title}
              helperText={errors.title?.message}
            />

            <TextField
              label="author"
              fullWidth
              {...register("author")}
              error={!!errors.author}
              helperText={errors.author?.message}
            />

            <TextField
              label="published_year"
              fullWidth
              {...register("published_year")}
              error={!!errors.published_year}
              helperText={errors.published_year?.message}
            />

            <Button type="submit" variant="contained" size="large">
              Save Book
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
}
