import useGetAllPets from "../../hooks/useGetAllPets"
import PetCard from "../../components/PetCard"
import Loading from "../../components/Loading"
import { toast } from "react-toastify";



const AllPetsList = () => {
  const { pets, loading, error } = useGetAllPets();

  if (loading) return <Loading />;
  if (error) return toast.error(error);

  return (
      pets.length
          ? <ul>
              {pets.filter((pet) => pet.status === "Buscando").map((pet) => (
                  <li key={pet.pet_id}>
                      <PetCard pet={pet} />
                  </li>
              ))}
          </ul>
          : <p>No hay ninguna mascota disponible</p>
  );

}

export default AllPetsList