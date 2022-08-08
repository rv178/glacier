import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import { FaGithub, FaUserAlt, FaGoogle, FaDiscord } from "react-icons/fa";
import Link from "next/link";
import log from "@shared/logger";

export default function Login() {
	const { data: session, status } = useSession();
	log.debug("Session: " + session);
	log.debug("Status: " + status);

	return (
		<div>
			<Head>
				<title>Login</title>
				<meta
					charSet=""
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="font-jetbrains">
				{!session && status !== "authenticated" && (
					<div className="grid h-screen place-items-center">
						<div className="p-5 grid grid-flow-row h-128 w-64 bg-nord_dark-200 p-4 rounded-3xl text-center drop-shadow-xl">
							<p className="h-8 text-nord_blue-100">
								<Link href="/">
									<a>{"<- Login ->"}</a>
								</Link>
							</p>
							<div className="p-5 grid place-items-center">
								<FaUserAlt className="text-nord_green h-12 w-12" />
							</div>
							<Link href="/api/auth/signin">
								<button
									className="h-14 text-nord_light-300 bg-nord_dark-400 rounded-3xl py-2 px-4 rounded-lg inline-flex items-center"
									onClick={(e) => {
										e.preventDefault();
										signIn("github");
									}}
								>
									<FaGithub />
									<span className="pl-2 pt-1">GitHub</span>
								</button>
							</Link>

							<Link href="/api/auth/signin">
								<button
									className="h-14 text-nord_dark-400 bg-nord_blue-100 rounded-3xl py-2 px-4 rounded-lg inline-flex items-center mt-2"
									onClick={(e) => {
										e.preventDefault();
										signIn("google");
									}}
								>
									<FaGoogle />
									<span className="pl-2 pt-1">Google</span>
								</button>
							</Link>

							<Link href="/api/auth/signin">
								<button
									className="h-14 text-nord_dark-400 bg-nord_blue-400 rounded-3xl py-2 px-4 rounded-lg inline-flex items-center mt-2"
									onClick={(e) => {
										e.preventDefault();
										signIn("discord");
									}}
								>
									<FaDiscord />
									<span className="pl-2 pt-1">Discord</span>
								</button>
							</Link>
						</div>
					</div>
				)}
			</main>
		</div>
	);
}
