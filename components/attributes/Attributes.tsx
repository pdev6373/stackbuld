import { Attributes as AttributesConstant } from "@/constants";
import { Attribute } from "..";
import styles from "./Attributes.module.css";

export default function Attributes() {
  return (
    <section className={styles.wrapper}>
      {AttributesConstant.map((attribute, index) => (
        <Attribute
          header={attribute.header}
          headerTitle={attribute.headerTitle}
          text1={attribute.text1}
          text2={attribute.text2}
          image={attribute.image}
          shouldReverse={index % 2 === 1 ? true : false}
        />
      ))}
    </section>
  );
}
