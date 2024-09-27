import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      toast.error("Email field is required");
      return;
    }
    // validate email
    if (!/^\S+@\S+\.\S+$/i.test(email)) {
      toast.error("Invalid email address");
      return;
    }

    alert(JSON.stringify(email));
    setEmail("");
  };
  return (
    <footer className="bg-[#110F0F] text-white w-full">
      <div className="box !px-4">
        {/* news latter */}
        <div className="py-8 border-b-2 border-neutral-600 flex md:items-center md:flex-row flex-col md:gap-4 gap-8">
          <div className="md:w-1/2 w-full">
            <h3 className="text-lg font-semibold">Lets Connected ️‍🔥</h3>
            <p className="max-w-lg text-sm opacity-70 mt-4\2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cum
              sint a atque velit nostrum repellendus
            </p>
          </div>

          <div className="md:w-1/2 w-full">
            <form
              onSubmit={handleSubmit}
              className="bg-[#343333] pr-2 pl-4 py-1 h-10 rounded-full flex md:max-w-md md:ml-auto "
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Address"
                className="flex-1 outline-none border-none h-full bg-transparent gap-4 text-sm font-medium"
              />
              <button type="submit" className="bg-white text-black">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="py-8 grid md:grid-cols-5 sm:grid-cols-3 min-[468px]:grid-cols-2 grid-cols-1 gap-6">
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 mt-2">
              <li>
                <Link
                  href="#"
                  target="_blank"
                  className="hover:text-primary transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  target="_blank"
                  className="hover:text-primary transition duration-300"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  target="_blank"
                  className="hover:text-primary transition duration-300"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  target="_blank"
                  className="hover:text-primary transition duration-300"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  target="_blank"
                  className="hover:text-primary transition duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  target="_blank"
                  className="hover:text-primary transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 mt-2">
              <li>
                <Link
                  href="#"
                  target="_blank"
                  className="hover:text-primary transition duration-300"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  target="_blank"
                  className="hover:text-primary transition duration-300"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  target="_blank"
                  className="hover:text-primary transition duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  target="_blank"
                  className="hover:text-primary transition duration-300"
                >
                  News
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2 mt-2">
              <li>
                <Link
                  href="#"
                  target="_blank"
                  className="hover:text-primary transition duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  target="_blank"
                  className="hover:text-primary transition duration-300"
                >
                  Newsletter
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  target="_blank"
                  className="hover:text-primary transition duration-300"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  target="_blank"
                  className="hover:text-primary transition duration-300"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2 mt-2">
              <li>
                <Link
                  href="#"
                  target="_blank"
                  className="hover:text-primary transition duration-300"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  target="_blank"
                  className="hover:text-primary transition duration-300"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  target="_blank"
                  className="hover:text-primary transition duration-300"
                >
                  Licenses
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  target="_blank"
                  className="hover:text-primary transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Social</h3>
            <ul className="space-y-2 mt-2">
              <li>
                <a
                  href="#"
                  target="_blank"
                  className="hover:text-primary transition duration-300"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  className="hover:text-primary transition duration-300"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  className="hover:text-primary transition duration-300"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  className="hover:text-primary transition duration-300"
                >
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-8 flex sm:items-center sm:flex-row flex-col justify-between sm:gap-0 gap-6">
          <p className="">
            © Copyright 2022
            <span className="text-primary ml-1">Vinsum Axpress</span>. All
            Rights Reserved
          </p>
          <div className="flex gap-8 flex-wrap">
            <a
              href="#"
              target="_blank"
              className="text-lg text-white"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="#"
              target="_blank"
              className="text-lg text-white"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a
              href="#"
              target="_blank"
              className="text-lg text-white"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a
              href="#"
              target="_blank"
              className="text-white text-lg"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
