import logo from "../assets/logo.png";
import personalPhoto from "../assets/profile-photo.png";
import track1 from "../assets/tracks/imgs/track1.jpeg";
import track2 from "../assets/tracks/imgs/track2.jpeg";
import track3 from "../assets/tracks/imgs/track3.jpeg";
import track4 from "../assets/tracks/imgs/track4.jpeg";
import track5 from "../assets/tracks/imgs/track5.jpeg";
import track6 from "../assets/tracks/imgs/track6.jpeg";

import labtop from "../assets/download/laptop.svg";
import greenCircle from "../assets/download/green-circle.svg";
import greenSuccessCheck from "../assets/download/green-success-check.svg";
import microsoft from "../assets/download/microsoft.png";
import appStore from "../assets/download/app-store.png";
import googlePlay from "../assets/download/google-play.png";
import devices from "../assets/download/all-devices.svg";

export { logo, personalPhoto };

export const navbarLinks = [
	{ text: "Premium", to: "premium" },
	{ text: "Support", href: "https://support.spotify.com/eg-en/" },
	{ text: "Download", to: "download" },
];

export const navbarDropdownContent = [
	{ text: "Account", to: "account" },
	{ text: "Log out", to: "logout" },
];

export const homeMainBannerContent = [
	{ type: "xsuper", text: "Go Premium. Be happy.", color: "white" },
	{
		type: "link",
		isDownload: false,
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
		isDownload: false,
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

export const footerData = {
	navLists: [
		{
			header: "COMPANY",
			links: [
				{ href: "/about", text: "About" },
				{ href: "https://www.spotifyjobs.com/", text: "Jops" },
				{ href: "https://newsroom.spotify.com/", text: "For the Record" },
			],
		},
		{
			header: "COMMUNITIES",
			links: [
				{ href: "https://artists.spotify.com/", text: "For Artists" },
				{ href: "https://developer.spotify.com/", text: "Developers" },
				{ href: "https://ads.spotify.com/", text: "Advertising" },
				{ href: "https://investors.spotify.com/", text: "Investors" },
				{ href: "https://spotifyforvendors.com/", text: "Vendors" },
			],
		},
		{
			header: "USEFUL LINKS",
			links: [
				{ href: "/support", text: "Support" },
				{ href: "/webplayer", text: "Web Player" },
				{ href: "/download", text: "Free Mobile App" },
			],
		},
	],
	socialMedia: [
		{
			href: "https://instagram.com/spotify",
			class: "instagram",
		},
		{
			href: "https://twitter.com/spotify",
			class: "twitter",
		},
		{
			href: "https://www.facebook.com/Spotify",
			class: "facebook",
		},
	],
	policy: [
		{ href: "https://www.spotify.com/eg-en/legal/", text: "Legal" },
		{ href: "https://www.spotify.com/eg-en/privacy/", text: "Privacy Center" },
		{ href: "https://www.spotify.com/eg-en/legal/privacy-policy/", text: "Privacy Policy" },
		{ href: "https://www.spotify.com/eg-en/legal/cookies-policy/", text: "Cookies" },
		{ href: "https://www.spotify.com/eg-en/legal/privacy-policy/#s3", text: "About Ads" },
	],
};

export { labtop, greenCircle, greenSuccessCheck, devices };

export const downloadMainBannerContent = [
	{
		type: "xmedium",
		text: "Download Spotify",
		color: "black",
	},
	{
		type: "xtiny",
		text: "Play millions of songs and podcasts on your device.",
		color: "black",
	},
	{
		type: "link",
		text: "download",
		isDownload: true,
		filename: "SpotifySetup.exe",
		fg: "black",
		bg: "white",
	},
];

export const downloadDevicesBannerContent = [
	{
		type: "xsmall",
		text: "One account, listen everywhere.",
		color: "white",
	},
	{
		type: "list",
		items: ["MOBILE", "COMPUTER", "TABLET", "CAR", "PLAYSTATION®", "XBOX", "TV", "SPEAKER", "WEB PLAYER"],
	},
];

export const downloadSotres = [
	{
		logo: appStore,
		text: "Download on the App Store",
		href:
			"https://app.adjust.com/wp2zrj?adgroup=app_showcase&campaign=default&creative=control&label=sp_cid%3A10f6891e-091b-4a0b-939e-2be4f541e79b&tracker_limit=250000",
	},
	{
		logo: googlePlay,
		text: "Get it on Google Play",
		href:
			"https://app.adjust.com/ff0trr?adgroup=app_showcase&campaign=default&creative=control&label=sp_cid%3A10f6891e-091b-4a0b-939e-2be4f541e79b&tracker_limit=250000",
	},
	{
		logo: microsoft,
		text: "Get it from Microsoft",
		href: "https://www.microsoft.com/store/p/spotify-music/9ncbcszsjrsb?cid=spotifyweb-windows10-store-direct",
	},
];
