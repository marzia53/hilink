import Image from "next/image"
import Button from "./Button"


const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-20 pb-32 md:gap-28 lg:py-20 xl:flex-row border-2">
      <div className="hero-map" />
      {/*left*/}

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]" />
        <h1 className="bold-52">
          Learn in the Smartest Way:
          <br />
          Where Knowledge Meets Innovation
        </h1>

        <div className="flex flex-col gap-3 w-full h-full sm:flex-row">

          <Button type="button" title="See More" variant="btn_dark_green" />
          <Button type="button" title="Free course" variant="btn_white_text" />
        </div>

      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            {/*item start */}
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            {/*item end */}
            <p className="bold-20 text-white">Aguas Calientes</p>
          </div>
          {/*item start */}
          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040 Km</p>
            </div>
          </div>
          {/*item end */}

        </div>



      </div>


    </section>
  )
}

export default Hero