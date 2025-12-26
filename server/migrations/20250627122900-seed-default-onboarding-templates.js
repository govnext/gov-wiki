'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const now = new Date();

        const templates = [
            {
                id: uuidv4(),
                name: 'Prefeitura Municipal',
                description: 'Template completo para organizações municipais',
                orgType: 'municipal',
                structure: JSON.stringify({
                    collections: [
                        {
                            name: 'Gabinete do Prefeito',
                            description: 'Coordenação geral das políticas do município e assessoria direta ao Prefeito.',
                            folders: [
                                {
                                    type: 'document',
                                    title: '00 Institucional',
                                    children: [
                                        { type: 'document', title: 'Competências', children: [] },
                                        { type: 'document', title: 'Contatos', children: [] },
                                        { type: 'document', title: 'Estrutura Organizacional', children: [] },
                                        { type: 'document', title: 'Legislação', children: [] },
                                    ],
                                },
                                {
                                    type: 'document',
                                    title: '01 Gestão',
                                    children: [
                                        { type: 'document', title: 'Controles', children: [] },
                                        { type: 'document', title: 'Planejamento', children: [] },
                                        { type: 'document', title: 'Procedimentos', children: [] },
                                        { type: 'document', title: 'Processos', children: [] },
                                    ],
                                },
                                {
                                    type: 'document',
                                    title: '02 Documentos',
                                    children: [
                                        { type: 'document', title: 'Administrativos', children: [] },
                                        { type: 'document', title: 'Histórico', children: [] },
                                        { type: 'document', title: 'Normativos', children: [] },
                                        { type: 'document', title: 'Técnicos', children: [] },
                                    ],
                                },
                                {
                                    type: 'document',
                                    title: '03 Serviços',
                                    children: [
                                        { type: 'document', title: 'Catálogos', children: [] },
                                        { type: 'document', title: 'Formulários', children: [] },
                                        { type: 'document', title: 'Manuais', children: [] },
                                        { type: 'document', title: 'Protocolos', children: [] },
                                    ],
                                },
                                {
                                    type: 'document',
                                    title: '04 Dados e Informações',
                                    children: [
                                        { type: 'document', title: 'Estatísticas', children: [] },
                                        { type: 'document', title: 'Indicadores', children: [] },
                                        { type: 'document', title: 'Painéis', children: [] },
                                        { type: 'document', title: 'Relatórios', children: [] },
                                    ],
                                },
                                {
                                    type: 'document',
                                    title: '05 Transparência',
                                    children: [
                                        { type: 'document', title: 'Contratos', children: [] },
                                        { type: 'document', title: 'Convênios', children: [] },
                                        { type: 'document', title: 'Orçamento', children: [] },
                                        { type: 'document', title: 'Prestação de Contas', children: [] },
                                    ],
                                },
                                {
                                    type: 'document',
                                    title: '06 Gabinete Executivo',
                                    children: [
                                        { type: 'document', title: 'Agenda do Prefeito', children: [] },
                                        { type: 'document', title: 'Cerimonial e Protocolo', children: [] },
                                        { type: 'document', title: 'Atos Oficiais', children: [] },
                                    ],
                                },
                            ],
                        },
                    ],
                }),
                isActive: true,
                teamId: null,
                createdById: null,
                createdAt: now,
                updatedAt: now,
            },
            {
                id: uuidv4(),
                name: 'Órgão Estadual',
                description: 'Template para organizações estaduais',
                orgType: 'estadual',
                structure: JSON.stringify({
                    collections: [
                        {
                            name: 'Gabinete do Secretário',
                            description: 'Coordenação da secretaria estadual e assessoria direta ao Secretário.',
                            folders: [
                                {
                                    type: 'document',
                                    title: '00 Institucional',
                                    children: [
                                        { type: 'document', title: 'Competências', children: [] },
                                        { type: 'document', title: 'Contatos', children: [] },
                                    ],
                                },
                                {
                                    type: 'document',
                                    title: '06 Gabinete Estadual',
                                    children: [
                                        { type: 'document', title: 'Agenda do Secretário', children: [] },
                                        { type: 'document', title: 'Atos e Despachos', children: [] },
                                    ],
                                },
                            ],
                        },
                    ],
                }),
                isActive: true,
                teamId: null,
                createdById: null,
                createdAt: now,
                updatedAt: now,
            },
            {
                id: uuidv4(),
                name: 'Órgão Federal',
                description: 'Template para organizações federais',
                orgType: 'federal',
                structure: JSON.stringify({
                    collections: [
                        {
                            name: 'Gabinete do Ministro',
                            description: 'Assessoria direta e coordenação das atividades do Ministro.',
                            folders: [
                                {
                                    type: 'document',
                                    title: '00 Institucional',
                                    children: [
                                        { type: 'document', title: 'Competências', children: [] },
                                        { type: 'document', title: 'Contatos', children: [] },
                                    ],
                                },
                                {
                                    type: 'document',
                                    title: '06 Gabinete Ministerial',
                                    children: [
                                        { type: 'document', title: 'Agenda do Ministro', children: [] },
                                        { type: 'document', title: 'Coordenação Ministerial', children: [] },
                                    ],
                                },
                            ],
                        },
                    ],
                }),
                isActive: true,
                teamId: null,
                createdById: null,
                createdAt: now,
                updatedAt: now,
            },
        ];

        await queryInterface.bulkInsert('onboarding_templates', templates);
    },

    down: async (queryInterface) => {
        await queryInterface.bulkDelete('onboarding_templates', {
            teamId: null,
        });
    },
}; 