type BodyHeadingProps = {
    heading: string;
    subheading: string;
    font: string;
    subFont: string;
}

function BodyHeading({ heading, subheading, font, subFont }: BodyHeadingProps) {
    return (
        <div className="text-m mb-5 max-w-7xl mx-auto">
            <h1 className={`text-8xl font-${font}`}>{heading}</h1>
            <h2 className={`text-2xl font-${subFont}`}>{subheading}</h2>
        </div>
    )
}

export default BodyHeading;