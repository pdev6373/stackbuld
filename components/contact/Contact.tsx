"use client";
import { useState } from "react";
import { Images } from "@/constants";
import styles from "./Contaxct.module.css";
import Image from "next/image";
import { FormFieldType } from "@/types";

export default function Contact() {
  const [formFields, setFormFields] = useState<FormFieldType[]>([
    {
      label: "Full name",
      value: "",
      isRequired: true,
      type: "text",
    },

    {
      label: "Email address",
      value: "",
      isRequired: true,
      type: "email",
    },

    {
      label: "Company name",
      value: "",
      isRequired: false,
      type: "text",
    },

    {
      label: "Phone number",
      value: "",
      isRequired: false,
      type: "tel",
    },
  ]);

  return (
    <section className={styles.contact}>
      <div className={styles.contactTop}>
        <div className={styles.contactHeader}>
          <h3 className={styles.sectionTitleDark}>
            Talk to us<span className={styles.dot}>.</span>
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
        />

        <div className={styles.contactTopTexts}>
          <p className={styles.contactTopTextsText}>Don’t like forms?</p>
          <p className={styles.contactTopTextsEmail}>
            Email us: hello@stackbuld.com
          </p>
        </div>
      </div>

      <form className={styles.form}>
        <div className={styles.formHeaderWrapper}>
          <h3 className={styles.formHeader}>Hello,</h3>
          <p className={styles.formHeaderText}>
            Reach out to start a new project or to make general enquiries
          </p>
        </div>

        <div className={styles.line}></div>

        <div className={styles.formInputs}>
          {formFields.map((field) => (
            <div className={styles.formInputWrapper}>
              <label htmlFor={field.label} className={styles.formLabel}>
                {field.label}
                {field.isRequired ? "*" : ""}
              </label>
              <input
                type={field.type}
                id={field.label}
                value={field.value}
                onChange={(e) => {
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
          </div>

          <button className={styles.formButton}>Send message</button>
        </div>
      </form>
    </section>
  );
}
