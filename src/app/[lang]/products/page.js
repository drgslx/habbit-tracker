import PageBannerTitle from "@/components/Shared/PageBannerTitle";


export const metadata = {
  title: "Products | Ultimate Arena Fighting",
};

export default async function Products({ params: { lang } }) {

  return (
    <>
      <PageBannerTitle
        title="Products"
        homeText="Home"
        homeUrl={`/${lang}`}
        image="/images/shape1.jpg"
        image2="/images/shape2.jpg"
        image3="/images/shape3.jpg"
        image4="/images/shape4.jpg"
      />



this is a test for products apge

    </>
  );
}
