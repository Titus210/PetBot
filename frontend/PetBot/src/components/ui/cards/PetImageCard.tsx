import chaBotImage from '../../../assets/images/bot-1.png'


const PetImageCard = () => {
    return (
        <>
            <div className="h-auto flex items-center rounded-full">
                <img
                    src={chaBotImage}
                    alt="PetBot"
                    className="h-48 w-48 mx-auto rounded-full"
                />
            </div>
            <div className=""></div>
        </>
    )
}

export default PetImageCard