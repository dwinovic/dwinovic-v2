import Head from 'next/head';
import {
  Button,
  HeaderSection,
  Navbar,
  FormInput,
  Footer,
} from '../../components';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Dwinovic | Portfolios </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body
        className="flex flex-col justify-between h-[100vh]"
        id="contactpage"
      >
        <div>
          <HeaderSection
            heading="Get In Touch"
            desc="Interested in hiring me for your project or just want to say hi? You can fill in the contact form below or send me an email to simon.doe@yourwebsite.com"
            btnTitle="Hire Me"
            btnSosmed
          />
          <div className="container mx-auto pt-8 flex relative">
            <div className="w-72">
              <Navbar />
            </div>
            <div className="w-full px-8 flex">
              <form className="flex flex-col space-y-4 w-[80%] mx-auto">
                <div className="flex flex-cols space-x-4">
                  <div className="w-1/2">
                    <FormInput
                      label="name"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      type="text"
                    />
                  </div>
                  <div className="w-1/2">
                    <FormInput
                      label="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      type="Email"
                    />
                  </div>
                </div>
                <div className="h-full">
                  <FormInput
                    typeForm="textarea"
                    id="message"
                    type="textarea"
                    placeholder="Send Message"
                    name="message"
                  />
                </div>
                <div className="w-full bg-red-100">
                  <Button title="Submit Now" type="fill" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </body>
    </>
  );
};
export default Contact;
