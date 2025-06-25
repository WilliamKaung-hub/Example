"use client";
import {
  Box,
  TableConatainer,
  Table,
  TabbleHead,
  TableCell,
} from "@mui/material";
import Link from "next/link";

export default function StudentList() {
  return (
    <Box padding={2}>
      <Stack alignItems="flex-end">
        <Link passHref href="">
          {" "}
          <Button>Add Student</Button>
        </Link>
      </Stack>
      <TableConatainer component={Paper}>
        <Table>
          <TabbleHead>
            <TabbleRow>
              <TableCell>No.</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>DOB</TableCell>
              <TableCell>Father name</TableCell>
              <TableCell>Age</TableCell> 
              <TableCell>Gender</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Major</TableCell>
              <TableCell>Action</TableCell>
            </TabbleRow>
          </TabbleHead>

          <TableBody>
            <TabbleRow>
              <TableCell>1</TableCell>
              <TableCell>Dopp</TableCell>
              <TableCell>09888844441</TableCell>
              <TableCell>4.8.2000</TableCell>
              <TableCell>U Kyaw</TableCell>
              <TableCell>20</TableCell>
              <TableCell>male</TableCell>
              <TableCell>sittwe</TableCell>
              <TableCell>Computer Science</TableCell>
              <TableCell></TableCell>
            </TabbleRow>
          </TableBody>
        </Table>
      </TableConatainer>
    </Box>
  );
}
