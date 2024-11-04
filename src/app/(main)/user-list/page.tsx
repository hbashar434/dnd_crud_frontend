import React from "react";
import { Button, Box } from "@mui/material";
import UserTable from "@/components/UserTable";
import { fetchAllUsers } from "@/lib/user";
import { User } from "@/types/userTypes";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";

interface UserListResponse {
  statusCode: number;
  data: User[];
  message: string;
  success: boolean;
}

const UserListPage = async () => {
  const response: UserListResponse = await fetchAllUsers();
  const userList = response.success ? response.data : [];

  return (
    <section
      style={{
        backgroundColor: "#e4e7e3",
        padding: "12px",
      }}
    >
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Button variant="contained" color="primary">
          User List
        </Button>
        <Link href="/" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#729e5a",
              display: "flex",
              alignItems: "center",
            }}
          >
            <AddIcon style={{ color: "#fff", marginRight: 4 }} /> Add User
          </Button>
        </Link>
      </Box>
      <UserTable users={userList} />
    </section>
  );
};

export default UserListPage;
