import Head from 'next/head';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Button,
  HeaderSection,
  Navbar,
  FormInput,
  NavbarTop,
  Footer,
  BodyContent,
} from '../../components';
import { postData } from '../../utils';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';

const Contact = () => {
  const [showLoader, setShowLoader] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setShowLoader(true);

    const dataMessage = data;
    const postMessage = await postData('/messages', dataMessage)
      .then((res) => {
        const content = res.data;
        setShowLoader(false);

        toast.warning('Your message has been delivered', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        setShowLoader(false);
        const error = err.message;
        return error;
      });

    return postMessage;
  };

  const Loader = () => {
    return (
      <div className="absolute  inset-0 flex items-center justify-center">
        <Image src="/gif/loader.gif" height={225} width={225} />
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Dwinovic | Portfolios </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div
        className="body-contact flex flex-col justify-between h-[100vh]"
        id="contactpage"
      >
        <div>
          <NavbarTop dark />
          <div className="main-content"></div>
          <HeaderSection
            heading="Get In Touch"
            desc="Interested in hiring me for your project or just want to say hi? You can fill in the contact form below or send me an email to cahyo.dwinov@gmail.com"
            btnTitle="Hire Me"
            btnSosmed
          />
          <BodyContent>
            <div className="contact w-full px-8 flex pb-16">
              <form className="form-contact" onSubmit={handleSubmit(onSubmit)}>
                <div className="sender-identity space-y space-x">
                  <div className="wrapper-username">
                    {showLoader && <Loader />}
                    <FormInput
                      placeholder="Your Name"
                      type="text"
                      {...register('username', { required: true })}
                    />
                    {errors.username && (
                      <span className="inline-block mt-2 text-red-300 font-semibold">
                        Hi, Whats Your Name ? :D
                      </span>
                    )}
                  </div>
                  <div className="wrapper-email">
                    <FormInput
                      placeholder="Your Email"
                      type="Email"
                      {...register('email', { required: true })}
                    />
                    {errors.email && (
                      <span className="inline-block mt-2 text-red-300 font-semibold">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <FormInput
                  type="textarea"
                  placeholder="Send Message"
                  {...register('message')}
                />
                <FormInput type="submit" />
              </form>
            </div>
          </BodyContent>
        </div>
        <Footer />
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      ;
    </>
  );
};
export default Contact;
