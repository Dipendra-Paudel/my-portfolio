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
          <h2 className="text-xl text-primary font-bold mb-6 text-center">
            CONTACT ME
          </h2>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
