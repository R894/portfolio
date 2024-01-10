import ContactForm from "../features/ContactForm";
import Section from "../features/Section";

const Contact = () => {
  return (
    <Section id="contact" title="Contact"footer={true}>
      <div className="flex flex-col justify-center items-center w-full">

        <ContactForm />
      </div>
    </Section>
  );
};
export default Contact;
