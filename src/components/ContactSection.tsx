import * as motion from "motion/react-client"

const ContactSection = () => {
  const socialStyle = {
    width: 40,
    height: 40,
    borderRadius: 16,
    cursor: "pointer",
    padding: 8,
    backgroundColor: "white",
  }
  return (
    <div id="contact" className="flex flex-col items-center gap-4">
      <h1 className="text-5xl font-bold text-center pt-4">Contact</h1>
      <p className="text-xl text-blue-100"><a href="mailto:fabiansanchezd.com">Click here to send me an email.</a></p>
      <div className="flex flex-row gap-2">
        <a href="https://github.com/FabianSanchezD">
          <motion.img
            src="/logos/github_logo.svg"
            alt="My GitHub profile"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={socialStyle}
          />
        </a>
        <a href="https://www.linkedin.com/in/fabian-sanchez-d/">
          <motion.img
            src="/logos/linkedin_logo.png"
            alt="My LinkedIn profile"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={socialStyle}
          />
        </a>
        <a href="https://x.com/fabiansanchd">
          <motion.img
            src="/logos/x_logo.svg"
            alt="My X profile"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={socialStyle}
          />
        </a>
      </div>
    </div>
  )
}

export default ContactSection