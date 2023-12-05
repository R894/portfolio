import ContactForm from "../features/ContactForm";
import Section from "../features/Section";

const Contact = () => {
  return (
    <Section id="contact" title="Contact" headImage={true} footer={true}>
      <div className="flex flex-col justify-center items-center w-full">
        <p className="font-IBM pb-12">I'm currently available for work</p>
        <ContactForm />
      </div>
    </Section>
  );
};
export default Contact;
