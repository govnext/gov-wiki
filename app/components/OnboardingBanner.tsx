import { CloseIcon } from "outline-icons";
import * as React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { s } from "@shared/styles";
import Button from "~/components/Button";
import Flex from "~/components/Flex";
import Text from "~/components/Text";
import useOnboardingCheck from "~/hooks/useOnboardingCheck";

const OnboardingBanner = () => {
  const history = useHistory();
  const { needsOnboarding, skipOnboarding } = useOnboardingCheck();

  if (!needsOnboarding) {
    return null;
  }

  const handleStartOnboarding = () => {
    history.push("/settings/onboarding");
  };

  const handleSkip = () => {
    skipOnboarding();
  };

  return (
    <Banner>
      <Content>
        <Flex align="center" gap={16}>
          <div>
            <Text size="large" weight="medium">
              🎉 Bem-vindo ao GovWiki!
            </Text>
            <Text color="secondary">
              Configure sua organização em poucos minutos com nosso assistente
              de configuração.
            </Text>
          </div>
          <ButtonGroup>
            <Button onClick={handleStartOnboarding} primary>
              Começar Configuração
            </Button>
            <Button onClick={handleSkip} neutral>
              Pular
            </Button>
          </ButtonGroup>
        </Flex>
        <CloseButton onClick={handleSkip}>
          <CloseIcon size={20} />
        </CloseButton>
      </Content>
    </Banner>
  );
};

const Banner = styled.div`
  background: linear-gradient(
    90deg,
    ${s("accent")} 0%,
    ${s("accentDark")} 100%
  );
  color: ${s("accentText")};
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const ButtonGroup = styled(Flex)`
  gap: 0.5rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${s("accentText")};
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

export default OnboardingBanner;
