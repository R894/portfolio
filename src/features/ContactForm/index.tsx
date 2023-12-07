import { createRef } from "react";
import Button from "../../components/Button";
import emailjs from '@emailjs/browser';


interface ContactInputProps {
  id: string;
  type?: "text" | "email";
  placeholder: string;
  name?: string;
  labelText: string;
}

const ContactInput: React.FC<ContactInputProps> = ({
  id,
  type,
  placeholder,
  name,
  labelText,
}) => {
  return (
    <div className="flex flex-col gap-4 pb-1 border-b border-brand1 w-full">
      <label htmlFor={`${id}`} className="text-brand1 text-sm">
        {labelText}
      </label>
      <input
        id={id}
        className="bg-transparent"
        name={name}
        type={type ? type : "text"}
        placeholder={placeholder}
      />
    </div>
  );
};

const ContactForm = () => {
  const form: React.RefObject<HTMLFormElement> = createRef();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    emailjs.sendForm('service_z78zmqc', 'template_hfnd4bd', form.current!, '7-mAhYGynPEDPor1g')
      .then((result: { text: unknown; }) => {
          console.log(result.text);
      }, (error: { text: unknown; }) => {
          console.log(error.text);
      });
  };


  return (
    <>
      <h1 className="text-3xl sm:text-4xl bg-transparent text-brand1 border-2 border-brand1 rounded-tl-3xl rounded-br-3xl px-4 py-2">
        Send me a message
      </h1>
      <p className="py-2 text-xs font-IBM">or mail directly: kamil.khalaileh@gmail.com</p>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col items-center gap-4 w-1/2 pt-12">
        <div className="flex flex-col w-full gap-4">
          <div className="flex flex-wrap lg:flex-nowrap justify-between gap-6">
            <ContactInput
              id="from_name"
              type="text"
              name="from_name"
              placeholder="Enter your name"
              labelText="Your name *"
            />
            <ContactInput
              id="from_email"
              type="email"
              name="from_email"
              placeholder="Enter your email"
              labelText="Your email *"
            />
          </div>

          <ContactInput
            id="message"
            type="text"
            name="message"
            placeholder="Enter your message"
            labelText="Your message *"
          />
        </div>
        <Button submit={true} style="primary">Send message</Button>
      </form>
    </>
  );
};
export default ContactForm;
