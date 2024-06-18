import Form from "@/components/Form/Form";
import styles from "./styles.module.css";
import copy from "@/copy/copy";
import Heading from "@/components/Typography/Heading";
import BodyText from "@/components/Typography/BodyText";

const CreateATicket = () => {
  const formContent = copy.createATicket
  return (
    <div className={styles.page}>
      <div className={styles.mainContainer}>
        <Heading>{formContent.header}</Heading> 
        <BodyText>{formContent.description}</BodyText>
        <Form 
        formObj={formContent.form}
        buttonText={formContent.buttonText}></Form>
      </div>
    </div>
  );
}

export default CreateATicket;
