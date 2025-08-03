export interface BodyHeadingProps {
    heading: string;
    subheading?: string;
    font: string;
    subFont: string;
}

export const BodyHeading: React.FC<BodyHeadingProps> = ({ heading, subheading, font, subFont }) => {
    return (
        <div className="text-m mt-8 mb-8 max-w-7xl mx-auto">
            <h1 className={`text-8xl font-${font}`}>{heading}</h1>
            {subheading ? <h2 className={`text-2xl font-${subFont}`}>{subheading}</h2> : <></>}
        </div>
    )
}

BodyHeading.displayName="BodyHeading"