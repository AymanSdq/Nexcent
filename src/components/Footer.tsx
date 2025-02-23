    const Footer = () => {
    return (
        <footer className="footer bg-[#263238] text-white sm:footer-horizontal py-10 px-[144px] ">
        <aside>
            <img src="/logo-footer.svg" alt="Footer logo" />
            <p className="py-6">
            Copyright © 2020 Nexcent ltd.
            <br />
            All rights reserved
            </p>
        </aside>
        <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">Contact us</a>
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">Testimonials</a>
        </nav>
        <nav>
            <h6 className="footer-title">Support</h6>
            <a className="link link-hover">Help center</a>
            <a className="link link-hover">Terms of service</a>
            <a className="link link-hover">Legal</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Status</a>
        </nav>
        <form>
            <h6 className="footer-title">Staying up to date</h6>
            <fieldset className="w-80">
            <div className="join">
                <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered bg-[#263238] join-item" />
            </div>
            </fieldset>
        </form>
        </footer>
    );
    };

    export default Footer;
