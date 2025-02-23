import { GoPeople } from "react-icons/go";
import { LiaHandshakeSolid } from "react-icons/lia";
import { PiCursorClick } from "react-icons/pi";
import { CiCreditCard1 } from "react-icons/ci";





const Helping = () => {
    return (
        <section className="bg-[#F5F7FA] w-full py-10 md:px-[144px] px-6 md:flex-row flex-col flex justify-center items-center">
            <div className="md:w-1/2  w-full flex flex-col gap-3">
                <h1 className="text-[36px] font-semibold ">Helping a local <br /> <span className="text-[#4CAF4F]">business reinvent itself</span></h1>
                <p className="text-sm text-gray-400">We reached here with our hard work and dedication</p>
            </div>
            <div className="md:w-1/2 max-md:py-4 w-full gap-4 flex flex-col">
                {/* Top */}
                <div className="w-full max-md:gap-4 flex-col md:flex-row flex">
                    {/* Left section */}
                    {/* Click */}
                    <div className="md:w-1/2 w-full flex gap-4">
                        <div className="">
                            <GoPeople className="text-[#4CAF4F] text-[40px]" />
                        </div>
                        <div className="flex flex-col">
                            <div className="w-full">
                                <h1 className="font-semibold text-gray-800 text-2xl">2,245,341</h1>
                            </div>
                            <div className="w-full">
                                <p className="text-sm">Members</p>
                            </div>
                        </div>
                    </div>
                    {/* Right sections */}
                    <div className="md:w-1/2 w-full  flex gap-4">
                        <div className="">
                            <LiaHandshakeSolid className="text-[#4CAF4F] text-[40px]" />
                        </div>
                        <div className="flex flex-col">
                            <div className="w-full">
                                <h1 className="font-semibold text-gray-800 text-2xl">46,328</h1>
                            </div>
                            <div className="w-full">
                                <p className="text-sm">Clubs</p>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Bottom */}
                <div className="w-full max-md:gap-4 flex-col md:flex-row flex">
                    {/* Left section */}
                    {/* Click */}
                    <div className="md:w-1/2 w-full  flex gap-4">
                        <div className="">
                            <PiCursorClick className="text-[#4CAF4F] text-[40px]" />  
                        </div>
                        <div className="flex flex-col">
                            <div className="w-full">
                                <h1 className="font-semibold text-gray-800 text-2xl">828,867</h1>
                            </div>
                            <div className="w-full">
                                <p className="text-sm">Event Bookings</p>
                            </div>
                        </div>
                    </div>
                    {/* Right sections */}
                    <div className="md:w-1/2 w-full flex gap-4">
                        <div className="">
                            <CiCreditCard1 className="text-[#4CAF4F] text-[40px]" />  
                        </div>
                        <div className="flex flex-col">
                            <div className="w-full">
                                <h1 className="font-semibold text-gray-800 text-2xl">1,926,436</h1>
                            </div>
                            <div className="w-full">
                                <p className="text-sm">Payments</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Helping