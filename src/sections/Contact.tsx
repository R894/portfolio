import ContactForm from "../features/ContactForm";
import Footer from "../features/Footer";
import Section from "../features/Section";

const Contact = () => {
    return(
        <Section id="contact" title="Contact" headImage={true}>
          <p className="font-IBM pb-12">I'm currently available for work</p>
          <ContactForm/>
          <Footer/>
        </Section>
    )
};
export default Contact;
