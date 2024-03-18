import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Newsletter = () => {
	return (
		<div className="w-full md:px-[120px] px-6 bg-[#1D2429] py-[80px] md:py-[135px] mt-[80px] md:mt-[120px]">
			<div className="max-w-[1272px] w-full mx-auto flex items-center justify-between flex-col lg:flex-row gap-8">
				<div className="w-full lg:w-1/2">
					<div className="max-w-[750px] w-full">
						<h1 className="font-bold leading-normal text-white text-lg md:text-[40px] mb-[14px]">
							Unlock Exclusive Tech Insights! Subscribe to my Newsletter Now
						</h1>
					</div>
					<div className="max-w-[750px] w-full">
						<p className="text-[#e8e8e8] text-sm md:text-2xl">
							Stay ahead in the tech world! Sign up for my newsletter to receive
							exclusive insights, updates, and curated content directly in your
							inbox. Don't miss out—subscribe today!
						</p>
					</div>
				</div>
				<div className="w-full lg:w-1/2">
					<Input
						type="email"
						placeholder="Email"
						className="w-full max-w-[410px] h-[48px] mb-3"
					/>
					<Button className="w-full max-w-[410px] h-[48px] bg-[#4B39EF] text-white">
						Subscribe Now
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
