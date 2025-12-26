# Sistema de Onboarding com Templates

## Visão Geral

O sistema de onboarding foi implementado para permitir que organizações configurem rapidamente sua estrutura de documentação usando templates predefinidos. O sistema inclui:

1. **Templates de Estrutura Organizacional**: Templates predefinidos para diferentes tipos de organizações (Municipal, Estadual, Federal)
2. **Templates de Documentos**: Capacidade de associar templates de documentos a pastas específicas
3. **Configuração Automática**: Opção para usar templates automaticamente ao criar novos documentos
4. **Interface de Customização**: UI para selecionar e personalizar quais coleções e pastas criar

## Arquitetura

### Backend

#### Modelos de Dados

1. **OnboardingTemplate**
   - Armazena templates de estrutura organizacional
   - Contém a estrutura hierárquica de coleções e pastas
   - Pode ser global (sistema) ou específico de um time

2. **TemplateDocumentMapping**
   - Mapeia templates de documentos para pastas específicas
   - Permite definir templates padrão para criação automática

3. **TeamOnboardingSetting**
   - Configurações por time
   - Define se templates devem ser usados automaticamente
   - Referencia um template padrão

#### Endpoints da API

- `POST /api/onboarding.listTemplates` - Lista templates disponíveis
- `POST /api/onboarding.createTemplate` - Cria novo template
- `POST /api/onboarding.updateTemplate` - Atualiza template existente
- `POST /api/onboarding.deleteTemplate` - Remove template
- `POST /api/onboarding.setupFromTemplate` - Cria estrutura a partir de template
- `POST /api/onboarding.updateSettings` - Atualiza configurações do time
- `POST /api/onboarding.mapDocumentTemplate` - Associa template de documento a pasta

### Frontend

#### Componente de Onboarding

Localizado em `app/scenes/Settings/Onboarding.tsx`, oferece:

1. **Seleção de Template**: Lista templates disponíveis
2. **Customização**: Permite selecionar quais coleções e pastas criar
3. **Criação em Massa**: Cria toda estrutura selecionada em uma operação

## Uso

### Para Administradores

1. **Configurar Templates Globais**
   ```javascript
   // Templates são criados via migration ou API
   const template = {
     name: "Prefeitura Municipal",
     orgType: "municipal",
     structure: {
       collections: [
         {
           name: "Gabinete do Prefeito",
           folders: [/* estrutura de pastas */]
         }
       ]
     }
   };
   ```

2. **Associar Templates de Documentos**
   ```javascript
   // Mapear template para pasta específica
   await api.post("/api/onboarding.mapDocumentTemplate", {
     onboardingTemplateId: templateId,
     folderPath: "Competências",
     documentTemplateId: docTemplateId,
     useAsDefault: true
   });
   ```

### Para Usuários

1. **Onboarding Inicial**
   - Acesse `/settings/onboarding`
   - Selecione o tipo de organização
   - Customize as coleções e pastas desejadas
   - Clique em "Criar estrutura"

2. **Criação Automática de Documentos**
   - Se configurado, novos documentos usarão templates automaticamente
   - Templates são selecionados baseados na pasta onde o documento é criado

## Estrutura de Dados

### Template de Estrutura
```typescript
interface OnboardingStructure {
  collections: Array<{
    name: string;
    description: string;
    folders: NavigationNode[];
  }>;
}
```

### NavigationNode
```typescript
interface NavigationNode {
  type: 'document';
  title: string;
  children: NavigationNode[];
}
```

## Migrations

### Criar Tabelas
- `20250627122859-add-onboarding-templates.js` - Cria estrutura de tabelas

### Dados Iniciais
- `20250627122900-seed-default-onboarding-templates.js` - Insere templates padrão

## Extensibilidade

### Adicionar Novo Tipo de Organização

1. Adicione o template em `app/templates/onboarding.ts`
2. Crie migration para inserir no banco
3. O template aparecerá automaticamente na UI

### Personalizar Templates por Time

1. Use a API para criar templates específicos do time
2. Configure as preferências do time via `updateSettings`

## Considerações Técnicas

1. **Performance**: Criação em batch para melhor performance
2. **Transações**: Todas operações em transação para consistência
3. **Permissões**: Respeita permissões existentes do sistema
4. **Flexibilidade**: Estrutura permite expansão futura

## Próximos Passos

1. **Templates Dinâmicos**: Permitir criação de templates via UI
2. **Compartilhamento**: Compartilhar templates entre organizações
3. **Versionamento**: Controle de versão para templates
4. **Analytics**: Métricas sobre uso de templates 