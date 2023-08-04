"use client";
import { FormEvent, useState } from "react";
import { Images } from "@/constants";
import styles from "./Contaxct.module.css";
import Image from "next/image";
import { FormFieldType, FormValueType } from "@/types";
import axios from "axios";

export default function Contact() {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [file, setFile] = useState<any>(null);

  const [formFields, setFormFields] = useState<FormFieldType[]>([
    {
      label: "Full name",
      value: "",
      isRequired: true,
      type: "text",
      name: "fullname",
    },

    {
      label: "Email address",
      value: "",
      isRequired: true,
      type: "email",
      name: "email",
    },

    {
      label: "Company name",
      value: "",
      isRequired: false,
      type: "text",
      name: "companyName",
    },

    {
      label: "Phone number",
      value: "",
      isRequired: false,
      type: "tel",
      name: "phoneNumber",
    },
  ]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let formValues = {} as FormValueType;

    formFields.forEach((field) => {
      formValues = { ...formValues, [field.name]: field.value };
    });

    if (!formValues.fullname.length) {
      setError("Please enter your full name");
      return;
    }

    if (!formValues.email.length) {
      setError("Please enter your email");
      return;
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formValues.email)) {
      setError("Invalid email address");
      return;
    }

    if (!message.length) {
      setError("Please enter your message");
      return;
    }

    // const formData = new FormData();
    // !!file.name.length && formData.append("attachment", file);

    try {
      setLoading(true);
      setSendError("");
      setError("");

      await axios({
        method: "POST",
        url: "https://formspree.io/f/xjvqgjyq",
        // data: { ...formValues, message, attachment: formData },
        data: { ...formValues, message },
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      setIsSuccessful(true);
    } catch (error) {
      setIsSuccessful(false);
      setSendError("Oops! an error occurred!, please try again");
      setError("Oops! an error occurred!, please try again");
    } finally {
      setLoading(false);
    }

    // fetch("https://formbold.com/s/3NKdg", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   // body: JSON.stringify(formValues),
    //   body: JSON.stringify({ ...formValues, message }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  return (
    <section className={styles.contact}>
      <div className={styles.contactTop}>
        <div className={styles.contactHeader}>
          <h3 className={styles.sectionTitleDark}>
            Talk to us
            <span className={`${styles.sectionTitleDark} ${styles.dot}`}>
              .
            </span>
          </h3>
          <p className={styles.sectionBodyDark}>
            Let’s create something great together
          </p>
        </div>

        <Image
          src={Images.people}
          alt="contact image"
          width={256}
          height={375}
          className={styles.people}
        />

        <Image
          className={styles.peopleMobile}
          src={Images.people}
          alt="contact image"
          width={179.2}
          height={262.5}
        />

        <div className={styles.contactTopTexts}>
          <p className={styles.contactTopTextsText}>Don’t like forms?</p>
          <p className={styles.contactTopTextsEmail}>
            Email us: hello@stackbuld.com
          </p>
        </div>
      </div>

      <form
        id="contact"
        className={styles.form}
        onSubmit={(e) => handleSubmit(e)}
        noValidate
      >
        <div className={styles.formHeaderWrapper}>
          <h3 className={styles.formHeader}>Hello,</h3>
          <p className={styles.formHeaderText}>
            Reach out to start a new project or to make general enquiries
          </p>
        </div>

        <div className={styles.line}></div>

        <div className={styles.formInputs}>
          {formFields.map((field, index) => (
            <div className={styles.formInputWrapper} key={index}>
              <label htmlFor={field.label} className={styles.formLabel}>
                {field.label}
                {field.isRequired ? "*" : ""}
              </label>

              <input
                type={field.type}
                id={field.label}
                value={field.value}
                onChange={(e) => {
                  setError("");
                  setFormFields(
                    formFields.map((inputField) =>
                      inputField.label == field.label
                        ? {
                            ...inputField,
                            value: e.target.value,
                          }
                        : { ...inputField }
                    )
                  );
                }}
                className={styles.formInput}
              />
            </div>
          ))}

          <div className={styles.formInputWrapper}>
            <label htmlFor="messageId" className={styles.formLabel}>
              Your message for us*
            </label>
            <textarea
              onChange={(e) => {
                setError("");
                setMessage(e.target.value);
              }}
              value={message}
              id="messageId"
              className={`${styles.formInput} ${styles.textareaInput}`}
            ></textarea>
          </div>

          <div className={styles.attachment}>
            <Image
              src={Images.attachment}
              alt="attachment"
              width={32}
              height={32}
            />
            <p className={styles.attachmentText}>Add attachment</p>
            {/* <input
              onChange={(e: any) => setFile(e.target.files[0])}
              type="file"
              name="attachment"
              accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf, image/*"
            ></input> */}
          </div>

          {!!error.length && <p className={styles.error}>{error}</p>}
          <button
            className={styles.formButton}
            style={{ backgroundColor: isSuccessful ? "#5cb85c" : "#17c2c2" }}
          >
            {loading ? (
              <div className={styles.ldsDualRing}></div>
            ) : !sendError.length && !isSuccessful ? (
              "Send message"
            ) : !sendError.length && isSuccessful ? (
              "Sent Successfully"
            ) : (
              "Send message"
            )}
          </button>
        </div>
      </form>
    </section>
  );
}
