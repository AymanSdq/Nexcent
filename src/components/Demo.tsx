import { IoIosArrowRoundForward } from "react-icons/io"


const Demo = () => {
    return (
        <section className="w-full py-10 px-[144px] flex justify-center items-center flex-col gap-6 bg-[#F5F7FA]">
            <h1 className="text-[64px] text-[#263238] text-center leading-[76px]">Pellentesque suscipit <br /> fringilla libero eu.</h1>
            <a href="#" className="text-white flex items-center py-3 px-6 rounded-md bg-[#4CAF4F]">Get a Demo <IoIosArrowRoundForward className="text-xl" /></a>
        </section>
    )
}

export default Demo