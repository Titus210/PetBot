
import { Link } from "react-router-dom";

interface SecondaryButtonProps {
    link?: string;
    colorVariation: "blue" | "green";
    borderRadius?: "rounded-3xl" | "rounded-pill";
    ButtonText: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ link, colorVariation, borderRadius = "rounded-3xl", ButtonText }) => {
    let bgColorClass;
    let textColorClass;

    const borderRadiusClass = `${borderRadius}`;

    // Define  color variation
    switch (colorVariation) {
        case "blue":
            bgColorClass = "blue";
            textColorClass = "text-white";
            break;
        case "green":
            bgColorClass = "green";
            textColorClass = "text-white";
            break;
        default:
            bgColorClass = "blue";
            textColorClass = "text-white";
    }

    return (
        <div className="mx-auto text-center">
            <Link to={`/${link}`}>
                <p className={`px-6 py-3  bg-blue ${textColorClass} font-bold` }>
                    {ButtonText}
                </p>
            </Link>
        </div>
    );
};

export default SecondaryButton;
