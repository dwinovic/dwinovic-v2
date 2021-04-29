import Head from 'next/head';
import {
  Button,
  HeaderSection,
  Navbar,
  FormInput,
  NavbarTop,
  Footer,
  BodyContent,
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
          <NavbarTop dark />
          <div className="h-16 bg-blue-200 2xl:hidden xl:hidden lg:hidden md:block sm:block"></div>
          <HeaderSection
            heading="Get In Touch"
            desc="Interested in hiring me for your project or just want to say hi? You can fill in the contact form below or send me an email to simon.doe@yourwebsite.com"
            btnTitle="Hire Me"
            btnSosmed
          />
          <BodyContent>
            <div className="w-full px-8 flex">
              <form className="flex flex-col space-y-4 w-[80%] mx-auto">
                <div className="flex android:flex-col iphone:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row  android:space-y-4 iphone:space-y-4 md:space-y-0 lg:space-y-0 xl:space-y-0 2xl:space-y-0 md:space-x-4 lg:space-x-4 xl:space-x-4 2xl:space-x-4">
                  <div className="android:w-full iphone:w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2">
                    <FormInput
                      label="name"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      type="text"
                    />
                  </div>
                  <div className="android:w-full iphone:w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2">
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
          </BodyContent>
        </div>
        <Footer />
      </body>
    </>
  );
};
export default Contact;
