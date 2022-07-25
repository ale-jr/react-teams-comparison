import {
  faSpinner,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MessageContainer as BaseMessageContainer } from "./style";

interface MessageContainerProps {
  type: "error" | "loading";
  message: string;
}

const MessageContainer: React.FC<MessageContainerProps> = ({
  type,
  message,
}) => {
  return (
    <BaseMessageContainer>
      {type === "error" && (
        <FontAwesomeIcon icon={faExclamationTriangle} size="5x" />
      )}
      {type === "loading" && (
        <FontAwesomeIcon icon={faSpinner} spin size="5x" />
      )}
      <p>{message}</p>
    </BaseMessageContainer>
  );
};
export default MessageContainer;
