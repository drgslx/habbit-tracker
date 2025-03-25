import { getCurrentUser } from "../getCurrentUser";
import prisma from "@/libs/prismadb";
import { redirect } from "next/navigation";

export async function getProducts() {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect("/");
	}

	try {
		const product = await prisma.product.findMany({});

		return { product };
	} catch (error) {
		console.error("Error fetching courses:", error);
		return { product: [] }; // Return an empty array as fallback

	}
}
export async function getProductsById(params) {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect("/");
	}

	const { catId } = params;

	try {
		const product = await prisma.product.findUnique({
			where: { id: parseInt(catId) },
		});

		return { product };
	} catch (error) {
		console.error("Error fetching products:", error);
	}
}
