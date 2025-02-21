

const SingleSystem = () => {
    return (
        <section className="w-full py-10 px-[144px] flex flex-col gap-4 justify-center items-center">
            <h1 className="text-[#4D4D4D] text-3xl text-center font-semibold">Manage your entire community <br /> in a single system</h1>
            <p className="text-sm text-gray-400">Who is Nextcent suitable for?</p>
            <div className="w-full justify-between items-center flex pt-6">
                {/* Cards */}
                <div className="w-[299px] text-center h-[300px] justify-center items-center flex flex-col gap-4 shadow-[0px_7px_6px_0px_rgba(0,_0,_0,_0.1)] px-6 py-12">
                    <img className="w-16" src="/Icon-1.svg" alt="Icons Image 1" />
                    <h1 className="text-[#4D4D4D] text-3xl font-semibold">Membership Organisations</h1>
                    <p>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
                {/* Cards */}
                <div className="w-[299px] text-center h-[300px] justify-center items-center flex flex-col gap-4 shadow-[0px_7px_6px_0px_rgba(0,_0,_0,_0.1)] px-6 py-12">
                    <img className="w-16" src="/Icon-2.svg" alt="Icons Image 2" />
                    <h1 className="text-[#4D4D4D] text-3xl font-semibold">National Associations</h1>
                    <p>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
                {/* Cards */}
                <div className="w-[299px] text-center h-[300px] justify-center items-center flex flex-col gap-4 shadow-[0px_7px_6px_0px_rgba(0,_0,_0,_0.1)] px-6 py-12">
                    <img className="w-16" src="/Icon.svg" alt="Icons Image 3" />
                    <h1 className="text-[#4D4D4D] text-3xl font-semibold">Clubs And Groups</h1>
                    <p>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
            </div>
        </section>
    )
}

export default SingleSystem