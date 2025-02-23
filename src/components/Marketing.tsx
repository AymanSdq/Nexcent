import { IoIosArrowRoundForward } from "react-icons/io";


const Marketing = () => {
    return (
        <section className="w-full pt-10 pb-30 px-[144px] flex flex-col gap-4 justify-center items-center">
                <h1 className="text-[#4D4D4D] text-3xl text-center font-semibold">Caring is the new marketing</h1>
                <p className="text-sm text-center text-gray-400">The Nexcent blog is the best place to read about the latest membership insights, <br /> trends and more. See who's joining the community, <br /> read about how our community are increasing their membership income and lot's more.​</p>
                <div className="w-full grid grid-cols-3 items-center gap-6 pt-6">
                    {/* Cards */}
                    <div className="col-span-1 h-[250px] relative rounded-md">
                        <img src="/pcwork.webp" alt="Pc Work" className="w-full h-full object-cover rounded-md" />
                        <div className="w-[80%] shadow-[0px_9px_6px_0px_rgba(0,_0,_0,_0.1)] flex gap-4 justify-center items-center flex-col px-6 py-4 absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 bg-white rounded-md ">
                            <p className=" font-semibold text-[#717171] text-center">Creating Streamlined Safeguarding Processes with OneRen</p>
                            <a className="text-[#4CAF4F] flex items-center gap-4  justify-end" href="#">Read more <IoIosArrowRoundForward className="text-xl" /> </a>
                        </div>
                    </div>
                    <div className="col-span-1 h-[250px] relative rounded-md">
                        <img src="/statistics.webp" alt="Statistics" className="w-full h-full object-cover rounded-md" />
                        <div className="w-[80%] shadow-[0px_9px_6px_0px_rgba(0,_0,_0,_0.1)] flex gap-4 justify-center items-center flex-col px-6 py-4 absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 bg-white rounded-md ">
                            <p className=" font-semibold text-[#717171] text-center">What are your safeguarding responsibilities and how can you manage them?</p>
                            <a className="text-[#4CAF4F] flex items-center gap-4  justify-end" href="#">Read more <IoIosArrowRoundForward className="text-xl" /> </a>
                        </div>
                    </div>
                    <div className="col-span-1 h-[250px] relative rounded-md">
                        <img src="/writing.webp" alt="Coding" className="w-full h-full object-cover rounded-md" />
                        <div className="w-[80%] shadow-[0px_9px_6px_0px_rgba(0,_0,_0,_0.1)] flex gap-4 justify-center items-center flex-col px-6 py-4 absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 bg-white rounded-md ">
                            <p className=" font-semibold text-[#717171] text-center">Revamping the Membership Model with Triathlon Australia</p>
                            <a className="text-[#4CAF4F] flex items-center gap-4  justify-end" href="#">Read more <IoIosArrowRoundForward className="text-xl" /> </a>
                        </div>
                    </div>
                </div>
            </section>
            
    )
}

export default Marketing