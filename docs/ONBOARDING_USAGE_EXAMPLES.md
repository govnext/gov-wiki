# Exemplos de Uso - Sistema de Onboarding

## 1. Listar Templates Disponíveis

```javascript
// GET templates ativos
const response = await fetch('/api/onboarding.listTemplates', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    isActive: true
  })
});

const { data: templates } = await response.json();
console.log(templates);
// [
//   {
//     id: "template-id-1",
//     name: "Prefeitura Municipal",
//     description: "Template completo para organizações municipais",
//     orgType: "municipal",
//     structure: { collections: [...] },
//     isActive: true
//   }
// ]
```

## 2. Setup Inicial a Partir de Template

```javascript
// Configurar estrutura a partir de template
const setupResponse = await fetch('/api/onboarding.setupFromTemplate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    templateId: "template-id-1",
    collectionSelections: [
      {
        name: "Gabinete do Prefeito",
        selected: true,
        folders: [
          { path: "00 Institucional", selected: true },
          { path: "00 Institucional/Competências", selected: true },
          { path: "01 Gestão", selected: true },
          { path: "01 Gestão/Controles", selected: false },
          { path: "06 Gabinete Executivo", selected: true }
        ]
      }
    ]
  })
});

const { data: result } = await setupResponse.json();
console.log(result);
// {
//   collections: [
//     { id: "col-1", name: "Gabinete do Prefeito", url: "/collection/..." }
//   ],
//   documentsCreated: 15
// }
```

## 3. Configurar Templates Automáticos

```javascript
// Configurar time para usar templates automaticamente
const settingsResponse = await fetch('/api/onboarding.updateSettings', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    defaultTemplateId: "template-id-1",
    useTemplatesOnCreate: true,
    autoCreateStructure: false
  })
});

const { data: settings } = await settingsResponse.json();
console.log(settings);
// {
//   id: "settings-id",
//   teamId: "team-id",
//   defaultTemplateId: "template-id-1",
//   useTemplatesOnCreate: true,
//   autoCreateStructure: false
// }
```

## 4. Associar Template de Documento a Pasta

```javascript
// Mapear template de documento para pasta específica
const mappingResponse = await fetch('/api/onboarding.mapDocumentTemplate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    onboardingTemplateId: "template-id-1",
    folderPath: "Competências",
    documentTemplateId: "doc-template-id-1",
    useAsDefault: true
  })
});

const { data: mapping } = await mappingResponse.json();
console.log(mapping);
// {
//   id: "mapping-id",
//   folderPath: "Competências",
//   documentTemplateId: "doc-template-id-1",
//   useAsDefault: true
// }
```

## 5. Criar Template Personalizado

```javascript
// Criar novo template personalizado
const createResponse = await fetch('/api/onboarding.createTemplate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    name: "Minha Organização",
    description: "Template personalizado para minha organização",
    orgType: "custom",
    structure: {
      collections: [
        {
          name: "Administração",
          description: "Setor administrativo",
          folders: [
            {
              type: "document",
              title: "Processos",
              children: [
                { type: "document", title: "RH", children: [] },
                { type: "document", title: "Financeiro", children: [] }
              ]
            }
          ]
        }
      ]
    }
  })
});

const { data: newTemplate } = await createResponse.json();
console.log(newTemplate);
```

## 6. Exemplo no Frontend (React)

```tsx
import React, { useState, useEffect } from 'react';
import { useApi } from './hooks/useApi';

const OnboardingComponent: React.FC = () => {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [collections, setCollections] = useState([]);
  const api = useApi();

  useEffect(() => {
    // Carregar templates disponíveis
    const loadTemplates = async () => {
      const response = await api.post('/onboarding.listTemplates', {
        isActive: true
      });
      setTemplates(response.data);
    };
    
    loadTemplates();
  }, []);

  const handleSetup = async () => {
    if (!selectedTemplate) return;
    
    // Preparar seleções (exemplo: todas selecionadas)
    const collectionSelections = selectedTemplate.structure.collections.map(collection => ({
      name: collection.name,
      selected: true,
      folders: flattenFolders(collection.folders).map(path => ({
        path,
        selected: true
      }))
    }));
    
    // Executar setup
    const response = await api.post('/onboarding.setupFromTemplate', {
      templateId: selectedTemplate.id,
      collectionSelections
    });
    
    setCollections(response.data.collections);
    alert(`Criadas ${response.data.collections.length} coleções com ${response.data.documentsCreated} documentos!`);
  };

  const flattenFolders = (folders, parentPath = '') => {
    let paths = [];
    folders.forEach(folder => {
      const path = parentPath ? `${parentPath}/${folder.title}` : folder.title;
      paths.push(path);
      if (folder.children && folder.children.length > 0) {
        paths.push(...flattenFolders(folder.children, path));
      }
    });
    return paths;
  };

  return (
    <div>
      <h2>Configuração Inicial</h2>
      
      <div>
        <h3>Selecione um Template:</h3>
        {templates.map(template => (
          <button
            key={template.id}
            onClick={() => setSelectedTemplate(template)}
            className={selectedTemplate?.id === template.id ? 'selected' : ''}
          >
            {template.name}
          </button>
        ))}
      </div>
      
      {selectedTemplate && (
        <div>
          <h3>Template Selecionado: {selectedTemplate.name}</h3>
          <p>{selectedTemplate.description}</p>
          
          <div>
            <h4>Coleções:</h4>
            {selectedTemplate.structure.collections.map(collection => (
              <div key={collection.name}>
                <strong>{collection.name}</strong>
                <p>{collection.description}</p>
                <ul>
                  {collection.folders.map(folder => (
                    <li key={folder.title}>{folder.title}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <button onClick={handleSetup}>
            Criar Estrutura
          </button>
        </div>
      )}
      
      {collections.length > 0 && (
        <div>
          <h3>Coleções Criadas:</h3>
          {collections.map(collection => (
            <div key={collection.id}>
              <a href={collection.url}>{collection.name}</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OnboardingComponent;
```

## 7. Fluxo Completo de Uso

### Para Novo Time/Organização:

1. **Acesso inicial**: Usuário acessa `/settings/onboarding`
2. **Seleção**: Escolhe tipo de organização (Municipal, Estadual, Federal)
3. **Customização**: Seleciona quais coleções e pastas criar
4. **Criação**: Sistema cria toda estrutura selecionada
5. **Redirecionamento**: Usuário é levado para primeira coleção criada

### Para Configuração Avançada:

1. **Criação de Templates**: Admin cria templates personalizados
2. **Mapeamento**: Associa templates de documentos a pastas
3. **Configuração de Time**: Define template padrão e uso automático
4. **Uso Contínuo**: Novos documentos usam templates automaticamente

### Para Extensão do Sistema:

1. **Novos Tipos**: Adiciona novos orgTypes via migration
2. **Templates Dinâmicos**: Permite criação via UI (futuro)
3. **Compartilhamento**: Templates entre organizações (futuro)

## 8. Considerações de Performance

- **Batch Creation**: Todos documentos criados em uma transação
- **Lazy Loading**: Templates carregados apenas quando necessário
- **Caching**: Configurações de time em cache
- **Background Processing**: Para estruturas muito grandes (futuro) 