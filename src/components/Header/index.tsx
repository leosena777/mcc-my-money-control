import logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransctionModal: () => void;
}

export function Header({ onOpenNewTransctionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="MCC logo" />
        <button type="button" onClick={onOpenNewTransctionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
