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

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const dataMessage = data;
    const postMessage = await postData('/messages', dataMessage)
      .then((res) => {
        const content = res.data;
        toast.success('Your message has been delivered', {
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
        const error = err.message;
        return error;
      });

    return postMessage;
  };

  return (
    <>
      <Head>
        <title>Dwinovic | Portfolios </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body className="body-contact" id="contactpage">
        <div>
          <NavbarTop dark />
          <div className="main-content"></div>
          <HeaderSection
            heading="Get In Touch"
            desc="Interested in hiring me for your project or just want to say hi? You can fill in the contact form below or send me an email to simon.doe@yourwebsite.com"
            btnTitle="Hire Me"
            btnSosmed
          />
          <BodyContent>
            <div className="contact">
              <form className="form-contact" onSubmit={handleSubmit(onSubmit)}>
                <div className="sender-identity space-y space-x">
                  <div className="wrapper-username">
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
      </body>
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
