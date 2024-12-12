
import { Locale } from "adminjs";

export const locales: Locale = {
  language: "pt-BR",
  availableLanguages: ['pt-BR', 'en'],
  localeDetection: true,
  translations: {
    'pt-BR': {
      actions: {
        new: "Criar novo(a)",
        edit: "Editar",
        show: "Exibir",
        delete: "Excluir",
        bulkDelete: "Excluir tudo",
        list: "Listar",
        import: "Importar",
        export: "Exportar",
      },
      buttons: {
        save: "Salvar",
        addNewItem: "Adicionar Novo Item",
        filter: "Filtrar",
        applyChanges: "Aplicar mudanças",
        resetFilter: "Redefinir",
        confirmRemovalMany: "Confirma a remoção de {{count}} registro",
        confirmRemovalMany_plural: "Confirma a remoção de {{count}} registros",
        logout: "Sair",
        login: "Entrar",
        seeTheDocumentation: "Ver: <1>a documentação</1>",
        createFirstRecord: "Criar Primeiro Registro",
      },
      components: {
        Login: {
          welcomeHeader: "Bem-vindo(a)",
          welcomeMessage:
            "Ao Sistema Ambiental - Utilize suas credenciais para acessar a área administrativa. teste email: admin@email.com, senha: 123456",
          properties: {
            email: "Email",
            password: "Senha",
          },
          loginButton: "Login",
        },
      },
      labels: {
        navigation: "Navegação",
        register: "Cadastro",
        administration: "Administração",
        training: "Treinamento",
        pages: "Páginas",
        selectedRecords: "Selecionado ({{selected}})",
        filters: "Filtros",
        adminVersion: "Admin: {{version}}",
        appVersion: "App: {{version}}",
        loginWelcome: "Bem-vindo(a)",
        courses: "Cursos",
        episodes: "Episódios",
        categories: "Categorias",
        users: "Usuários",
        companies: "Empresas",
        conditionings: "Condicionantes",
        environmental_licenses: "Licenças Ambientais",
        dtrp_lwarts: "Dtrp Lwart",
        dtrp_ctrs: "Dtrp Ctr",
        tightnesses: "Estanqueidade",
        brigade_trainings: "Treinamento de Brigada",
        extinguishers: "Extintores",
        avcbs: "Avcb",
        certificate_ctrs: "Certificado de Reg.",
      },
      properties: {
        firstName: "Primeiro Nome",
        lastName: "Sobrenome",
        phone: "Telefone",
        birth: "Data de Nascimento",
        email: "E-mail",
        password: "Senha",
        role: "Perfil",
        name: "Nome",
        synopsis: "Sinopse",
        featured: "Em Destaque",
        order: "Ordem",
        videoUrl: "URL do Vídeo",
        secondsLong: "Segundos de Duração",
        courseId: "Curso",
        uploadVideo: "Enviar um vídeo",
        thumbnailUrl: "URL da Capa",
        uploadThumbnail: "Upload da Capa",
        categoryId: "Categoria",
        position: "Posição na Tela",
        createdAt: "Criado em",
        updatedAt: "Atualizado em",
        from: "De",
        to: "Até",
        dueDate: "Data de vencimento",
        comments: "Observações",
        description: "Descrição",
        term: "Prazo",
        trainingDate: "Data do treinamento",
        companyId: "Empresa pertencente",
        environmentalLicenseId: "Licença pertencente",
        exchangeDate: "Data da recarga",
        company: "Empresa",
        resource: "Módulo",
        action: "Ação",
        userId: "Usuário",
        difference: "Diferença",
      },
      messages: {
        successfullyBulkDeleted: "{{count}} registro removido com sucesso",
        successfullyBulkDeleted_plural:
          "{{count}} registros removidos com sucesso",
        successfullyDeleted: "Registro excluído com sucesso",
        successfullyUpdated: "Registro atualizado com sucesso",
        thereWereValidationErrors:
          "Existem erros de validação - confira-os abaixo",
        forbiddenError:
          "Você não pode executar a ação {{actionName}} em {{resourceId}}",
        anyForbiddenError: "Você não pode executar a ação solicitada",
        successfullyCreated: "Novo registro criado com sucesso",
        bulkDeleteError:
          "Houve um erro ao excluir os registros. Verifique os logs para mais informações",
        errorFetchingRecords:
          "Houve um erro ao obter os registros. Verifique os logs para mais informações",
        errorFetchingRecord:
          "Houve um erro ao obter o registro, Verifique os logs para mais informações",
        noRecordsSelected: "Você não selecionou nenhum registro",
        theseRecordsWillBeRemoved: "O registro a seguir será excluído",
        theseRecordsWillBeRemoved_plural:
          "Os registros a seguir serão excluídos",
        pickSomeFirstToRemove:
          "Para remover registros você precisa selecioná-los primeiro",
        error404Resource:
          "Recurso indentificado pelo id: {{resourceId}} não pôde ser encontrado",
        error404Action:
          "Recurso indentificado pelo id: {{resourceId}} não possui uma ação com nome: {{actionName}} ou você não está autorizado a usá-la!",
        error404Record:
          "Recurso indentificado pelo id: {{resourceId}} não possui um registro com id: {{recordId}} ou você não está autorizado a acessá-lo!",
        seeConsoleForMore:
          "Veja o console de desenvolvimento para mais detalhes...",
        noActionComponent:
          "Você precisa implementar componente de ação para a sua Ação",
        noRecordsInResource: "Não existem registros neste recurso",
        noRecords: "Nenhum registro",
        confirmDelete:
          "Você tem certeza que deseja remover este item? Essa ação é irreversível",
        welcomeOnBoard_title: "Bem-vindo à bordo!",
        welcomeOnBoard_subtitle:
          "Agora você é um de nós! Preparamos algumas dicas para você começar:",
        addingResources_title: "Adicionando Recursos",
        addingResources_subtitle:
          "Como adicionar novos recursos à barra lateral",
        customizeResources_title: "Personalizar Recursos",
        customizeResources_subtitle:
          "Definindo comportamento, adicionando propriedades e mais...",
        customizeActions_title: "Personalizar Ações",
        customizeActions_subtitle:
          "Modificar ações existentes e adicionar novas",
        writeOwnComponents_title: "Escrever Componentes",
        writeOwnComponents_subtitle: "Como modificar o visual do AdminJS",
        customDashboard_title: "Dashboard Personalizado",
        customDashboard_subtitle:
          "Como modificar esta página e adicionar novas páginas à barra lateral",
        roleBasedAccess_title: "Controle de Acesso Baseado em Perfil",
        roleBasedAccess_subtitle:
          "Criar perfis de usuário e permissões no AdminJS",
        community_title: "Junte-se à comunidade Discord",
        community_subtitle:
          "Fale com os criadores do AdminJS e outros usuários do AdminJS",
        foundBug_title: "Encontrou um Bug? Precisa de alguma melhoria?",
        foundBug_subtitle: "Levante um issue em nosso repositório no GitHub",
        needMoreSolutions_title: "Precisa de mais soluções avançadas?",
        needMoreSolutions_subtitle:
          "Estamos aqui para te entregar um belo desenho de UX/UI e software feito sob medida baseado (não apenas) no AdminJS",
        invalidCredentials: "Nome de usuário e/ou senha incorretos",
        pageNotFound_title: "Página não encontrada",
        pageNotFound_subtitle:
          'Página <strong>"{{pageName}}"</strong> não existe',
        componentNotFound_title: "Nenhum componente especificado",
        componentNotFound_subtitle:
          "Você tem que especificar o componente que renderizará este elemento",
      },
    },
  },
};
