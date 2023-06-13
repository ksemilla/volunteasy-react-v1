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
        className="flex justify-center py-2"
      >
        <div>
          <img src="/logo-filled.png" />
        </div>
      </div>
    </section>
  )
}

export default About
