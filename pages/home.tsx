/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { useEffect } from "react";
import { checkPermission } from "../functions/checkPermission";

const Home = () => {
	const router = useRouter();
	useEffect(() => {
		const fn = async () => {
			const permission = await checkPermission(
				router.pathname,
				router.query["role"]
			);
			if (!permission) {
				router.replace("/unauth");
			}
		};

		if (router.query["role"] != undefined) {
			fn();
		}
	}, [router]);
	return <div>Home Page</div>;
};

export default Home;
