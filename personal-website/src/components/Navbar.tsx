import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Navbar = () => {
	const socialLinks = [
		{
			icon: (
				<FaGithub className="text-white text-2xl hover:text-opacity-70 transition duration-200" />
			),
			url: "https://github.com/yourgithub",
		},
		{
			icon: (
				<FaLinkedin className="text-white text-2xl hover:text-opacity-70 transition duration-200" />
			),
			url: "https://linkedin.com/in/yourlinkedin",
		},
		{
			icon: (
				<BiLogoGmail className="text-white text-2xl hover:text-opacity-70 transition duration-200" />
			),
			url: "mailto:youremail@example.com",
		},
	];

	return (
		<div className="w-full md:px-[120px] px-6 py-5 border-b border-b-[#E1E1E1]/10">
			<div className="max-w-[1272px] w-full mx-auto flex items-center justify-between">
				<div className="flex items-center gap-2">
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" />
						<AvatarFallback>IE</AvatarFallback>
					</Avatar>
					<div>
						<p className="font-semibold text-sm text-white mb-[2px]">
							Ifeanyi Emmanuel
						</p>
						<p className="text-xs text-[#E1E1E1]">@the2MinEngineer</p>
					</div>
				</div>
				<div className="flex items-center gap-6">
					{socialLinks.map((link, index) => (
						<a
							href={link.url}
							key={index}
						>
							{link.icon}
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
