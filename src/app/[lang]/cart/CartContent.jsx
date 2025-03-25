"use client";
import CartTable from "@/components/Cart/CartTable";
import NewsletterBox from "@/components/Shared/NewsletterBox";
import React from "react";

const CartContent = () => {
	return (
		<div className="bg-[#E1F8E6]">
			<CartTable />

			<NewsletterBox />
		</div>
	);
};

export default CartContent;
