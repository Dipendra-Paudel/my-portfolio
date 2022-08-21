// email
// phone number
// facebook link

import ContactForm from "../../ui/ContactForm";

const Contact = () => {
  return (
    <div
      className="px-6 py-10 md:px-10 lg:px-20 xl:px-24 border-t"
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        <div>
          <div className="text-xl text-primary font-bold mb-6 text-center">
            CONTACT ME
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
