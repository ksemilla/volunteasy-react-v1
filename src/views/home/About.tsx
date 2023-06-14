const About = () => {
  return (
    <section className="bg-purple-50 pt-16 rounded-t-[100px]">
      <h1 className="text-center text-4xl font-medium">About</h1>
      <p className="px-10 pb-20 mt-8 text-xl font-light text-center">
        Welcome to our platform, a company that was founded with the goal of
        making the world a better place by increasing volunteerism. Our mission
        is to connect volunteers with organisations that are making positive
        impact in their communities and beyond.
        <br />
        <br />
        We believe that volunteering is one of the most powerful ways to make a
        positive impact in the world. It allows individuals to give back to
        their communities, gain new skills, and build meaningful relationships
        with others who share their passion for creating positive change.
        <br />
        <br />
        Our platform is designed to make volunteering easier and more accessible
        than ever before. We work with a wide range of organisations, from large
        charities to small grassroots initiatives, to help them find the
        volunteers they need to achieve their goals. We also offer a range of
        tools and resources to help volunteers find opportunities that match
        their interests and skills, and to make the most of their volunteering
        experience.
        <br />
        <br />
        At the heart of everything we do si our commitment to making difference
        in the world. We believe that by connecting volunteers with
        organisations that are working to create positive change, we can help to
        build stronger, more resilient communities and make a lasting impact on
        the world around us.
        <br /> <br />
        Thank you for joining us on this journey, and for your commitment to
        making the world a better place through{" "}
        <span className="font-medium">Volunteasy</span>, volunteering made easy!
      </p>
      <div
        style={{ backgroundColor: "#8a3dc4" }}
        className="flex flex-col items-center justify-center py-8 space-y-4"
      >
        <div>
          <img src="/logo-filled.png" />
        </div>
        <div className="flex space-x-8">
          <div>
            <i className="fa-brands fa-linkedin text-3xl text-white" />
          </div>
          <div>
            <i className="fa-brands fa-instagram text-3xl text-white" />
          </div>
          <div>
            <i className="fa-brands fa-facebook text-3xl text-white" />
          </div>
        </div>
        <div className="flex divide-x divide-gray-100/20 space-x-2 text-white">
          <div className="px-2">
            <i className="fa-regular fa-copyright"></i>{" "}
            <span>2023 Volunteasy</span>
          </div>
          <span className="px-2">Terms and Condition</span>
          <span className="px-2">Privacy Policy</span>
        </div>
      </div>
    </section>
  )
}

export default About
