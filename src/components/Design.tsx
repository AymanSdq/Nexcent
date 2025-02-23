

const Design = () => {
    return (
        <section className="w-full py-10 md:px-[144px] px-6 gap-16 flex max-md:flex-col justify-center items-center">
            <div className="md:w-[40%] w-full">
                <img src="/Design.svg" alt="Design Img" />
            </div>
            {/* Text */}
            <div className="md:w-[60%] w-full flex flex-col  gap-6">
                <h1 className=" font-semibold text-[36px] text-[#4D4D4D]">How to design your site footer like we did</h1>
                <p className="text-sm text-gray-400">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                <button className="text-white py-3 w-[130px] bg-[#4CAF4F] rounded-sm">Learn More</button>
            </div>
        </section>
    )
}

export default Design