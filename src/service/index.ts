export const getAllPetsService = async () => {
  const response = await fetch(`${import.meta.env.VITE_BACK_URL}/pets`);

  const data = await response.json();

  if (!response.ok) {
      throw new Error(data.error);
  }

  return data.data;
};
