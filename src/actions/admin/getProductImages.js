import { getCurrentUser } from "../getCurrentUser";
import prisma from "@/libs/prismadb";
import { redirect } from "next/navigation";

export async function getProductsImages() {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect("/");
	}

	try {
		const productImage = await prisma.productImage.findMany({});

		return { productImage };
	} catch (error) {
		console.error("Error fetching courses:", error);
		return { productImage: [] }; // Return an empty array as fallback

	}
}
export async function getProductsImagesById(params) {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect("/");
	}

	const { catId } = params;

	try {
		const productImage = await prisma.productImage.findUnique({
			where: { id: parseInt(catId) },
		});

		return { productImage };
	} catch (error) {
		console.error("Error fetching productImages:", error);
	}
}
