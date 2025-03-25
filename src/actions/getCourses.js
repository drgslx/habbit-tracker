import prisma from "@/libs/prismadb";

export async function getCourses(params) {
	const { q, sort, page = 1, pageSize = 9 } = params;

	const getOrderByClause = () => {
		switch (sort) {
			default:
				return { created_at: "desc" }; // Default sorting option
		}
	};

	const parsedPage = parseInt(page, 10);
	const parsedPageSize = parseInt(pageSize, 10);
	const skip = (parsedPage - 1) * parsedPageSize;

	try {
		let where = {};
		if (q) {
			where.OR = [
				{
					title: {
						contains: q,
					},
				},
				{
					overview: {
						contains: q,
					},
				},
			];
		}
		where.approved = true;

		const totalCourses = await prisma.course.count({
			where,
		});
		const totalPages = Math.ceil(totalCourses / parsedPageSize);

		const courses = await prisma.course.findMany({
			where,
			skip: skip,
			take: parsedPageSize,
			orderBy: getOrderByClause(),
			include: {
				user: true,
				reviews: true,
				category: {
					select: {
						name: true,
					},
				},
			},
		});

		return { courses, totalPages, totalCourses };
	} catch (error) {
		console.error("Error fetching courses:", error);
		// Return fallback values in case of an error
		return { courses: [], totalPages: 0, totalCourses: 0 };
	}
}

export async function getHomepageCourses() {
	try {
		const home_courses = await prisma.course.findMany({
			where: { approved: true },
			take: 5,
			orderBy: {
				id: "asc",
			},
			include: {
				user: true,
				reviews: true,
				category: {
					select: {
						name: true,
					},
				},
			},
		});

		return { home_courses: [...home_courses] };
	} catch (error) {
		console.error("Error fetching homepage courses:", error);
		// Return fallback value in case of an error
		return { home_courses: [] };
	}
}
