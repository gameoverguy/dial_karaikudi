import SectionTemplate_01 from "../../components/SectionTemplate_01";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import { Link } from "react-router-dom";

import {
  validEmail,
  validName,
  validSubject,
  validMessage,
} from "../../components/regex";
import { useRef, useState } from "react";

const ContactUs = () => {
  const [formSuccess, setFormSuccess] = useState(false);
  const formRef = useRef(null); // Create a ref for the target div

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (field, value) => {
    // Update state dynamically
    if (field === "name") setName(value);
    if (field === "email") setEmail(value);
    if (field === "subject") setSubject(value);
    if (field === "message") setMessage(value);

    // Validate the fields immediately
    validateFields(field, value);
  };

  const validateFields = (field, value) => {
    let newErrors = {
      name: name ? errors.name : "This field is required",
      email: email ? errors.email : "This field is required",
      subject: subject ? errors.subject : "This field is required",
      message: message ? errors.message : "This field is required",
    };

    // Validate field-specific rules
    if (field === "name") {
      newErrors.name = value ? "" : "This field is required";
      if (value && !validName.test(value)) {
        newErrors.name =
          "* name must contain at least 3 characters and at least one alphabet";
      }
    } else if (field === "email") {
      newErrors.email = value ? "" : "This field is required";
      if (value && !validEmail.test(value)) {
        newErrors.email = "* Please enter a valid email address";
      }
    } else if (field === "subject") {
      newErrors.subject = value ? "" : "This field is required";
      if (value && !validSubject.test(value)) {
        newErrors.subject =
          "* subject must contain at least 3 characters and at least one alphabet";
      }
    } else if (field === "message") {
      newErrors.message = value ? "" : "This field is required";
      if (value && !validMessage.test(value)) {
        newErrors.message =
          "* message must contain at least 10 characters and at least one alphabet";
      }
    }

    setErrors(newErrors);
  };

  const handleSubmit = () => {
    let newErrors = {
      name: name ? errors.name : "This field is required",
      email: email ? errors.email : "This field is required",
      subject: subject ? errors.subject : "This field is required",
      message: message ? errors.message : "This field is required",
    };

    setErrors(newErrors);

    if (name && email && subject && message) {
      setFormSuccess(true);
    } else {
      setFormSuccess(false);
    }

    console.log(formSuccess);

    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div>
      <div className="flex justify-center items-center bg-linear-to-r from-blue-700 to-teal-500 px-8 py-12">
        <SectionTemplate_01
          sectionTitle={"Contact"}
          sectionDesc={
            "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit."
          }
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-12 py-12 w-10/12 md:w-8/12 mx-auto">
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="text-3xl text-cyan-600">
            <LocationOnIcon fontSize="large" />
          </div>
          <h1 className="text-3xl text-blue-800">Address</h1>
          <p className="text-base text-gray-500">123 Fifth Avenue, NY 10160</p>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="text-4xl text-cyan-600">
            <EmailIcon fontSize="large" />
          </div>
          <h1 className="text-3xl text-blue-800">E-mail</h1>
          <p className="text-base text-gray-500">contact@webstudio.com</p>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="text-4xl text-cyan-600">
            <LocalPhoneIcon fontSize="large" />
          </div>
          <h1 className="text-3xl text-blue-800">Phone</h1>
          <p className="text-base text-gray-500">123 455 755</p>
        </div>
      </div>

      {!formSuccess ? (
        <div className="flex justify-center items-center bg-blue-100 py-16">
          <div className="flex flex-col justify-center items-center gap-4 w-8/12 md:w-6/12 mx-auto">
            <div className="flex flex-col justify-center items-center gap-4 w-full">
              <h1 className="text-3xl text-blue-800">Send Us a Message</h1>
              <div className="flex flex-col gap-4 items-start w-full">
                <label className="text-base font-bold text-gray-400">
                  Your Name (required) <span className="text-red-600"> *</span>
                </label>
                <input
                  maxLength={20}
                  value={name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="bg-gray-100 border border-gray-200 rounded w-full h-10 outline-0 text-base px-3 py-4"
                  type="text"
                />
                {/* <label className="text-xs w-full text-wrap text-red-500 font-bold">
                {name && !validName.test(name)
                  ? "* name must contain atleast 3 characters and atleast one alphabet"
                  : ""}
              </label> */}
                <label className="text-xs w-full text-wrap text-red-500 font-bold">
                  {errors.name}
                </label>
              </div>
              <div className="flex flex-col gap-4 items-start w-full">
                <label className="text-base font-bold text-gray-400">
                  Your Email (required) <span className="text-red-600"> *</span>
                </label>
                <input
                  value={email}
                  maxLength={40}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="bg-gray-100 border border-gray-200 rounded w-full h-10 outline-0 text-base px-3 py-4"
                  type="text"
                />
                {/* <label className="text-xs w-full text-wrap text-red-500 font-bold">
                {email && !validEmail.test(email)
                  ? "* Please enter a valid email address"
                  : ""}
              </label> */}
                <label className="text-xs w-full text-wrap text-red-500 font-bold">
                  {errors.email}
                </label>
              </div>
              <div className="flex flex-col gap-4 items-start w-full">
                <label className="text-base font-bold text-gray-400">
                  Subject (required) <span className="text-red-600"> *</span>
                </label>
                <input
                  value={subject}
                  maxLength={40}
                  onChange={(e) => handleChange("subject", e.target.value)}
                  className="bg-gray-100 border border-gray-200 rounded w-full h-10 outline-0 text-base px-3 py-4"
                  type="text"
                />
                {/* <label className="text-xs w-full text-wrap text-red-500 font-bold">
                {subject && !validSubject.test(subject)
                  ? "* subject must contain atleast 3 characters and atleast one alphabet"
                  : ""}
              </label> */}
                <label className="text-xs w-full text-wrap text-red-500 font-bold">
                  {errors.subject}
                </label>
              </div>
              <div className="flex flex-col gap-4 items-start w-full">
                <label className="text-base font-bold text-gray-400">
                  Your Message (required){" "}
                  <span className="text-red-600"> *</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  maxLength={300}
                  rows={4}
                  cols={40}
                  className="bg-gray-100 border border-gray-200 rounded w-full outline-0 text-base px-3 py-4"
                />
                {/* <label className="text-xs w-full text-wrap text-red-500 font-bold">
                {message && !validMessage.test(message)
                  ? "* message must contain atleast 10 characters and atleast one alphabet"
                  : ""}
              </label> */}
                <label className="text-xs w-full text-wrap text-red-500 font-bold">
                  {errors.message}
                </label>
              </div>

              <Link
                onClick={handleSubmit}
                className="w-fit px-8 py-4 bg-blue-800 text-white/60 rounded-4xl shadow-2xl transition delay-100 duration-400 ease-in-out hover:-translate-y-2 cursor-pointer"
              >
                Send Message
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div
          ref={formRef}
          className="text-xl text-green-600 text-center py-24 bg-green-300"
        >
          Thanks for contacting us! We will be in touch with you shortly.
        </div>
      )}

      <div className="flex justify-center items-center bg-linear-to-r from-blue-700 to-teal-500 px-8 py-12">
        <SectionTemplate_01
          sectionTitle={"Are You Ready to Join The Club?"}
          sectionDesc={
            "Get a free quote from one of our consultants to discuss which option would work best for your needs"
          }
          sectionButtonLabel={"Contact Us"}
        />
      </div>
    </div>
  );
};

export default ContactUs;
