import Image from "next/image"
import Button from "./Button"


const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-20 pb-32 md:gap-28 lg:py-20 xl:flex-row border-2 border-red-500 ">
<div className="hero-map"/> 
{/*left*/}

<div className="relative z-20 flex flex-1 flex-row xl:w-1/2">
    <Image
    src="/camp.svg"
    alt="camp"
    width={50}
    height={50}
    className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"/>
    <h1 className="bold-52">
        Learn in the Smartest Way:
        <br/>
        Where Knowledge Meets Innovation
    </h1>
</div>

<div className="flex gap-3 w-full h-full lg:flex-row">
    <Button type="button" title="See More" variant="btn_green"/>
</div>
    </section>
  )
}

export default Hero