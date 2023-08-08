"use client";
import { FormEvent, useCallback, useState, useEffect } from "react";
import { Images } from "@/constants";
import styles from "./Contaxct.module.css";
import Image from "next/image";
import { FormFieldType, FormValueType } from "@/types";
import axios from "axios";
import { SectionWrapper } from "..";
// import { useExecuteReCaptcha } from "@rusted/react-recaptcha-v3";
// import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useReCaptcha } from "next-recaptcha-v3";
// import { verifyCaptchaAction } from "@/app/api/recaptcha";
import { handleRecaptcha } from "@/utils/handleRecaptcha";

export default function Contact() {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isHuman, setIsHuman] = useState(false);
  const [file, setFile] = useState<any>(null);

  // const executeRecaptcha = useExecuteReCaptcha();
  const { executeRecaptcha } = useReCaptcha();

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

  const handleReCaptchaVerify = async () => {
    // if (!!executeRecaptcha) {
    // const token = await executeRecaptcha("LOGIN");
    // console.log(token);

    const verified = await handleRecaptcha({
      action: "LOGIN",
      key: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
    });

    console.log(verified);

    // verified ? setIsHuman(true) : setIsHuman(false);
    // }
  };

  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);

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

    if (!isHuman) {
      setError("Google ReCaptcha Failed");
      return;
    }

    const formData = new FormData();
    !!file?.name?.length && formData.append("Attachment", file);
    formData.append("Full Name", formValues.fullname);
    formData.append("Email", formValues.email);
    formData.append("Mesage", message);
    formValues?.companyName?.length &&
      formData.append("Company Name", formValues.companyName);
    formValues?.phoneNumber?.length &&
      formData.append("Phone Number", formValues.phoneNumber);

    try {
      setLoading(true);
      setSendError("");
      setError("");

      await axios({
        method: "POST",
        // url: "https://data.endpoint.space/clkxto92x000308mcs9y9rl5e",
        // url: "https://usebasin.com/f/dec2778f04b3",
        url: "https://f123e9f9c3929957628df1396e369e41.m.pipedream.net",
        data: formData,
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
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
  };

  return (
    <section className={styles.contact}>
      <div className={styles.contactTop}>
        <div className={styles.contactHeader}>
          <SectionWrapper>
            <h3 className={styles.sectionTitleDark}>
              Talk to us
              <span className={`${styles.sectionTitleDark} ${styles.dot}`}>
                .
              </span>
            </h3>
          </SectionWrapper>
          <SectionWrapper>
            <p className={styles.sectionBodyDark}>
              Let’s create something great together
            </p>
          </SectionWrapper>
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
          <SectionWrapper>
            <p className={styles.contactTopTextsText}>Don’t like forms?</p>
          </SectionWrapper>
          <SectionWrapper>
            <p className={styles.contactTopTextsEmail}>
              Email us: hello@stackbuld.com
            </p>
          </SectionWrapper>
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
                name={field.name}
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

          <div
            className={`${styles.formInputWrapper} ${styles.formInputWrapperMessage}`}
          >
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

          <div className={styles.fileAttachmentWrapper}>
            <label className={styles.attachment} htmlFor="fileAttachment">
              <Image
                src={Images.attachment}
                alt="attachment"
                width={32}
                height={32}
              />
              <p className={styles.attachmentText}>Add attachment</p>
            </label>

            {file?.name?.length && (
              <p className={styles.attachmentSelectedText}>{file.name}</p>
            )}
          </div>

          <input
            className={styles.fileAttachment}
            onChange={(e: any) => setFile(e.target.files[0])}
            type="file"
            name="attachment"
            accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf, image/*"
            id="fileAttachment"
          ></input>

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

        <div className={styles.captchaWrapper}>
          <small className={styles.captchaText}>
            This site is protected by reCAPTCHA and the Google{" "}
            <a
              href="https://policies.google.com/privacy"
              className={styles.captchaTextAccent}
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://policies.google.com/terms"
              className={styles.captchaTextAccent}
            >
              Terms of Service
            </a>{" "}
            apply.
          </small>
        </div>
      </form>
    </section>
  );
}
