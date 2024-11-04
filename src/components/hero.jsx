import Navbar from "./navbar";

export default function Hero() {
  return (
    <div className="relative w-screen">
      <div className="absolute">
        <img
          className="w-screen h-[40rem] object-cover"
          src="https://images.unsplash.com/photo-1581460484520-bc7c3f533c9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjkwfHxneW18ZW58MHx8MHx8fDA%3D"
          alt=""
        />
      </div>
      <div className="relative w-screen flex flex-col">
        <div className="md:mb-[13rem] p-6">
          <Navbar />
        </div>
        <label className="flex justify-center text-start md:text-6xl text-white py-1">
          Team Members
        </label>
        <div className="flex justify-center">
          <label className="font-bold text-xl md:text-xl text-center text-white py-4">
            <a href="/">Home&nbsp;→</a>
          </label>
          <label className="font-bold text-xl md:text-xl text-center text-orange-500 py-4">
            &nbsp;
            {window.location.pathname == "/about"
              ? "About Us"
              : window.location.pathname == "/ourBlog"
              ? "Our Blog"
              : window.location.pathname == "/services"
              ? "Services"
              : "Our Team"}
          </label>
        </div>
      </div>
    </div>
  );
}
