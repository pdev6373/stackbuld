import { AttributeType } from "@/types";
import Image from "next/image";

export default function Attribute({
  headerTitle,
  header,
  text1,
  text2,
}: AttributeType) {
  return (
    <div>
      <Image alt="attribute image" src={"./"} width={20} height={20} />

      <div>
        <h3>{`${headerTitle} ${header}`}</h3>
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
    </div>
  );
}
