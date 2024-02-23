
import { Link } from "react-router-dom";

interface PrimaryButtonProps {
    link: string;
    colorVariation: "blue" | "green";
    borderRadius?: "rounded-3xl" | "rounded-pill";
    ButtonText: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ link, colorVariation, borderRadius = "rounded-3xl", ButtonText }) => {
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
                <p className={`px-4 py-2 rounded-lg bg-${bgColorClass} ${textColorClass} ${borderRadiusClass} font-bold` }>
                    {ButtonText}
                </p>
            </Link>
        </div>
    );
};

export default PrimaryButton;
