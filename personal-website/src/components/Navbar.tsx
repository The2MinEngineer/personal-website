import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import profilePic from "@/assets/profilePic.jpg";

const Navbar = () => {
	const socialLinks = [
		{
			icon: (
				<FaGithub className="text-white text-2xl hover:text-opacity-70 transition duration-200" />
			),
			url: "https://github.com/the2MinEngineer",
		},
		{
			icon: (
				<FaLinkedin className="text-white text-2xl hover:text-opacity-70 transition duration-200" />
			),
			url: "https://www.linkedin.com/in/ifeanyi-emmanuel/",
		},
		{
			icon: (
				<BiLogoGmail className="text-white text-2xl hover:text-opacity-70 transition duration-200" />
			),
			url: "mailto:ifeanyiemmanueljoseph@gmail.com",
		},
	];

	return (
		<div className="w-full md:px-[120px] px-6 py-5 bg-[#14181B] border-b border-b-[#E1E1E1]/10">
			<div className="max-w-[1272px] w-full mx-auto flex items-center justify-between">
				<div className="flex items-center gap-2">
					<Avatar>
						<AvatarImage src={profilePic} />
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
							target="_blank"
							rel="noopener noreferrer"
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
