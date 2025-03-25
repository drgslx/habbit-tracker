"use client";

import React from "react";
import Link from "next/link";

const Categories = () => {
	return (
		<>
			<div>
				<h3 className="text-black font-bold text-[22px] leading-none mb-[15px]">
					Categories
				</h3>
				<ul className="space-y-[10px]">
					<li>
						<Link
							href="#"
							className="flex items-center justify-between hover:text-[#717FF8]"
						>
							Marketing <span>19</span>
						</Link>
					</li>
					<li>
						<Link
							href="#"
							className="flex items-center justify-between hover:text-[#717FF8]"
						>
							GYM Center <span>18</span>
						</Link>
					</li>
					<li>
						<Link
							href="#"
							className="flex items-center justify-between hover:text-[#717FF8]"
						>
							Trends <span>29</span>
						</Link>
					</li>
					<li>
						<Link
							href="#"
							className="flex items-center justify-between hover:text-[#717FF8]"
						>
							Choaching <span>5</span>
						</Link>
					</li>
					<li>
						<Link
							href="#"
							className="flex items-center justify-between hover:text-[#717FF8]"
						>
							Solution <span>7</span>
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Categories;
