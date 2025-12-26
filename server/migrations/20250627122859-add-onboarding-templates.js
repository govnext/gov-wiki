'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        // Create onboarding_templates table
        await queryInterface.createTable('onboarding_templates', {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            orgType: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: 'custom',
            },
            structure: {
                type: Sequelize.JSONB,
                allowNull: false,
                defaultValue: [],
            },
            isActive: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: true,
            },
            teamId: {
                type: Sequelize.UUID,
                allowNull: true,
                references: {
                    model: 'teams',
                    key: 'id',
                },
                onDelete: 'CASCADE',
            },
            createdById: {
                type: Sequelize.UUID,
                allowNull: true,
                references: {
                    model: 'users',
                    key: 'id',
                },
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });

        // Create template_document_mappings table for linking folders to document templates
        await queryInterface.createTable('template_document_mappings', {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            onboardingTemplateId: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'onboarding_templates',
                    key: 'id',
                },
                onDelete: 'CASCADE',
            },
            folderPath: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            documentTemplateId: {
                type: Sequelize.UUID,
                allowNull: true,
                references: {
                    model: 'documents',
                    key: 'id',
                },
                onDelete: 'SET NULL',
            },
            useAsDefault: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });

        // Create team_onboarding_settings table
        await queryInterface.createTable('team_onboarding_settings', {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            teamId: {
                type: Sequelize.UUID,
                allowNull: false,
                unique: true,
                references: {
                    model: 'teams',
                    key: 'id',
                },
                onDelete: 'CASCADE',
            },
            defaultTemplateId: {
                type: Sequelize.UUID,
                allowNull: true,
                references: {
                    model: 'onboarding_templates',
                    key: 'id',
                },
                onDelete: 'SET NULL',
            },
            useTemplatesOnCreate: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            autoCreateStructure: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });

        // Add indexes
        await queryInterface.addIndex('onboarding_templates', ['teamId']);
        await queryInterface.addIndex('onboarding_templates', ['orgType']);
        await queryInterface.addIndex('template_document_mappings', ['onboardingTemplateId']);
        await queryInterface.addIndex('template_document_mappings', ['folderPath']);
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable('team_onboarding_settings');
        await queryInterface.dropTable('template_document_mappings');
        await queryInterface.dropTable('onboarding_templates');
    },
}; 