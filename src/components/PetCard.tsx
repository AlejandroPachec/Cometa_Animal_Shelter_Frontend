

const PetCard = (name, breed, age, description, image, sex) => {

  return (
    <div>
      <h2>{name}</h2>
      <h3>{image}</h3>
      <h3>{age}</h3>
      <h3>{breed}</h3>
      <h3>{sex}</h3>
      <p>{description}</p>

    </div>
  )
}

export default PetCard