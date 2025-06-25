"use client";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { schema } from "./validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { number } from "yup";
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValue: {
      city: "",
      township: "",
    },
  });
  const City = [
    { value: "yangon", label: "Yangon" },
    { value: "mandalay", label: "Mandalay" },
    { value: "sittwe", label: "Sittwe" },
    { value: "pathein", label: "Pathein" },
  ];
  const Township = [
    { value: "oaklarpa", label: "Oaklarpa" },
    { value: "pazundaung", label: "Pazundaung" },
    { value: "tarmwe", label: "Tarmwe" },
    { value: "hlaing", label: "Hlaing" },
  ];
  const onSubmit = (formData) => {
    console.log("formData", formData);
    console.log("Name Input Data", formData.name);
    reset();
  };
  return (
    <div>
      <Box component="form" sx={{ p: 2 }} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="name"
          fullWidth
          sx={{ mb: 3 }}
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          label="email"
          fullWidth
          sx={{ mb: 3 }}
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          label="address"
          fullWidth
          sx={{ mb: 3 }}
          {...register("address")}
          error={!!errors.address}
          helperText={errors.address?.message}
        />
        <TextField
          label="phone number"
          fullWidth
          sx={{ mb: 3 }}
          {...register("phone")}
          error={!!errors.phone}
          helperText={errors.phone?.message}
        />
        <FormControl fullWidth sx={{ mb: 4 }}>
          <InputLabel id="city-label">city</InputLabel>

          <Controller
            name="city"
            control={control}
            error={!!errors.city}
            render={({ field }) => (
              <Select
                {...field}
                labelId="city-label"
                label="city"
                defaultValue=""
                value={field.value || ""}
              >
                {City.map((city, index) => {
                  return (
                    <MenuItem key={index} value={city.value}>
                      {city.label}
                    </MenuItem>
                  );
                })}
              </Select>
            )}
          />
        </FormControl>
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel id="township-label">township</InputLabel>

          <Controller
            name="township"
            control={control}
            error={!!errors.township}
            render={({ field }) => (
              <Select
                {...field}
                labelId="township-label"
                label="township"
                defaultValue=""
                value={field.value || ""}
              >
                {Township.map((township, index) => {
                  return (
                    <MenuItem key={index} value={township.value}>
                      {township.label}
                    </MenuItem>
                  );
                })}
              </Select>
            )}
          />
        </FormControl>
        <Button variant="contained" type="submit">
          SUBMIT
        </Button>
      </Box>
    </div>
  );
}
