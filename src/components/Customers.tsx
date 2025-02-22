import { IoIosArrowRoundForward } from "react-icons/io";


const Customers = () => {
    return (
        <section className="w-full bg-[#F5F7FA] py-10 px-[144px] gap-16 flex justify-center items-center">
        <div className="w-[30%]">
            <img src="/tesla.svg" alt="Design Img" />
        </div>
        {/* Text */}
        <div className="w-[70%] flex flex-col  gap-6">
            <p className="text-sm text-gray-400">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
            <div className="flex flex-col gap-2">
                <h1 className="text-[#4CAF4F]">Tim Smith</h1>
                <p className="text-sm text-gray-400">British Dragon Boat Racing Association</p>
            </div>
            <div className="flex items-center justify-between gap-6">
                <div className="flex justify-between gap-4">
                    <img src="/Logo7.svg" alt="Logo 7" />
                    <img src="/Logo-1.svg" alt="Logo 1" />
                    <img src="/Logo-2.svg" alt="Logo 2" />
                    <img src="/Logo-3.svg" alt="Logo 3" />
                    <img src="/Logo-4.svg" alt="Logo 4" />
                    <img src="/Logo-5.svg" alt="Logo 5" />
                </div>
                <a className="text-[#4CAF4F] flex items-center gap-4  justify-end" href="#">Meet all customers <IoIosArrowRoundForward className="text-xl" /> </a>
            </div>
        </div>
    </section>
    )
}

export default Customers