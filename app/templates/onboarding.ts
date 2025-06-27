export interface FolderTemplate {
    name: string;
    description: string;
    subfolders?: FolderTemplate[];
  }
  
  export interface CollectionTemplate {
    name: string;
    description: string;
    folders: FolderTemplate[];
  }
  
  // Templates Base - Estrutura padrão para todos os órgãos
  const baseStructure: FolderTemplate[] = [
    {
      name: "00 Institucional",
      description: "Informações fundamentais sobre o órgão",
      subfolders: [
        {
          name: "Competências",
          description: "Atribuições legais e responsabilidades",
          subfolders: [
            { name: "Atribuições Legais", description: "Marco legal de atuação" },
            { name: "Competências Específicas", description: "Detalhamento das competências" },
            { name: "Missão Visão e Valores", description: "Diretrizes institucionais" },
            { name: "Marco Regulatório", description: "Normas regulamentadoras" }
          ]
        },
        {
          name: "Contatos",
          description: "Informações de contato e comunicação",
          subfolders: [
            { name: "Diretoria Executiva", description: "Contatos da alta gestão" },
            { name: "Coordenações", description: "Contatos das coordenações" },
            { name: "Setores Técnicos", description: "Contatos dos setores especializados" },
            { name: "Canais de Atendimento", description: "Formas de contato com o cidadão" }
          ]
        },
        {
          name: "Estrutura Organizacional",
          description: "Organização interna do órgão",
          subfolders: [
            { name: "Organograma", description: "Estrutura hierárquica visual" },
            { name: "Hierarquia Funcional", description: "Níveis de comando e subordinação" },
            { name: "Matriz de Responsabilidades", description: "Distribuição de responsabilidades" },
            { name: "Fluxo Decisório", description: "Processo de tomada de decisões" }
          ]
        },
        {
          name: "Legislação",
          description: "Base legal e normativa",
          subfolders: [
            { name: "Lei de Criação", description: "Lei que criou o órgão" },
            { name: "Decretos Regulamentadores", description: "Decretos de regulamentação" },
            { name: "Portarias Organizacionais", description: "Portarias de organização interna" },
            { name: "Normas Internas", description: "Regulamentos internos" }
          ]
        }
      ]
    },
    {
      name: "01 Gestão",
      description: "Processos de gestão e controle",
      subfolders: [
        {
          name: "Controles",
          description: "Mecanismos de controle interno",
          subfolders: [
            { name: "Controle Interno", description: "Sistemas de controle interno" },
            { name: "Auditorias", description: "Processos de auditoria" },
            { name: "Monitoramento de Performance", description: "Acompanhamento de desempenho" },
            { name: "Indicadores de Gestão", description: "Métricas de gestão" }
          ]
        },
        {
          name: "Planejamento",
          description: "Planejamento estratégico e operacional",
          subfolders: [
            { name: "Plano Estratégico", description: "Planejamento de longo prazo" },
            { name: "Plano Operacional", description: "Planejamento de curto prazo" },
            { name: "Cronograma de Atividades", description: "Programação temporal" },
            { name: "Metas e Objetivos", description: "Definição de metas" }
          ]
        },
        {
          name: "Procedimentos",
          description: "Padronização de procedimentos",
          subfolders: [
            { name: "Manual de Procedimentos", description: "Guia de procedimentos padrão" },
            { name: "Fluxos de Processos", description: "Mapeamento de fluxos" },
            { name: "Rotinas Administrativas", description: "Atividades administrativas recorrentes" },
            { name: "Checklist Operacional", description: "Listas de verificação" }
          ]
        },
        {
          name: "Processos",
          description: "Gestão de processos organizacionais",
          subfolders: [
            { name: "Mapeamento de Processos", description: "Identificação e descrição dos processos" },
            { name: "Padronização", description: "Estabelecimento de padrões" },
            { name: "Melhorias Contínuas", description: "Aperfeiçoamento dos processos" },
            { name: "Automação", description: "Digitalização e automação" }
          ]
        }
      ]
    },
    {
      name: "02 Documentos",
      description: "Arquivo e gestão documental",
      subfolders: [
        {
          name: "Administrativos",
          description: "Documentos administrativos",
          subfolders: [
            { name: "Atas de Reuniões", description: "Registros de reuniões" },
            { name: "Memorandos", description: "Comunicações internas" },
            { name: "Ofícios", description: "Comunicações oficiais externas" },
            { name: "Correspondências", description: "Outras correspondências" }
          ]
        },
        {
          name: "Histórico",
          description: "Documentos históricos e memória institucional",
          subfolders: [
            { name: "Evolução Institucional", description: "História do órgão" },
            { name: "Marcos Históricos", description: "Eventos importantes" },
            { name: "Gestões Anteriores", description: "Documentos de gestões passadas" },
            { name: "Arquivo Permanente", description: "Documentos de valor histórico" }
          ]
        },
        {
          name: "Normativos",
          description: "Documentos normativos internos",
          subfolders: [
            { name: "Regimentos Internos", description: "Regras de funcionamento interno" },
            { name: "Resoluções", description: "Decisões normativas" },
            { name: "Instruções Normativas", description: "Orientações técnicas" },
            { name: "Manuais Normativos", description: "Guias de normas e procedimentos" }
          ]
        },
        {
          name: "Técnicos",
          description: "Documentos técnicos especializados",
          subfolders: [
            { name: "Estudos e Análises", description: "Pesquisas e estudos técnicos" },
            { name: "Relatórios Técnicos", description: "Relatórios especializados" },
            { name: "Pareceres Especializados", description: "Análises técnicas" },
            { name: "Diagnósticos", description: "Avaliações e diagnósticos" }
          ]
        }
      ]
    },
    {
      name: "03 Serviços",
      description: "Serviços prestados ao cidadão",
      subfolders: [
        {
          name: "Catálogos",
          description: "Catálogos de serviços disponíveis",
          subfolders: [
            { name: "Carta de Serviços", description: "Relação oficial de serviços" },
            { name: "Serviços Digitais", description: "Serviços online" },
            { name: "Serviços Presenciais", description: "Atendimento presencial" },
            { name: "Canais de Atendimento", description: "Formas de acesso aos serviços" }
          ]
        },
        {
          name: "Formulários",
          description: "Formulários e documentos para solicitações",
          subfolders: [
            { name: "Requerimentos", description: "Formulários de solicitação" },
            { name: "Solicitações", description: "Pedidos diversos" },
            { name: "Cadastros", description: "Formulários de cadastramento" },
            { name: "Consultas", description: "Formulários de consulta" }
          ]
        },
        {
          name: "Manuais",
          description: "Manuais de uso e orientação",
          subfolders: [
            { name: "Manual do Usuário", description: "Guia para o cidadão" },
            { name: "Passo a Passo", description: "Instruções detalhadas" },
            { name: "FAQ", description: "Perguntas frequentes" },
            { name: "Troubleshooting", description: "Solução de problemas comuns" }
          ]
        },
        {
          name: "Protocolos",
          description: "Protocolos de atendimento e qualidade",
          subfolders: [
            { name: "Atendimento ao Cidadão", description: "Padrões de atendimento" },
            { name: "Tramitação de Processos", description: "Fluxo processual" },
            { name: "Prazos e Respostas", description: "Compromissos de prazo" },
            { name: "Qualidade dos Serviços", description: "Padrões de qualidade" }
          ]
        }
      ]
    },
    {
      name: "04 Dados e Informações",
      description: "Gestão de dados e informações estratégicas",
      subfolders: [
        {
          name: "Estatísticas",
          description: "Dados estatísticos e demográficos",
          subfolders: [
            { name: "Dados Demográficos", description: "Informações populacionais" },
            { name: "Indicadores Sociais", description: "Índices sociais" },
            { name: "Séries Históricas", description: "Dados temporais" },
            { name: "Censos e Pesquisas", description: "Resultados de pesquisas" }
          ]
        },
        {
          name: "Indicadores",
          description: "Indicadores de desempenho e gestão",
          subfolders: [
            { name: "KPIs Estratégicos", description: "Indicadores-chave de performance" },
            { name: "Metas e Resultados", description: "Acompanhamento de metas" },
            { name: "Benchmarking", description: "Comparações e referências" },
            { name: "Painéis de Controle", description: "Dashboards gerenciais" }
          ]
        },
        {
          name: "Painéis",
          description: "Painéis de monitoramento em tempo real",
          subfolders: [
            { name: "Dashboard Executivo", description: "Visão executiva consolidada" },
            { name: "Monitoramento Tempo Real", description: "Acompanhamento em tempo real" },
            { name: "Alertas e Indicadores", description: "Sistema de alertas" },
            { name: "Relatórios Automáticos", description: "Geração automática de relatórios" }
          ]
        },
        {
          name: "Relatórios",
          description: "Relatórios gerenciais e operacionais",
          subfolders: [
            { name: "Relatórios Gerenciais", description: "Informações para gestão" },
            { name: "Relatórios Operacionais", description: "Dados operacionais" },
            { name: "Relatórios Financeiros", description: "Informações financeiras" },
            { name: "Relatórios Especiais", description: "Relatórios temáticos" }
          ]
        }
      ]
    },
    {
      name: "05 Transparência",
      description: "Transparência e accountability",
      subfolders: [
        {
          name: "Contratos",
          description: "Gestão de contratos e fornecedores",
          subfolders: [
            { name: "Contratos Vigentes", description: "Contratos em execução" },
            { name: "Aditivos", description: "Termos aditivos" },
            { name: "Rescisões", description: "Contratos rescindidos" },
            { name: "Fornecedores", description: "Base de fornecedores" }
          ]
        },
        {
          name: "Convênios",
          description: "Parcerias e cooperações",
          subfolders: [
            { name: "Convênios Ativos", description: "Parcerias em andamento" },
            { name: "Parcerias", description: "Acordos de cooperação" },
            { name: "Prestação de Contas", description: "Relatórios de prestação de contas" },
            { name: "Monitoramento", description: "Acompanhamento da execução" }
          ]
        },
        {
          name: "Orçamento",
          description: "Informações orçamentárias e financeiras",
          subfolders: [
            { name: "Lei Orçamentária", description: "Lei do orçamento anual" },
            { name: "Execução Orçamentária", description: "Acompanhamento da execução" },
            { name: "Receitas e Despesas", description: "Demonstrativo financeiro" },
            { name: "Balancetes", description: "Balancetes mensais" }
          ]
        },
        {
          name: "Prestação de Contas",
          description: "Accountability e controle social",
          subfolders: [
            { name: "Contas Anuais", description: "Prestação de contas anual" },
            { name: "Relatórios de Gestão", description: "Relatórios de desempenho" },
            { name: "Auditorias Externas", description: "Relatórios de auditoria" },
            { name: "Controle Social", description: "Participação da sociedade" }
          ]
        }
      ]
    }
  ];
  
  // TEMPLATES MUNICIPAIS
  const municipalSecretariats: CollectionTemplate[] = [
    {
      name: "Gabinete do Prefeito",
      description: "Coordenação geral das políticas do município e assessoria direta ao Prefeito.",
      folders: [
        ...baseStructure,
        {
          name: "06 Gabinete Executivo",
          description: "Atividades específicas do Gabinete do Prefeito",
          subfolders: [
            {
              name: "Agenda do Prefeito",
              description: "Gestão da agenda e compromissos oficiais",
              subfolders: [
                { name: "Compromissos Oficiais", description: "Eventos e reuniões institucionais" },
                { name: "Audiências", description: "Atendimentos ao público" },
                { name: "Eventos Institucionais", description: "Solenidades e eventos públicos" },
                { name: "Viagens Oficiais", description: "Deslocamentos em serviço" }
              ]
            },
            {
              name: "Cerimonial e Protocolo",
              description: "Organização de eventos e protocolo oficial",
              subfolders: [
                { name: "Protocolo Oficial", description: "Normas de protocolo e etiqueta" },
                { name: "Eventos Públicos", description: "Organização de eventos" },
                { name: "Recepções", description: "Eventos de recepção" },
                { name: "Homenagens", description: "Cerimônias de reconhecimento" }
              ]
            },
            {
              name: "Discursos e Pronunciamentos",
              description: "Elaboração e arquivo de discursos oficiais",
              subfolders: [
                { name: "Pronunciamentos", description: "Declarações públicas" },
                { name: "Discursos Oficiais", description: "Discursos em eventos" },
                { name: "Entrevistas", description: "Entrevistas à mídia" },
                { name: "Releases", description: "Comunicados à imprensa" }
              ]
            },
            {
              name: "Atos Oficiais",
              description: "Elaboração e controle de atos administrativos",
              subfolders: [
                { name: "Decretos", description: "Decretos municipais" },
                { name: "Portarias", description: "Portarias do Gabinete" },
                { name: "Nomeações", description: "Atos de nomeação" },
                { name: "Exonerações", description: "Atos de exoneração" }
              ]
            },
            {
              name: "Coordenação Política",
              description: "Articulação política e institucional",
              subfolders: [
                { name: "Articulação Legislativa", description: "Relacionamento com a Câmara" },
                { name: "Relações Governamentais", description: "Articulação intergovernamental" },
                { name: "Lideranças Comunitárias", description: "Diálogo com lideranças" },
                { name: "Movimentos Sociais", description: "Relacionamento com organizações" }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Procuradoria-Geral do Município",
      description: "Representação judicial e consultoria jurídica do poder executivo municipal.",
      folders: [
        ...baseStructure,
        {
          name: "06 Jurídico",
          description: "Atividades jurídicas especializadas",
          subfolders: [
            {
              name: "Consultivo",
              description: "Assessoria jurídica preventiva",
              subfolders: [
                { name: "Pareceres Jurídicos", description: "Análises jurídicas preventivas" },
                { name: "Análise de Legalidade", description: "Verificação de conformidade legal" },
                { name: "Orientações Jurídicas", description: "Direcionamentos legais" },
                { name: "Consultas Internas", description: "Esclarecimentos jurídicos internos" }
              ]
            },
            {
              name: "Contencioso",
              description: "Representação judicial do município",
              subfolders: [
                { name: "Ações Judiciais", description: "Processos em tramitação" },
                { name: "Defesa Municipal", description: "Defesa dos interesses municipais" },
                { name: "Recursos", description: "Recursos judiciais" },
                { name: "Execuções", description: "Processos de execução" }
              ]
            },
            {
              name: "Contratos e Convênios",
              description: "Análise jurídica de instrumentos contratuais",
              subfolders: [
                { name: "Análise de Minutas", description: "Revisão de contratos e convênios" },
                { name: "Pareceres Contratuais", description: "Análises de instrumentos contratuais" },
                { name: "Acompanhamento de Execução", description: "Supervisão da execução contratual" },
                { name: "Irregularidades", description: "Apuração de irregularidades contratuais" }
              ]
            },
            {
              name: "Processos Judiciais e Administrativos",
              description: "Gestão processual administrativa e judicial",
              subfolders: [
                { name: "Processos Administrativos", description: "Procedimentos administrativos" },
                { name: "Sindicâncias", description: "Apurações administrativas" },
                { name: "Recursos Administrativos", description: "Recursos em processos administrativos" },
                { name: "Prazos Processuais", description: "Controle de prazos" }
              ]
            },
            {
              name: "Legislação Municipal",
              description: "Elaboração e sistematização normativa",
              subfolders: [
                { name: "Projetos de Lei", description: "Elaboração de proposições legislativas" },
                { name: "Decretos Regulamentadores", description: "Regulamentação de leis" },
                { name: "Consolidação Normativa", description: "Organização da legislação" },
                { name: "Publicações Oficiais", description: "Divulgação de normas" }
              ]
            },
            {
              name: "Dívida Ativa",
              description: "Recuperação de créditos municipais",
              subfolders: [
                { name: "Inscrição em Dívida Ativa", description: "Procedimentos de inscrição" },
                { name: "Execução Fiscal", description: "Cobrança judicial" },
                { name: "Parcelamentos", description: "Negociação de débitos" },
                { name: "Recuperação de Créditos", description: "Estratégias de cobrança" }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Secretaria Municipal de Governo",
      description: "Articulação política e relacionamento com o poder legislativo e a sociedade civil.",
      folders: [
        ...baseStructure,
        {
          name: "06 Governo e Articulação",
          description: "Atividades de governo e articulação política",
          subfolders: [
            {
              name: "Relações Institucionais",
              description: "Articulação com outros poderes e esferas",
              subfolders: [
                { name: "Poder Legislativo", description: "Relacionamento com a Câmara Municipal" },
                { name: "Governo Estadual", description: "Articulação com o Estado" },
                { name: "Governo Federal", description: "Relacionamento federal" },
                { name: "Municípios Vizinhos", description: "Cooperação intermunicipal" }
              ]
            },
            {
              name: "Projetos de Lei",
              description: "Acompanhamento legislativo",
              subfolders: [
                { name: "Elaboração de Propostas", description: "Preparação de projetos" },
                { name: "Tramitação Legislativa", description: "Acompanhamento na Câmara" },
                { name: "Análise de Impacto", description: "Avaliação de proposições" },
                { name: "Negociação Política", description: "Articulação para aprovação" }
              ]
            },
            {
              name: "Comunicação Social",
              description: "Estratégia de comunicação governamental",
              subfolders: [
                { name: "Assessoria de Imprensa", description: "Relacionamento com mídia" },
                { name: "Redes Sociais", description: "Comunicação digital" },
                { name: "Campanhas Institucionais", description: "Divulgação de políticas públicas" },
                { name: "Eventos de Comunicação", description: "Ações de divulgação" }
              ]
            },
            {
              name: "Participação Popular",
              description: "Canais de participação cidadã",
              subfolders: [
                { name: "Audiências Públicas", description: "Encontros com a população" },
                { name: "Consultas Populares", description: "Consultas à sociedade" },
                { name: "Ouvidoria", description: "Canal de comunicação direta" },
                { name: "Conselhos Municipais", description: "Apoio aos conselhos" }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Secretaria Municipal de Finanças, Planejamento, Gestão, Orçamento e Obras",
      description: "Gestão das finanças municipais, planejamento, orçamento e coordenação de obras públicas.",
      folders: [
        ...baseStructure,
        {
          name: "06 Financeiro e Planejamento",
          description: "Gestão financeira e planejamento municipal",
          subfolders: [
            {
              name: "Orçamento e Planejamento Financeiro",
              description: "Elaboração e gestão orçamentária",
              subfolders: [
                { name: "Elaboração Orçamentária", description: "Preparação do orçamento anual" },
                { name: "Programação Financeira", description: "Planejamento de fluxo de caixa" },
                { name: "Créditos Adicionais", description: "Suplementações orçamentárias" },
                { name: "Contingenciamento", description: "Controle de gastos" }
              ]
            },
            {
              name: "Contabilidade",
              description: "Gestão contábil municipal",
              subfolders: [
                { name: "Escrituração Contábil", description: "Registro contábil das operações" },
                { name: "Balancetes", description: "Demonstrativos mensais" },
                { name: "Demonstrativos Contábeis", description: "Relatórios contábeis" },
                { name: "Conciliação Bancária", description: "Controle de contas bancárias" }
              ]
            },
            {
              name: "Relatórios de Execução Orçamentária",
              description: "Acompanhamento da execução financeira",
              subfolders: [
                { name: "Receitas Arrecadadas", description: "Controle de receitas" },
                { name: "Despesas Executadas", description: "Acompanhamento de gastos" },
                { name: "Resultados Fiscais", description: "Indicadores de desempenho fiscal" },
                { name: "Limites Legais", description: "Monitoramento de limites constitucionais" }
              ]
            },
            {
              name: "Tributos e Arrecadação",
              description: "Gestão tributária municipal",
              subfolders: [
                { name: "IPTU", description: "Imposto Predial e Territorial Urbano" },
                { name: "ISS", description: "Imposto sobre Serviços" },
                { name: "ITBI", description: "Imposto de Transmissão de Bens Imóveis" },
                { name: "Taxas Municipais", description: "Demais tributos municipais" }
              ]
            },
            {
              name: "Tesouraria",
              description: "Gestão de caixa e pagamentos",
              subfolders: [
                { name: "Gestão de Caixa", description: "Controle de fluxo financeiro" },
                { name: "Pagamentos", description: "Execução de pagamentos" },
                { name: "Recebimentos", description: "Controle de recebimentos" },
                { name: "Controle Bancário", description: "Gestão de contas bancárias" }
              ]
            },
            {
              name: "Obras Públicas",
              description: "Planejamento e execução de obras",
              subfolders: [
                { name: "Projetos de Engenharia", description: "Elaboração de projetos" },
                { name: "Licitações de Obras", description: "Processos licitatórios" },
                { name: "Fiscalização de Obras", description: "Acompanhamento técnico" },
                { name: "Controle de Qualidade", description: "Verificação de padrões" }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Secretaria Municipal da Educação",
      description: "Gestão do sistema de ensino municipal, desenvolvimento educacional e formação cidadã.",
      folders: [
        ...baseStructure,
        {
          name: "06 Pedagógico e Educacional",
          description: "Atividades educacionais e pedagógicas",
          subfolders: [
            {
              name: "Diretrizes Curriculares",
              description: "Orientações pedagógicas e curriculares",
              subfolders: [
                { name: "Currículo Municipal", description: "Base curricular local" },
                { name: "Metodologias de Ensino", description: "Estratégias pedagógicas" },
                { name: "Avaliação da Aprendizagem", description: "Sistemas de avaliação" },
                { name: "Formação Continuada", description: "Capacitação de professores" }
              ]
            },
            {
              name: "Ensino Fundamental",
              description: "Gestão do ensino fundamental municipal",
              subfolders: [
                { name: "Anos Iniciais", description: "1º ao 5º ano" },
                { name: "Anos Finais", description: "6º ao 9º ano" },
                { name: "Educação de Jovens e Adultos", description: "EJA" },
                { name: "Educação Especial", description: "Atendimento especializado" }
              ]
            },
            {
              name: "Administração das Unidades Escolares",
              description: "Gestão das escolas municipais",
              subfolders: [
                { name: "Infraestrutura Escolar", description: "Prédios e equipamentos" },
                { name: "Recursos Materiais", description: "Material didático e pedagógico" },
                { name: "Manutenção de Prédios", description: "Conservação das unidades" },
                { name: "Segurança Escolar", description: "Proteção do ambiente escolar" }
              ]
            },
            {
              name: "Programas e Projetos Educacionais",
              description: "Iniciativas educacionais especiais",
              subfolders: [
                { name: "Programas Federais", description: "PNAE, PNATE, PDDE, etc." },
                { name: "Programas Estaduais", description: "Parcerias com o Estado" },
                { name: "Projetos Especiais", description: "Iniciativas locais" },
                { name: "Educação Inclusiva", description: "Atendimento à diversidade" }
              ]
            },
            {
              name: "Recursos Humanos da Educação",
              description: "Gestão de pessoal educacional",
              subfolders: [
                { name: "Corpo Docente", description: "Professores e especialistas" },
                { name: "Equipe de Apoio", description: "Funcionários administrativos" },
                { name: "Capacitação Profissional", description: "Desenvolvimento de competências" },
                { name: "Plano de Carreira", description: "Progressão funcional" }
              ]
            },
            {
              name: "Alimentação Escolar",
              description: "Programa de merenda escolar",
              subfolders: [
                { name: "Merenda Escolar", description: "Cardápios e distribuição" },
                { name: "Nutrição Escolar", description: "Orientação nutricional" },
                { name: "Controle de Qualidade", description: "Qualidade dos alimentos" },
                { name: "Agricultura Familiar", description: "Compras da agricultura local" }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Secretaria Municipal de Saúde",
      description: "Gestão do sistema de saúde municipal, promoção, prevenção e assistência à saúde.",
      folders: [
        ...baseStructure,
        {
          name: "06 Assistencial e Saúde Pública",
          description: "Atividades de saúde e assistência médica",
          subfolders: [
            {
              name: "Atenção Básica",
              description: "Atenção primária à saúde",
              subfolders: [
                { name: "Unidades Básicas de Saúde", description: "UBS e ESF" },
                { name: "Estratégia Saúde da Família", description: "Equipes de saúde da família" },
                { name: "Agentes Comunitários", description: "ACS e ACE" },
                { name: "Promoção da Saúde", description: "Ações preventivas e educativas" }
              ]
            },
            {
              name: "Programas de Saúde Pública",
              description: "Programas específicos de saúde",
              subfolders: [
                { name: "Saúde da Mulher", description: "Atenção à saúde feminina" },
                { name: "Saúde da Criança", description: "Pediatria e puericultura" },
                { name: "Saúde do Idoso", description: "Atenção ao envelhecimento" },
                { name: "Saúde Mental", description: "CAPS e atenção psicossocial" }
              ]
            },
            {
              name: "Administração de Unidades de Saúde",
              description: "Gestão das unidades de saúde",
              subfolders: [
                { name: "Hospitais Municipais", description: "Gestão hospitalar" },
                { name: "Clínicas Especializadas", description: "Ambulatórios especializados" },
                { name: "Laboratórios", description: "Serviços de diagnóstico" },
                { name: "Farmácias Municipais", description: "Dispensação de medicamentos" }
              ]
            },
            {
              name: "Vigilância Sanitária e Epidemiológica",
              description: "Vigilância em saúde",
              subfolders: [
                { name: "Vigilância Epidemiológica", description: "Controle de doenças" },
                { name: "Vigilância Sanitária", description: "Fiscalização sanitária" },
                { name: "Controle de Endemias", description: "Combate a vetores" },
                { name: "Saúde do Trabalhador", description: "VISAT" }
              ]
            },
            {
              name: "Média e Alta Complexidade",
              description: "Atenção especializada",
              subfolders: [
                { name: "Especialidades Médicas", description: "Consultas especializadas" },
                { name: "Procedimentos Cirúrgicos", description: "Cirurgias eletivas e urgentes" },
                { name: "Diagnósticos Especializados", description: "Exames complexos" },
                { name: "Internações", description: "Serviços hospitalares" }
              ]
            },
            {
              name: "Regulação em Saúde",
              description: "Central de regulação",
              subfolders: [
                { name: "Central de Regulação", description: "Regulação de acesso" },
                { name: "Fila de Cirurgias", description: "Gestão cirúrgica" },
                { name: "Consultas Especializadas", description: "Agendamento especializado" },
                { name: "Transporte Sanitário", description: "Ambulâncias e remoções" }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Secretaria Municipal de Assistência Social",
      description: "Desenvolvimento de políticas de assistência social e proteção às famílias em vulnerabilidade.",
      folders: [
        ...baseStructure,
        {
          name: "06 Assistência e Proteção Social",
          description: "Serviços de assistência e proteção social",
          subfolders: [
            {
              name: "Proteção Social Básica",
              description: "Serviços preventivos de assistência social",
              subfolders: [
                { name: "CRAS", description: "Centros de Referência de Assistência Social" },
                { name: "PAIF", description: "Serviço de Proteção e Atendimento Integral à Família" },
                { name: "SCFV", description: "Serviço de Convivência e Fortalecimento de Vínculos" },
                { name: "Benefícios Eventuais", description: "Auxílios emergenciais" }
              ]
            },
            {
              name: "Programas Sociais",
              description: "Programas de transferência de renda e inclusão",
              subfolders: [
                { name: "Bolsa Família", description: "Programa federal de transferência" },
                { name: "Auxílio Brasil", description: "Novo programa social" },
                { name: "BPC", description: "Benefício de Prestação Continuada" },
                { name: "Programas Municipais", description: "Iniciativas locais" }
              ]
            },
            {
              name: "Cadastro Único",
              description: "Portal de acesso aos programas sociais",
              subfolders: [
                { name: "Cadastramento", description: "Inclusão no CadÚnico" },
                { name: "Atualização Cadastral", description: "Manutenção de dados" },
                { name: "Gestão de Benefícios", description: "Acompanhamento de beneficiários" },
                { name: "Averiguações", description: "Verificação cadastral" }
              ]
            },
            {
              name: "Serviços de Proteção Social",
              description: "Atendimento a situações de vulnerabilidade",
              subfolders: [
                { name: "Proteção Social Especial", description: "Média e alta complexidade" },
                { name: "CREAS", description: "Centro de Referência Especializado" },
                { name: "Violação de Direitos", description: "Atendimento a violações" },
                { name: "Medidas de Proteção", description: "Acompanhamento familiar" }
              ]
            },
            {
              name: "Segurança Alimentar",
              description: "Programas de alimentação e nutrição",
              subfolders: [
                { name: "Programas de Alimentação", description: "Distribuição de alimentos" },
                { name: "Banco de Alimentos", description: "Arrecadação e distribuição" },
                { name: "Hortas Comunitárias", description: "Agricultura urbana" },
                { name: "Educação Nutricional", description: "Orientação alimentar" }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Secretaria Municipal de Meio Ambiente e Desenvolvimento Sustentável",
      description: "Proteção ambiental, licenciamento e promoção do desenvolvimento sustentável.",
      folders: [
        ...baseStructure,
        {
          name: "06 Meio Ambiente e Sustentabilidade",
          description: "Gestão ambiental e sustentabilidade",
          subfolders: [
            {
              name: "Licenciamento Ambiental",
              description: "Processo de licenciamento e regularização",
              subfolders: [
                { name: "Licenças Ambientais", description: "Emissão de licenças" },
                { name: "Estudos de Impacto", description: "Avaliação ambiental" },
                { name: "Monitoramento Ambiental", description: "Acompanhamento de condicionantes" },
                { name: "Regularização", description: "Adequação ambiental" }
              ]
            },
            {
              name: "Fiscalização Ambiental",
              description: "Controle e fiscalização",
              subfolders: [
                { name: "Fiscalização Preventiva", description: "Ações educativas" },
                { name: "Autuações", description: "Penalidades ambientais" },
                { name: "Embargo e Interdição", description: "Medidas de urgência" },
                { name: "Recuperação de Áreas", description: "Restauração ambiental" }
              ]
            },
            {
              name: "Educação Ambiental",
              description: "Conscientização e educação",
              subfolders: [
                { name: "Programas Educativos", description: "Ações de educação ambiental" },
                { name: "Capacitação", description: "Formação de multiplicadores" },
                { name: "Campanhas", description: "Mobilização social" },
                { name: "Parcerias Educacionais", description: "Cooperação institucional" }
              ]
            },
            {
              name: "Gestão de Recursos Naturais",
              description: "Conservação e uso sustentável",
              subfolders: [
                { name: "Recursos Hídricos", description: "Gestão da água" },
                { name: "Biodiversidade", description: "Conservação da fauna e flora" },
                { name: "Unidades de Conservação", description: "Áreas protegidas" },
                { name: "Arborização Urbana", description: "Gestão do verde urbano" }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Secretaria Municipal de Comunicação",
      description: "Comunicação institucional, imprensa e relacionamento com a mídia.",
      folders: [
        ...baseStructure,
        {
          name: "06 Comunicação e Mídia",
          description: "Atividades de comunicação e relacionamento",
          subfolders: [
            {
              name: "Assessoria de Imprensa",
              description: "Relacionamento com veículos de comunicação",
              subfolders: [
                { name: "Releases", description: "Comunicados à imprensa" },
                { name: "Entrevistas", description: "Agendamento e acompanhamento" },
                { name: "Coletivas", description: "Entrevistas coletivas" },
                { name: "Clipping", description: "Monitoramento de mídia" }
              ]
            },
            {
              name: "Comunicação Digital",
              description: "Mídias digitais e redes sociais",
              subfolders: [
                { name: "Redes Sociais", description: "Gestão de perfis oficiais" },
                { name: "Portal Municipal", description: "Site oficial da prefeitura" },
                { name: "Aplicativos", description: "Apps de comunicação" },
                { name: "Newsletter", description: "Comunicação por e-mail" }
              ]
            },
            {
              name: "Produção de Conteúdo",
              description: "Criação de material comunicacional",
              subfolders: [
                { name: "Textos Jornalísticos", description: "Matérias e reportagens" },
                { name: "Material Gráfico", description: "Peças publicitárias" },
                { name: "Audiovisual", description: "Vídeos e podcasts" },
                { name: "Fotografia", description: "Registro fotográfico oficial" }
              ]
            },
            {
              name: "Eventos e Cerimonial",
              description: "Organização e cobertura de eventos",
              subfolders: [
                { name: "Planejamento de Eventos", description: "Organização logística" },
                { name: "Cobertura", description: "Registro de eventos" },
                { name: "Transmissões", description: "Lives e transmissões" },
                { name: "Protocolo", description: "Organização protocolar" }
              ]
            }
          ]
        }
      ]
    }
  ];
  
  // SUPERINTENDÊNCIAS
  const superintendencias: CollectionTemplate[] = [
    {
      name: "Superintendência de Recursos Humanos",
      description: "Gestão de pessoal e desenvolvimento de recursos humanos municipais.",
      folders: [
        ...baseStructure,
        {
          name: "06 Recursos Humanos",
          description: "Gestão de pessoas e desenvolvimento profissional",
          subfolders: [
            {
              name: "Gestão de Pessoal",
              description: "Administração de servidores",
              subfolders: [
                { name: "Cadastro Funcional", description: "Dados dos servidores" },
                { name: "Movimentação", description: "Transferências e remoções" },
                { name: "Progressões", description: "Avanços na carreira" },
                { name: "Aposentadorias", description: "Processos de aposentadoria" }
              ]
            },
            {
              name: "Folha de Pagamento",
              description: "Processamento da remuneração",
              subfolders: [
                { name: "Processamento Mensal", description: "Cálculo da folha" },
                { name: "Benefícios", description: "Auxílios e benefícios" },
                { name: "Descontos", description: "Contribuições e descontos" },
                { name: "13º Salário", description: "Gratificação natalina" }
              ]
            },
            {
              name: "Capacitação e Desenvolvimento",
              description: "Formação e qualificação profissional",
              subfolders: [
                { name: "Treinamentos", description: "Cursos e capacitações" },
                { name: "Educação Continuada", description: "Formação permanente" },
                { name: "Avaliação de Desempenho", description: "Avaliação funcional" },
                { name: "Plano de Carreira", description: "Desenvolvimento profissional" }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Superintendência de Tecnologia da Informação",
      description: "Gestão de tecnologia, sistemas e infraestrutura digital municipal.",
      folders: [
        ...baseStructure,
        {
          name: "06 Tecnologia e Sistemas",
          description: "Gestão de TI e transformação digital",
          subfolders: [
            {
              name: "Infraestrutura de TI",
              description: "Equipamentos e redes",
              subfolders: [
                { name: "Servidores", description: "Gestão de servidores" },
                { name: "Redes", description: "Infraestrutura de conectividade" },
                { name: "Equipamentos", description: "Hardware e periféricos" },
                { name: "Backup", description: "Segurança dos dados" }
              ]
            },
            {
              name: "Sistemas e Aplicações",
              description: "Desenvolvimento e manutenção",
              subfolders: [
                { name: "Sistemas Municipais", description: "Aplicações próprias" },
                { name: "Manutenção", description: "Suporte a sistemas" },
                { name: "Desenvolvimento", description: "Criação de soluções" },
                { name: "Integração", description: "Interoperabilidade" }
              ]
            },
            {
              name: "Segurança da Informação",
              description: "Proteção de dados e sistemas",
              subfolders: [
                { name: "Políticas de Segurança", description: "Normas de proteção" },
                { name: "Controle de Acesso", description: "Gestão de permissões" },
                { name: "Monitoramento", description: "Vigilância de segurança" },
                { name: "Backup e Recovery", description: "Recuperação de dados" }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Superintendência de Suprimentos",
      description: "Gestão de compras, licitações e contratos administrativos municipais.",
      folders: [
        ...baseStructure,
        {
          name: "06 Compras e Licitações",
          description: "Processos de aquisição e contratação",
          subfolders: [
            {
              name: "Planejamento de Compras",
              description: "Programação anual de aquisições",
              subfolders: [
                { name: "Plano Anual", description: "Programação de compras" },
                { name: "Pesquisa de Preços", description: "Levantamento de mercado" },
                { name: "Especificações Técnicas", description: "Definição de requisitos" },
                { name: "Cronograma", description: "Calendário de licitações" }
              ]
            },
            {
              name: "Processos Licitatórios",
              description: "Condução de licitações",
              subfolders: [
                { name: "Pregão Eletrônico", description: "Modalidade eletrônica" },
                { name: "Concorrência", description: "Modalidade tradicional" },
                { name: "Tomada de Preços", description: "Média complexidade" },
                { name: "Dispensa e Inexigibilidade", description: "Contratações diretas" }
              ]
            },
            {
              name: "Gestão de Contratos",
              description: "Acompanhamento contratual",
              subfolders: [
                { name: "Contratos Vigentes", description: "Acompanhamento da execução" },
                { name: "Fiscalização", description: "Controle de qualidade" },
                { name: "Medições", description: "Verificação de entregas" },
                { name: "Pagamentos", description: "Liberação financeira" }
              ]
            }
          ]
        }
      ]
    }
  ];
  
  // CONSELHOS MUNICIPAIS
  const conselhos: CollectionTemplate[] = [
    {
      name: "Conselho Municipal de Educação",
      description: "Órgão de controle social e consultivo do sistema municipal de ensino.",
      folders: [
        ...baseStructure,
        {
          name: "06 Controle Social Educacional",
          description: "Atividades de controle social da educação",
          subfolders: [
            {
              name: "Composição e Funcionamento",
              description: "Organização do conselho",
              subfolders: [
                { name: "Representação Governamental", description: "Membros do governo" },
                { name: "Representação da Sociedade Civil", description: "Membros da sociedade" },
                { name: "Mandato dos Conselheiros", description: "Período de atuação" },
                { name: "Renovação", description: "Processo de renovação" }
              ]
            },
            {
              name: "Deliberações e Normatização",
              description: "Atos normativos do conselho",
              subfolders: [
                { name: "Resoluções", description: "Atos normativos" },
                { name: "Pareceres", description: "Análises técnicas" },
                { name: "Recomendações", description: "Orientações" },
                { name: "Indicações", description: "Sugestões de melhoria" }
              ]
            },
            {
              name: "Fiscalização e Controle",
              description: "Acompanhamento das políticas educacionais",
              subfolders: [
                { name: "Acompanhamento de Políticas", description: "Monitoramento de ações" },
                { name: "Controle de Recursos", description: "Fiscalização financeira" },
                { name: "Avaliação de Programas", description: "Análise de resultados" },
                { name: "Denúncias", description: "Apuração de irregularidades" }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Conselho Municipal de Saúde",
      description: "Órgão colegiado de controle social do Sistema Único de Saúde no município.",
      folders: [
        ...baseStructure,
        {
          name: "06 Controle Social da Saúde",
          description: "Atividades de controle social da saúde",
          subfolders: [
            {
              name: "Gestão do Conselho",
              description: "Funcionamento interno",
              subfolders: [
                { name: "Regimento Interno", description: "Normas de funcionamento" },
                { name: "Reuniões Plenárias", description: "Encontros do conselho" },
                { name: "Comissões Técnicas", description: "Grupos de trabalho" },
                { name: "Calendário de Reuniões", description: "Programação anual" }
              ]
            },
            {
              name: "Controle Social",
              description: "Acompanhamento de políticas de saúde",
              subfolders: [
                { name: "Plano Municipal de Saúde", description: "Acompanhamento do planejamento" },
                { name: "Relatório de Gestão", description: "Análise de resultados" },
                { name: "Aplicação de Recursos", description: "Controle financeiro" },
                { name: "Conferências Municipais", description: "Eventos participativos" }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Conselho Municipal de Assistência Social",
      description: "Órgão superior de deliberação, normatização e controle das ações de assistência social.",
      folders: [
        ...baseStructure,
        {
          name: "06 Controle Social da Assistência",
          description: "Controle social da assistência social",
          subfolders: [
            {
              name: "Política de Assistência Social",
              description: "Deliberação sobre políticas",
              subfolders: [
                { name: "Plano Municipal", description: "Aprovação do planejamento" },
                { name: "Programas e Projetos", description: "Análise de propostas" },
                { name: "Critérios de Partilha", description: "Distribuição de recursos" },
                { name: "Normatização", description: "Regulamentação local" }
              ]
            },
            {
              name: "Registro e Certificação",
              description: "Processo de habilitação de entidades",
              subfolders: [
                { name: "Inscrição de Entidades", description: "Cadastro no CMAS" },
                { name: "Certificação", description: "Certificado de Entidade Beneficente" },
                { name: "Renovação", description: "Atualização cadastral" },
                { name: "Cancelamento", description: "Descredenciamento" }
              ]
            }
          ]
        }
      ]
    }
  ];
  
  // AUTARQUIAS E FUNDAÇÕES
  const autarquias: CollectionTemplate[] = [
    {
      name: "ECOS - Empresa de Construções, Obras, Serviços, Projetos, Transportes e Trânsito",
      description: "Autarquia municipal responsável por obras, serviços urbanos e gestão de trânsito.",
      folders: [
        ...baseStructure,
        {
          name: "06 Obras e Serviços Urbanos",
          description: "Execução de obras e manutenção urbana",
          subfolders: [
            {
              name: "Obras Públicas",
              description: "Execução de construções municipais",
              subfolders: [
                { name: "Projetos de Engenharia", description: "Elaboração de projetos" },
                { name: "Execução de Obras", description: "Construção e reformas" },
                { name: "Fiscalização Técnica", description: "Acompanhamento de obras" },
                { name: "Controle de Qualidade", description: "Verificação de padrões" }
              ]
            },
            {
              name: "Manutenção Urbana",
              description: "Conservação da infraestrutura",
              subfolders: [
                { name: "Pavimentação", description: "Manutenção de vias" },
                { name: "Drenagem", description: "Sistema de escoamento" },
                { name: "Iluminação Pública", description: "Manutenção da iluminação" },
                { name: "Sinalização", description: "Placas e demarcação" }
              ]
            },
            {
              name: "Transportes e Trânsito",
              description: "Gestão do sistema viário",
              subfolders: [
                { name: "Sinalização de Trânsito", description: "Placas e semáforos" },
                { name: "Fiscalização", description: "Controle de trânsito" },
                { name: "Educação para o Trânsito", description: "Campanhas educativas" },
                { name: "Estacionamento", description: "Gestão de vagas" }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Hospital Regional - Hospital Público Regional Prefeito Osvaldo Franco",
      description: "Unidade hospitalar municipal de referência para média e alta complexidade.",
      folders: [
        ...baseStructure,
        {
          name: "06 Assistência Hospitalar",
          description: "Serviços hospitalares especializados",
          subfolders: [
            {
              name: "Atendimento Hospitalar",
              description: "Serviços de internação e urgência",
              subfolders: [
                { name: "Emergência", description: "Pronto atendimento" },
                { name: "Internação", description: "Leitos hospitalares" },
                { name: "UTI", description: "Unidade de Terapia Intensiva" },
                { name: "Centro Cirúrgico", description: "Procedimentos cirúrgicos" }
              ]
            },
            {
              name: "Especialidades Médicas",
              description: "Atendimento ambulatorial especializado",
              subfolders: [
                { name: "Consultas Especializadas", description: "Ambulatórios médicos" },
                { name: "Diagnóstico por Imagem", description: "Exames radiológicos" },
                { name: "Laboratório", description: "Exames laboratoriais" },
                { name: "Reabilitação", description: "Fisioterapia e reabilitação" }
              ]
            },
            {
              name: "Gestão Hospitalar",
              description: "Administração e qualidade hospitalar",
              subfolders: [
                { name: "Qualidade Assistencial", description: "Protocolos e indicadores" },
                { name: "Segurança do Paciente", description: "Prevenção de eventos adversos" },
                { name: "Hotelaria Hospitalar", description: "Serviços de apoio" },
                { name: "Gestão de Leitos", description: "Ocupação e rotatividade" }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "APROMIV - Associação de Proteção à Maternidade, Infância e Velhice",
      description: "Entidade de assistência social voltada para proteção materno-infantil e idosos.",
      folders: [
        ...baseStructure,
        {
          name: "06 Proteção Materno-Infantil e Idosos",
          description: "Serviços especializados de proteção social",
          subfolders: [
            {
              name: "Proteção à Maternidade",
              description: "Assistência à gestante e puérpera",
              subfolders: [
                { name: "Pré-Natal Social", description: "Acompanhamento social" },
                { name: "Apoio à Gestante", description: "Orientação e assistência" },
                { name: "Puerpério", description: "Cuidados pós-parto" },
                { name: "Planejamento Familiar", description: "Orientação reprodutiva" }
              ]
            },
            {
              name: "Proteção à Infância",
              description: "Cuidados com crianças e adolescentes",
              subfolders: [
                { name: "Primeira Infância", description: "0 a 6 anos" },
                { name: "Desenvolvimento Infantil", description: "Estimulação e cuidados" },
                { name: "Proteção de Direitos", description: "Garantia de direitos" },
                { name: "Convivência Familiar", description: "Fortalecimento de vínculos" }
              ]
            },
            {
              name: "Proteção à Velhice",
              description: "Assistência ao idoso",
              subfolders: [
                { name: "Centro de Convivência", description: "Atividades para idosos" },
                { name: "Assistência Domiciliar", description: "Cuidados em casa" },
                { name: "Proteção Especial", description: "Situações de vulnerabilidade" },
                { name: "Envelhecimento Ativo", description: "Promoção da autonomia" }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "BETA - Fundação Pública de Pesquisa e Tecnologia Avançada",
      description: "Fundação municipal para desenvolvimento de pesquisa, tecnologia e inovação.",
      folders: [
        ...baseStructure,
        {
          name: "06 Pesquisa e Inovação",
          description: "Desenvolvimento tecnológico e pesquisa aplicada",
          subfolders: [
            {
              name: "Pesquisa e Desenvolvimento",
              description: "Projetos de P&D e inovação",
              subfolders: [
                { name: "Projetos de Pesquisa", description: "Estudos e desenvolvimento" },
                { name: "Inovação Tecnológica", description: "Desenvolvimento de soluções" },
                { name: "Parcerias Acadêmicas", description: "Cooperação com universidades" },
                { name: "Propriedade Intelectual", description: "Patentes e registros" }
              ]
            },
            {
              name: "Transferência de Tecnologia",
              description: "Aplicação prática de pesquisas",
              subfolders: [
                { name: "Soluções Municipais", description: "Tecnologia para a gestão pública" },
                { name: "Capacitação Tecnológica", description: "Formação em tecnologia" },
                { name: "Consultoria Técnica", description: "Assessoria especializada" },
                { name: "Incubação de Projetos", description: "Apoio a startups" }
              ]
            },
            {
              name: "Laboratórios e Infraestrutura",
              description: "Estrutura física e equipamentos",
              subfolders: [
                { name: "Laboratórios de Pesquisa", description: "Infraestrutura científica" },
                { name: "Equipamentos Especializados", description: "Instrumentação científica" },
                { name: "Biblioteca Técnica", description: "Acervo especializado" },
                { name: "Espaços de Coworking", description: "Ambientes colaborativos" }
              ]
            }
          ]
        }
      ]
    }
  ];
  
  // TEMPLATES ESTADUAIS
  const estadualSecretariats: CollectionTemplate[] = [
    {
      name: "Gabinete do Secretário",
      description: "Coordenação da secretaria estadual e assessoria direta ao Secretário.",
      folders: [
        ...baseStructure,
        {
          name: "06 Gabinete Estadual",
          description: "Atividades específicas do Gabinete Estadual",
          subfolders: [
            {
              name: "Agenda do Secretário",
              description: "Gestão da agenda e compromissos oficiais",
              subfolders: [
                { name: "Compromissos Oficiais", description: "Eventos e reuniões institucionais" },
                { name: "Audiências", description: "Atendimentos ao público" },
                { name: "Eventos Intergovernamentais", description: "Articulação federativa" },
                { name: "Missões Oficiais", description: "Viagens em serviço" }
              ]
            },
            {
              name: "Atos e Despachos",
              description: "Expedição de atos administrativos",
              subfolders: [
                { name: "Portarias", description: "Atos normativos internos" },
                { name: "Despachos", description: "Decisões administrativas" },
                { name: "Instruções Normativas", description: "Orientações técnicas" },
                { name: "Comunicados", description: "Informações oficiais" }
              ]
            },
            {
              name: "Coordenação Administrativa",
              description: "Gestão administrativa da secretaria",
              subfolders: [
                { name: "Planejamento Estratégico", description: "Diretrizes de médio e longo prazo" },
                { name: "Monitoramento de Metas", description: "Acompanhamento de resultados" },
                { name: "Articulação Interna", description: "Coordenação entre órgãos" },
                { name: "Relações Institucionais", description: "Parcerias e cooperação" }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Assessoria Jurídica",
      description: "Consultoria e pareceres jurídicos para os órgãos estaduais.",
      folders: [
        ...baseStructure,
        {
          name: "06 Consultoria Jurídica Estadual",
          description: "Atividades jurídicas especializadas estaduais",
          subfolders: [
            {
              name: "Pareceres Jurídicos",
              description: "Análises jurídicas especializadas",
              subfolders: [
                { name: "Pareceres Consultivos", description: "Orientações jurídicas preventivas" },
                { name: "Análise de Constitucionalidade", description: "Verificação constitucional" },
                { name: "Interpretação Legal", description: "Esclarecimentos normativos" },
                { name: "Consultas Complexas", description: "Questões jurídicas especializadas" }
              ]
            },
            {
              name: "Notas Técnicas",
              description: "Orientações técnico-jurídicas",
              subfolders: [
                { name: "Orientações Normativas", description: "Diretrizes de aplicação" },
                { name: "Procedimentos Legais", description: "Rotinas jurídicas" },
                { name: "Jurisprudência", description: "Compilação de decisões" },
                { name: "Doutrina Aplicada", description: "Fundamentação teórica" }
              ]
            },
            {
              name: "Análise Legislativa",
              description: "Acompanhamento e análise de proposições",
              subfolders: [
                { name: "Propostas Legislativas", description: "Análise de projetos de lei" },
                { name: "Impacto Regulatório", description: "Avaliação de efeitos normativos" },
                { name: "Constitucionalidade", description: "Verificação constitucional" },
                { name: "Harmonização Normativa", description: "Compatibilização legal" }
              ]
            }
          ]
        }
      ]
    }
  ];
  
  // TEMPLATES FEDERAIS
  const federalSecretariats: CollectionTemplate[] = [
    {
      name: "Gabinete do Ministro",
      description: "Assessoria direta e coordenação das atividades do Ministro.",
      folders: [
        ...baseStructure,
        {
          name: "06 Gabinete Ministerial",
          description: "Atividades específicas do Gabinete Ministerial",
          subfolders: [
            {
              name: "Agenda do Ministro",
              description: "Gestão da agenda ministerial",
              subfolders: [
                { name: "Compromissos Nacionais", description: "Eventos em território nacional" },
                { name: "Compromissos Internacionais", description: "Agenda internacional" },
                { name: "Reuniões Ministeriais", description: "Encontros com outros ministros" },
                { name: "Audiências Oficiais", description: "Atendimentos protocolares" }
              ]
            },
            {
              name: "Discursos e Atos Oficiais",
              description: "Elaboração e registro de atos ministeriais",
              subfolders: [
                { name: "Discursos Oficiais", description: "Pronunciamentos ministeriais" },
                { name: "Portarias Ministeriais", description: "Atos normativos do ministério" },
                { name: "Instruções Normativas", description: "Orientações técnicas" },
                { name: "Comunicados Oficiais", description: "Informações à sociedade" }
              ]
            },
            {
              name: "Coordenação Ministerial",
              description: "Articulação e coordenação institucional",
              subfolders: [
                { name: "Articulação Federativa", description: "Relação com estados e municípios" },
                { name: "Coordenação Interministerial", description: "Articulação entre ministérios" },
                { name: "Relações Internacionais", description: "Cooperação internacional" },
                { name: "Sociedade Civil", description: "Diálogo social" }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Consultoria Jurídica",
      description: "Assessoramento jurídico especializado em âmbito federal.",
      folders: [
        ...baseStructure,
        {
          name: "06 Consultoria Federal",
          description: "Atividades jurídicas federais especializadas",
          subfolders: [
            {
              name: "Pareceres e Notas Jurídicas",
              description: "Análises jurídicas federais",
              subfolders: [
                { name: "Pareceres de Alto Nível", description: "Análises jurídicas complexas" },
                { name: "Notas Técnicas Federais", description: "Orientações especializadas" },
                { name: "Interpretação Constitucional", description: "Análises constitucionais" },
                { name: "Direito Internacional", description: "Questões internacionais" }
              ]
            },
            {
              name: "Análise de Propostas Legislativas",
              description: "Acompanhamento legislativo federal",
              subfolders: [
                { name: "Projetos de Lei Federal", description: "Análise de PLs" },
                { name: "Medidas Provisórias", description: "Acompanhamento de MPs" },
                { name: "Decretos Federais", description: "Análise de decretos" },
                { name: "Regulamentação", description: "Elaboração de normas regulamentadoras" }
              ]
            },
            {
              name: "Contencioso Federal",
              description: "Representação judicial federal",
              subfolders: [
                { name: "Supremo Tribunal Federal", description: "Ações no STF" },
                { name: "Superior Tribunal de Justiça", description: "Recursos ao STJ" },
                { name: "Tribunais Regionais Federais", description: "Ações nos TRFs" },
                { name: "Advocacia-Geral da União", description: "Articulação com AGU" }
              ]
            }
          ]
        }
      ]
    }
  ];
  
  // ESTRUTURA COMPLETA DE TEMPLATES
  export const orgTemplates = {
    municipal: {
      name: "Prefeitura Municipal",
      collections: municipalSecretariats,
    },
    superintendencias: {
      name: "Superintendências Municipais",
      collections: superintendencias,
    },
    conselhos: {
      name: "Conselhos Municipais",
      collections: conselhos,
    },
    autarquias: {
      name: "Autarquias e Fundações",
      collections: autarquias,
    },
    estadual: {
      name: "Órgão Estadual",
      collections: estadualSecretariats,
    },
    federal: {
      name: "Órgão Federal",
      collections: federalSecretariats,
    },
    custom: {
      name: "Personalizado",
      collections: [],
    },
  };
  
  // TEMPLATES ADICIONAIS POR ÁREA TEMÁTICA
  export const areaTemplates = {
    saude: {
      name: "Área da Saúde",
      baseFolder: "06 Área da Saúde",
      folders: [
        {
          name: "Atenção Primária",
          description: "Serviços básicos de saúde",
          subfolders: [
            { name: "UBS - Unidades Básicas", description: "Postos de saúde" },
            { name: "ESF - Estratégia Saúde da Família", description: "Equipes de saúde da família" },
            { name: "NASF - Núcleo de Apoio", description: "Apoio às equipes básicas" },
            { name: "Academia da Saúde", description: "Promoção de atividade física" }
          ]
        },
        {
          name: "Atenção Especializada",
          description: "Serviços especializados",
          subfolders: [
            { name: "Ambulatórios Especializados", description: "Consultas especializadas" },
            { name: "CAPS - Centro de Atenção Psicossocial", description: "Saúde mental" },
            { name: "CEO - Centro de Especialidades Odontológicas", description: "Odontologia especializada" },
            { name: "Unidades de Pronto Atendimento", description: "Urgência e emergência" }
          ]
        }
      ]
    },
    educacao: {
      name: "Área da Educação",
      baseFolder: "06 Área da Educação",
      folders: [
        {
          name: "Educação Infantil",
          description: "Primeira etapa da educação básica",
          subfolders: [
            { name: "Creches", description: "0 a 3 anos" },
            { name: "Pré-Escola", description: "4 a 5 anos" },
            { name: "Brinquedoteca", description: "Espaços lúdicos" },
            { name: "Educação Integral", description: "Tempo integral" }
          ]
        },
        {
          name: "Ensino Fundamental",
          description: "Educação fundamental obrigatória",
          subfolders: [
            { name: "Anos Iniciais", description: "1º ao 5º ano" },
            { name: "Anos Finais", description: "6º ao 9º ano" },
            { name: "Educação de Jovens e Adultos", description: "EJA" },
            { name: "Educação no Campo", description: "Escolas rurais" }
          ]
        }
      ]
    },
    assistencia: {
      name: "Área da Assistência Social",
      baseFolder: "06 Área da Assistência Social",
      folders: [
        {
          name: "Proteção Social Básica",
          description: "Prevenção de situações de risco",
          subfolders: [
            { name: "CRAS", description: "Centro de Referência de Assistência Social" },
            { name: "PAIF", description: "Proteção e Atendimento Integral à Família" },
            { name: "SCFV", description: "Serviço de Convivência e Fortalecimento de Vínculos" },
            { name: "Centro de Convivência", description: "Espaços de socialização" }
          ]
        },
        {
          name: "Proteção Social Especial",
          description: "Atendimento a violações de direitos",
          subfolders: [
            { name: "CREAS", description: "Centro de Referência Especializado" },
            { name: "Casa de Passagem", description: "Acolhimento temporário" },
            { name: "Casa Lar", description: "Acolhimento institucional" },
            { name: "Centro Pop", description: "População em situação de rua" }
          ]
        }
      ]
    }
  };
  
  // FUNÇÃO PARA GERAR ESTRUTURA COMPLETA
  export function generateCompleteStructure(orgType: keyof typeof orgTemplates, orgName: string): any {
    const template = orgTemplates[orgType];
    if (!template) {
      throw new Error(`Template ${orgType} não encontrado`);
    }
  
    return {
      name: orgName,
      type: orgType,
      template: template.name,
      structure: template.collections,
      metadata: {
        created: new Date().toISOString(),
        version: "1.0",
        baseStructure: "complete",
        customizations: []
      }
    };
  }
  
  // UTILITÁRIOS PARA CUSTOMIZAÇÃO
  export class TemplateCustomizer {
    static addCustomFolder(structure: CollectionTemplate, folderName: string, description: string, parentPath?: string): CollectionTemplate {
      // Implementar lógica para adicionar pasta customizada
      const newFolder: FolderTemplate = {
        name: folderName,
        description: description
      };
  
      if (parentPath) {
        // Adicionar em subpasta específica
        // Implementar navegação por path
      } else {
        // Adicionar na raiz
        structure.folders.push(newFolder);
      }
  
      return structure;
    }
  
    static removeFolder(structure: CollectionTemplate, folderPath: string): CollectionTemplate {
      // Implementar lógica para remover pasta
      return structure;
    }
  
    static modifyFolder(structure: CollectionTemplate, folderPath: string, newName?: string, newDescription?: string): CollectionTemplate {
      // Implementar lógica para modificar pasta
      return structure;
    }
  }
  
  // CONSTANTES DE CONFIGURAÇÃO
  export const CONFIG = {
    MAX_FOLDER_DEPTH: 4,
    REQUIRED_BASE_FOLDERS: ["00 Institucional", "01 Gestão", "02 Documentos", "03 Serviços", "04 Dados e Informações", "05 Transparência"],
    FORBIDDEN_CHARACTERS: ["<", ">", ":", "\"", "|", "?", "*"],
    MAX_FOLDER_NAME_LENGTH: 100,
    MAX_DESCRIPTION_LENGTH: 500
  };
  
  // VALIDAÇÃO DE ESTRUTURA
  export function validateStructure(structure: CollectionTemplate[]): { valid: boolean; errors: string[] } {
    const errors: string[] = [];
    
    structure.forEach(collection => {
      // Validar se contém pastas base obrigatórias
      const hasRequiredFolders = CONFIG.REQUIRED_BASE_FOLDERS.every(required => 
        collection.folders.some(folder => folder.name === required)
      );
      
      if (!hasRequiredFolders) {
        errors.push(`Coleção ${collection.name} não possui todas as pastas base obrigatórias`);
      }
  
      // Validar nomes de pastas
      collection.folders.forEach(folder => {
        if (folder.name.length > CONFIG.MAX_FOLDER_NAME_LENGTH) {
          errors.push(`Nome da pasta "${folder.name}" excede o limite de caracteres`);
        }
        
        const hasInvalidChars = CONFIG.FORBIDDEN_CHARACTERS.some(char => folder.name.includes(char));
        if (hasInvalidChars) {
          errors.push(`Nome da pasta "${folder.name}" contém caracteres inválidos`);
        }
      });
    });
  
    return {
      valid: errors.length === 0,
      errors
    };
  }