import PrimaryButton from "../../components/ui/buttons/PrimaryButton"

const catBreeds = [
  {
    "id": 1,
    "breedName": "Abyssinian",
    "breedImage": "https://images.unsplash.com/photo-1551316679-9c6ae9dec224?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": 2,
    "breedName": "Aegean",
    "breedImage": "https://images.unsplash.com/photo-1551316679-9c6ae9dec224?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": 3,
    "breedName": "Aegean",
    "breedImage": "https://images.unsplash.com/photo-1551316679-9c6ae9dec224?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": 4,
    "breedName": "Aegean",
    "breedImage": "https://images.unsplash.com/photo-1551316679-9c6ae9dec224?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": 5,
    "breedName": "Aegean",
    "breedImage": "https://images.unsplash.com/photo-1551316679-9c6ae9dec224?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
]

const SelectBreed = () => {
  return (
    <>
      <div className="flex flex-col">

        <div className="">
          <h1 className="text-2xl font-bold text-black ">Choose Breed</h1>
        </div>


        <div>
          <div className="grid grid-cols-4 gap-4  p-12">
            {
              catBreeds.map((breed) => (
                <div className="card p-4 rounded-2xl shadow-xl bg-slate-100" key={breed.id}>
                  <div className="image">
                    <img src={breed.breedImage} alt="Cat" className="h-64 w-64" />
                  </div>
                  <div className="name text-xl">{breed.breedName}</div>
                </div>
              ))
            }
          </div>
        </div>
        <PrimaryButton link="pet-name" ButtonText="Next" colorVariation="blue"/>
      </div>

    </>
  )
}

export default SelectBreed