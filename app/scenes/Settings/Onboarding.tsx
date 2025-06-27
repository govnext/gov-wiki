import { observer } from "mobx-react";
import { AcademicCapIcon, DeleteIcon, FolderIcon, PlusIcon } from "outline-icons";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { toast } from "sonner";
import styled from "styled-components";
import { depths, s } from "@shared/styles";
import Button from "~/components/Button";
import Flex from "~/components/Flex";
import Heading from "~/components/Heading";
import Input from "~/components/Input";
import Scene from "~/components/Scene";
import Text from "~/components/Text";
import useStores from "~/hooks/useStores";
import { orgTemplates } from "~/templates/onboarding";

interface CollectionSetup {
    id: string;
    name: string;
    description: string;
    selected: boolean;
    folders: FolderSetup[];
}

interface FolderSetup {
    id: string;
    name: string;
    description: string;
    selected: boolean;
}

const OnboardingScene: React.FC = () => {
    const { collections } = useStores();
    const history = useHistory();
    const { t } = useTranslation();

    const [currentStep, setCurrentStep] = React.useState(0);
    const [collectionsSetup, setCollectionsSetup] = React.useState<CollectionSetup[]>([]);
    const [loading, setLoading] = React.useState(false);

    const steps = [
        "Tipo de Organização",
        "Selecionar Coleções",
        "Selecionar Pastas",
        "Revisar e Criar",
    ];

    const handleOrgTypeSelect = (type: string) => {
        const template = orgTemplates[type as keyof typeof orgTemplates];
        if (template) {
            setCollectionsSetup(
                template.collections.map((col, index) => ({
                    id: `col-${index}`,
                    name: col.name,
                    description: col.description,
                    selected: true,
                    folders: col.folders.map((folder, folderIndex) => ({
                        id: `folder-${index}-${folderIndex}`,
                        name: folder.name,
                        description: folder.description,
                        selected: true,
                    })),
                }))
            );
            setCurrentStep(1);
        }
    };

    const handleFinish = async () => {
        setLoading(true);
        try {
            const selectedCollections = collectionsSetup.filter((col) => col.selected);
            for (const collectionSetup of selectedCollections) {
                if (collectionSetup.name.trim()) {
                    await collections.create({
                        name: collectionSetup.name,
                        description: collectionSetup.description,
                        permission: "read_write" as any,
                    });
                }
            }
            toast.success(t("Onboarding completed"));
            history.push("/");
        } catch (error) {
            toast.error(t("Failed to complete onboarding"));
        } finally {
            setLoading(false);
        }
    };

    const renderStepContent = () => {
        if (currentStep === 0) {
            return (
                <StepContent>
                    <Heading>{t("Welcome to GovWiki!")}</Heading>
                    <Text size="large" type="secondary">
                        {t("Select your organization type to start with a template.")}
                    </Text>
                    <OptionsGrid>
                        {Object.entries(orgTemplates).map(([key, template]) => (
                            <OptionCard key={key} onClick={() => handleOrgTypeSelect(key)}>
                                <OptionTitle>{template.name}</OptionTitle>
                            </OptionCard>
                        ))}
                    </OptionsGrid>
                </StepContent>
            );
        }
        return (
            <StepContent>
                <Heading>{t("Review and Create")}</Heading>
                <Button onClick={handleFinish} disabled={loading}>
                    {t("Create Structure")}
                </Button>
            </StepContent>
        );
    };

    return (
        <Scene title={t("Onboarding")} icon={<AcademicCapIcon />}>
            <Container>{renderStepContent()}</Container>
        </Scene>
    );
};

// Styled components
const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto 0;
  padding: 0;
`;

const StepContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

const OptionCard = styled.button`
  padding: 1.5rem;
  border: 2px solid ${s("divider")};
  border-radius: 8px;
  background: ${s("background")};
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;

  &:hover {
    border-color: ${s("accent")};
    box-shadow: ${depths.card};
  }
`;

const OptionTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${s("text")};
`;

export default observer(OnboardingScene); 