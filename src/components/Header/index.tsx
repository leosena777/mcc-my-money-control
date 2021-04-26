import { Container, Content, Logo } from "./styles";

interface HeaderProps {
  onOpenNewTransctionModal: () => void;
}

export function Header({ onOpenNewTransctionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <Logo>
          <span>MCC</span> - My Control Money
        </Logo>
        <button type="button" onClick={onOpenNewTransctionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
