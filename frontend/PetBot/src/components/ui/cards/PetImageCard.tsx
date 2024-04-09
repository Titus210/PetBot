import chaBotImage from '../../../assets/images/dog-cat.png'


const PetImageCard = () => {
    return (
        <>
            <div className="h-auto flex items-center  ">
                <img
                    src={chaBotImage}
                    alt="PetBot"
                    className="h-48 w-48 mx-auto  border border-gray p-1 rounded-full"
                />
            </div>
            <div className="">

            </div>
        </>
    )
}

export default PetImageCard