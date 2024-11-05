import { UserFormInputs } from "@/types/userTypes";
import { handleApi } from "./apiHandler";

const apiURL = "http://localhost:8000/api/v1";

// create a user
export const createUser = async (userData: UserFormInputs) => {
  try {
    const response = await fetch(`${apiURL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const createdUser = await handleApi(response);
    return createdUser;
  } catch (error) {
    console.error("Failed to create user:", error);
    throw error;
  }
};

//fetch all users
export const fetchAllUsers = async () => {
  try {
    const response = await fetch(`${apiURL}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const users = await handleApi(response);
    return users;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw error;
  }
};
