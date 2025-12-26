import { observer } from "mobx-react";
import { AcademicCapIcon } from "outline-icons";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { toast } from "sonner";
import styled from "styled-components";
import { depths, s } from "@shared/styles";
import { NavigationNode } from "@shared/types";
import Button from "~/components/Button";
import Flex from "~/components/Flex";
import Heading from "~/components/Heading";
import LoadingIndicator from "~/components/LoadingIndicator";
import Scene from "~/components/Scene";
import Text from "~/components/Text";
import useRequest from "~/hooks/useRequest";
import useStores from "~/hooks/useStores";
import { client } from "~/utils/ApiClient";

interface OnboardingTemplate {
  id: string;
  name: string;
  description: string;
  orgType: string;
  structure: {
    collections: Array<{
      name: string;
      description: string;
      folders: NavigationNode[];
    }>;
  };
  isActive: boolean;
}

interface CollectionSelection {
  name: string;
  selected: boolean;
  folders: Array<{
    path: string;
    selected: boolean;
  }>;
}

const Onboarding: React.FC = () => {
  const history = useHistory();
  const { t } = useTranslation();

  const [currentStep, setCurrentStep] = React.useState(0);
  const [selectedTemplate, setSelectedTemplate] = React.useState<OnboardingTemplate | null>(null);
  const [collectionSelections, setCollectionSelections] = React.useState<CollectionSelection[]>([]);
  const [isSettingUp, setIsSettingUp] = React.useState(false);

  // Fetch available templates
  const {
    data: templates,
    loading: templatesLoading,
    error: templatesError,
  } = useRequest<OnboardingTemplate[]>(
    () =>
      client.post("/onboarding.listTemplates", { isActive: true }).then((res) => res.data),
    []
  );

  const handleTemplateSelect = (template: OnboardingTemplate) => {
    setSelectedTemplate(template);

    // Initialize all collections and folders as selected
    const selections: CollectionSelection[] = template.structure.collections.map((collection) => {
      const folders: Array<{ path: string; selected: boolean }> = [];

      const processFolders = (nodes: NavigationNode[], parentPath = "") => {
        nodes.forEach((node) => {
          const path = parentPath ? `${parentPath}/${node.title}` : node.title;
          folders.push({ path, selected: true });
          if (node.children && node.children.length > 0) {
            processFolders(node.children, path);
          }
        });
      };

      processFolders(collection.folders);

      return {
        name: collection.name,
        selected: true,
        folders,
      };
    });

    setCollectionSelections(selections);
    setCurrentStep(1);
  };

  const toggleCollection = (collectionName: string) => {
    setCollectionSelections((prev) =>
      prev.map((col) =>
        col.name === collectionName ? { ...col, selected: !col.selected } : col
      )
    );
  };

  const toggleFolder = (collectionName: string, folderPath: string) => {
    setCollectionSelections((prev) =>
      prev.map((col) =>
        col.name === collectionName
          ? {
            ...col,
            folders: col.folders.map((folder) =>
              folder.path === folderPath
                ? { ...folder, selected: !folder.selected }
                : folder
            ),
          }
          : col
      )
    );
  };

  const handleSetup = async () => {
    if (!selectedTemplate) return;

    setIsSettingUp(true);
    try {
      const data = await client.post("/onboarding.setupFromTemplate", {
        templateId: selectedTemplate.id,
        collectionSelections,
      });

      if (data) {
        toast.success(
          t("Created {{collections}} collections with {{documents}} documents", {
            collections: data.data.collections.length,
            documents: data.data.documentsCreated,
          })
        );

        // Navigate to the first created collection
        if (data.data.collections.length > 0) {
          history.push(data.data.collections[0].url);
        } else {
          history.push("/home");
        }
      }
    } catch (error) {
      toast.error(t("Failed to complete onboarding"));
    } finally {
      setIsSettingUp(false);
    }
  };

  const renderStepContent = () => {
    if (currentStep === 0) {
      if (templatesLoading) {
        return <LoadingIndicator />;
      }

      if (templatesError || !templates) {
        return (
          <StepContent>
            <Heading>{t("Error loading templates")}</Heading>
            <Text type="secondary">
              {t("Please try again later or contact support.")}
            </Text>
          </StepContent>
        );
      }

      return (
        <StepContent>
          <Heading>{t("Choose your organization type")}</Heading>
          <Text size="large" type="secondary">
            {t("Select a template to quickly set up your workspace structure.")}
          </Text>
          <OptionsGrid>
            {templates.map((template) => (
              <OptionCard key={template.id} onClick={() => handleTemplateSelect(template)}>
                <OptionTitle>{template.name}</OptionTitle>
                <OptionDescription>{template.description}</OptionDescription>
              </OptionCard>
            ))}
            <OptionCard onClick={() => history.push("/home")}>
              <OptionTitle>{t("Start from scratch")}</OptionTitle>
              <OptionDescription>
                {t("Create your own structure manually")}
              </OptionDescription>
            </OptionCard>
          </OptionsGrid>
        </StepContent>
      );
    }

    if (currentStep === 1 && selectedTemplate) {
      return (
        <StepContent>
          <Heading>{t("Customize your structure")}</Heading>
          <Text size="large" type="secondary">
            {t("Select which collections and folders to create.")}
          </Text>

          <SelectionContainer>
            {selectedTemplate.structure.collections.map((collection) => {
              const collectionSelection = collectionSelections.find(
                (sel) => sel.name === collection.name
              );

              if (!collectionSelection) return null;

              return (
                <CollectionSection key={collection.name}>
                  <CollectionHeader>
                    <Checkbox
                      type="checkbox"
                      checked={collectionSelection.selected}
                      onChange={() => toggleCollection(collection.name)}
                    />
                    <CollectionInfo>
                      <CollectionName>{collection.name}</CollectionName>
                      <CollectionDescription>{collection.description}</CollectionDescription>
                    </CollectionInfo>
                  </CollectionHeader>

                  {collectionSelection.selected && (
                    <FoldersContainer>
                      {collectionSelection.folders.map((folder) => (
                        <FolderItem key={folder.path}>
                          <Checkbox
                            type="checkbox"
                            checked={folder.selected}
                            onChange={() => toggleFolder(collection.name, folder.path)}
                          />
                          <FolderPath>{folder.path}</FolderPath>
                        </FolderItem>
                      ))}
                    </FoldersContainer>
                  )}
                </CollectionSection>
              );
            })}
          </SelectionContainer>

          <ButtonContainer>
            <Button onClick={() => setCurrentStep(0)} neutral>
              {t("Back")}
            </Button>
            <Button onClick={handleSetup} disabled={isSettingUp}>
              {isSettingUp ? t("Setting up...") : t("Create structure")}
            </Button>
          </ButtonContainer>
        </StepContent>
      );
    }

    return null;
  };

  return (
    <Scene title={t("Onboarding")} icon={<AcademicCapIcon />}>
      <Container>{renderStepContent()}</Container>
    </Scene>
  );
};

