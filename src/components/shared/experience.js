import { GreenCard } from "./card";

const EachExperience = () => {
    return (
        <>
            <div className="flex flex-col gap-1">

                {/* Title */}
                <span className="font-bold">Full stack developer</span>

                {/* Company name and contract type */}
                <div className="flex gap-1">
                    <span className="font-semibold">ADIB - Abu Dhabi Islamic Bank</span>
                    <span className="dot">.</span>
                    <span className="font-semibold">Contract</span>
                </div>

                {/* Date and calculate the duration */}
                <div className="flex gap-1">
                    <span className="font-semibold">Jul 2023</span>
                    <span className="font-semibold">-</span>
                    <span className="font-semibold">Present</span>
                    <span className="dot">.</span>
                    <span className="font-semibold">1 yr 11 mos</span>
                </div>

                {/* Location and type of availability */}
                <div className="flex gap-1">
                    <span className="font-semibold">Abu Dhabi, UAE</span>
                    <span className="dot">.</span>
                    <span className="font-semibold">Remote</span>
                </div>

                {/* Description */}
                <div className="mt-2">
                    <ul className="flex flex-col gap-1">
                        <li>Spearheaded the integration of multiple services into web applications, ensuring seamless functionality and user experience.</li>
                        <li>Spearheaded the integration of multiple services into web applications, ensuring seamless functionality and user experience.</li>
                        <li>Spearheaded the integration of multiple services into web applications, ensuring seamless functionality and user experience.</li>
                        <li>Spearheaded the integration of multiple services into web applications, ensuring seamless functionality and user experience.</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

const Experience = () => <GreenCard><EachExperience /></GreenCard>;

export default Experience;