

const Unseen = () => { 
    return (
        <section className="w-full py-10 md:px-[144px] px-6 gap-16 flex max-md:flex-col justify-center items-center">
            <div className="md:w-[40%] w-full">
                <img src="/unseen.svg" alt="Unseen Img" />
            </div>
            {/* Text */}
            <div className="md:w-[60%] w-full flex flex-col  gap-6">
                <h1 className=" font-semibold text-[36px] text-[#4D4D4D]">The unseen of spending three years at Pixelgrade</h1>
                <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                <button className="text-white py-3 w-[130px] bg-[#4CAF4F] rounded-sm">Learn More</button>
            </div>
        </section>
    )
}

export default Unseen