// Styled components
const Container = styled.div`
  max-width: 900px;
  margin: 2rem auto 0;
  padding: 0 1rem;
`;

const StepContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

const OptionTitle = styled.div`
  font-weight: 600;
  font-size: 18px;
  color: ${s("text")};
  margin-bottom: 0.5rem;
`;

const OptionDescription = styled.div`
  font-size: 14px;
  color: ${s("textSecondary")};
  line-height: 1.4;
`;

const SelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0;
  max-height: 500px;
  overflow-y: auto;
`;

const CollectionSection = styled.div`
  border: 1px solid ${s("divider")};
  border-radius: 8px;
  padding: 1rem;
`;

const CollectionHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const CollectionInfo = styled.div`
  flex: 1;
`;

const CollectionName = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${s("text")};
`;

const CollectionDescription = styled.div`
  font-size: 14px;
  color: ${s("textSecondary")};
  margin-top: 0.25rem;
`;

const FoldersContainer = styled.div`
  margin-top: 1rem;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FolderItem = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0.25rem 0;

  &:hover {
    background: ${s("listItemHoverBackground")};
  }
`;

const FolderPath = styled.span`
  font-size: 14px;
  color: ${s("text")};
`;

const Checkbox = styled.input`
  cursor: pointer;
`;

const ButtonContainer = styled(Flex)`
  margin-top: 2rem;
  justify-content: space-between;
`;

export default observer(Onboarding);
