import { createClient } from "@sanity/client";

const client = createClient({
	projectId: "f65w1myo",
	dataset: "production",
	apiVersion: "2024-03-20",
	useCdn: true,
	// token: process.env.SANITY_SECRET_TOKEN,
});

export default client;
