import React from "react";
import Button from "../../components/Button";

interface ContactInputProps {
  id: string;
  type?: "text" | "email";
  placeholder: string;
  labelText: string;
}

const ContactInput: React.FC<ContactInputProps> = ({
  id,
  type,
  placeholder,
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
        type={type ? type : "text"}
        placeholder={placeholder}
      />
    </div>
  );
};

const ContactForm = () => {
  return (
    <>
      <h1 className="text-4xl bg-transparent text-brand1 border-2 border-brand1 rounded-tl-3xl rounded-br-3xl px-4 py-2">
        Send me a message
      </h1>
      <form className="flex flex-col items-center gap-4 w-1/2 pt-12">
        <div className="flex flex-col w-full gap-4">
          <div className="flex flex-wrap lg:flex-nowrap justify-between gap-6">
            <ContactInput
              id="name"
              type="text"
              placeholder="Enter your name"
              labelText="Your name *"
            />
            <ContactInput
              id="email"
              type="email"
              placeholder="Enter your email"
              labelText="Your email *"
            />
          </div>

          <ContactInput
            id="message"
            type="text"
            placeholder="Enter your message"
            labelText="Your message *"
          />
        </div>
        <Button style="primary">Send message</Button>
      </form>
    </>
  );
};
export default ContactForm;
