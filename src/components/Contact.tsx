import ContactForm from './Features/ContactForm';
import Heading from './Base/Heading';
import Paragraph from './Base/Paragraph';
const Contact = () => {
  return (
    <div id="contact" className="bg-primary p-4 scroll-m-[135px] ">
      <div className="bg-secondary rounded-lg px-4 py-6 desktop:max-w-[1400px] desktop:mx-auto desktop:p-[80px] desktop:my-[80px] my-[8px]">
        <Heading type="H2">Contact</Heading>
        <Paragraph
          className="mt-[20px] desktop:mt-[24px] mb-[24px] desktop:mb-[32px] max-w-[750px] break-words"
          type="Body"
        >
          Recruiters, let&apos;s make the perfect match! I&apos;m eager to bring
          my skills and enthusiasm to a dynamic team. If you&apos;re looking for
          a motivated candidate who&apos;s ready to excel, I&apos;d love to
          connect. Reach out today, and let&apos;s explore the exciting
          possibilities of working together!
        </Paragraph>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
