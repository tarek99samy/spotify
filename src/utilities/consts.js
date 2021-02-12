import logo from "../assets/logo.png";
import personalPhoto from "../assets/profile-photo.png";
import track1 from "../assets/tracks/imgs/track1.jpeg";
import track2 from "../assets/tracks/imgs/track2.jpeg";
import track3 from "../assets/tracks/imgs/track3.jpeg";
import track4 from "../assets/tracks/imgs/track4.jpeg";
import track5 from "../assets/tracks/imgs/track5.jpeg";
import track6 from "../assets/tracks/imgs/track6.jpeg";

export { logo, personalPhoto };

export const homeNavbarLinks = [
	{ text: "Premium", to: "premium" },
	{ text: "Support", href: "https://support.spotify.com/eg-en/" },
	{ text: "Download", to: "download" },
];

export const homeNavbarDropdownContent = [
	{ text: "Account", to: "account" },
	{ text: "Log out", to: "logout" },
];

export const homeMainBannerContent = [
	{ type: "xsuper", text: "Go Premium. Be happy.", color: "white" },
	{
		type: "link",
		text: "start free trial",
		href: "premium",
		fg: "white",
		bg: "green",
	},
	{
		type: "xtiny",
		text: "* Terms and conditions apply. Open only to users who haven't already tried Premium.",
		color: "white",
	},
];

export const homePlayerBannerContent = [
	{
		type: "xmedium",
		text: "Looking for music?",
		color: "black",
	},
	{
		type: "xtiny",
		text: "Start listening to the best new releases.",
		color: "black",
	},
	{
		type: "link",
		text: "launch web player",
		href: "webplayer",
		fg: "grey",
		bg: "outline__greyhover",
	},
];

export const hometracks = [
	{ img: track1, title: "Holy Quran (khatma 2003)", artist: "Mishari Alafasy", link: `webplayer/mishari/quran2003` },
	{
		img: track2,
		title: "Holy Quran (khatma california)",
		artist: "Mishari Alafasy",
		link: `webplayer/mishari/california`,
	},
	{ img: track3, title: "Tarahamy Ya Qoloub", artist: "Mishari Alafasy", link: `webplayer/mishari/tarahamyyaqoloub` },
	{ img: track4, title: "Surah Az-Zukhruf", artist: "Hazza Al Blushi", link: `webplayer/hazzaalblushi/azzukhruf` },
	{ img: track5, title: "Holy Quran", artist: "Islam Sobhi", link: `webplayer/islamsobhi/quran` },
	{ img: track6, title: "Surah Ad-Dukhan", artist: "Hazza Al Blushi", link: `webplayer/hazzaalblushi/addukhan` },
];