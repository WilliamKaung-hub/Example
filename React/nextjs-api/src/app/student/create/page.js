"use client";

import {
  Box,
  TextField,
  Typography,
  Stack,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Paper,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

// Gender options
const GENDER = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

// Validation schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  father_name: yup.string().required("Father name is required"),
  age: yup
    .number()
    .typeError("Age must be a number")
    .required("Age is required"),
  phone: yup.string().required("Phone number is required"),
  gender: yup
    .string()
    .required("Gender is required")
    .oneOf(["male", "female"], "Invalid Gender"),
  address: yup.string().required("Address is required"),
  dob: yup.string().required("DOB is required"),
  major: yup.string().required("Major is required"),
});

export default function CreateStudent() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      father_name: "",
      age: "",
      phone: "",
      gender: "",
      address: "",
      dob: "",
      major: "",
    },
  });

  const onSubmit = async (formData) => {
    try {
      const bodyData = {
        name: formData.name,
        father_name: formData.father_name,
        gender: formData.gender,
        age: formData.age,
        dob: dayjs(formData.dob).format("YYYY-MM-DD"),
        phone: formData.phone,
        address: formData.address,
        major: formData.major,
      };
      const response = await axios.post("/api/students", bodyData);
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
              Add a Student
            </Typography>

            <TextField
              label="Name"
              fullWidth
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
            />

            <TextField
              label="Age"
              fullWidth
              {...register("age")}
              error={!!errors.age}
              helperText={errors.age?.message}
            />

            <TextField
              label="Phone"
              fullWidth
              {...register("phone")}
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />

            <TextField
              label="Address"
              fullWidth
              {...register("address")}
              error={!!errors.address}
              helperText={errors.address?.message}
            />

            <TextField
              label="Father Name"
              fullWidth
              {...register("father_name")}
              error={!!errors.father_name}
              helperText={errors.father_name?.message}
            />

            <TextField
              label="Major"
              fullWidth
              {...register("major")}
              error={!!errors.major}
              helperText={errors.major?.message}
            />

            <FormControl fullWidth error={!!errors.gender}>
              <InputLabel id="gender-label">Gender</InputLabel>
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    labelId="gender-label"
                    label="Gender"
                    value={field.value || ""}
                  >
                    {GENDER.map((gender, index) => (
                      <MenuItem key={index} value={gender.value}>
                        {gender.label}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
              <FormHelperText>{errors.gender?.message}</FormHelperText>
            </FormControl>

            <FormControl fullWidth error={!!errors.dob}>
              <Controller
                name="dob"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <DatePicker
                    value={field.value ? dayjs(field.value, "YYYY/MM/DD") : null}
                    onChange={(e) => field.onChange(e?.format("YYYY/MM/DD"))}
                    format="DD/MM/YYYY"
                    label="DOB"
                    slotProps={{
                      textField: {
                        error: !!error,
                        helperText: error?.message,
                      },
                    }}
                  />
                )}
              />
            </FormControl>

            <Button type="submit" variant="contained" size="large">
              Save Student
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
}

