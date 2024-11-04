export const handleApi = async (response: Response) => {
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(`Error: ${response.status} - ${errorMessage}`);
  }
  return response.json();
};
