import { Button } from "@/components/ui/button";

const Resume = () => {
	const handleDownloadResume = () => {
		const resumeUrl =
			"https://drive.google.com/file/d/1MNkzyMeeSI2_3Otk37vUt4u6j2UchcOL/view?usp=drive_link";
		window.open(resumeUrl, "_blank");
	};

	return (
		<div className="w-full md:px-[120px] px-6 bg-[#1D2429] py-[80px] md:py-[135px] mt-[80px] md:mt-[120px]">
			<div className="max-w-[1272px] w-full mx-auto flex flex-col items-center gap-5">
				<h2 className="text-3xl text-white font-bold text-center">
					Unlock My Resume:
				</h2>
				<p className="text-lg text-[#e8e8e8] font-medium text-center max-w-[800px]">
					Looking to learn more about my skills and experience? Access my resume
					and delve deeper into my professional journey.
				</p>

				<Button
					className="bg-purple-500"
					onClick={handleDownloadResume}
				>
					Download Resume
				</Button>
			</div>
		</div>
	);
};

export default Resume;
