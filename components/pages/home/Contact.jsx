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
          <h1 className="text-2xl font-bold text-primary text-center mb-4 md:mb-6">
            CONTACT ME
          </h1>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
