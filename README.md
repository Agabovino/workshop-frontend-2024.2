INFORMAÇÕES DO PROJETO


1) page.jsx(home) 
    - Exibe todos os agentes. Inclui um campo de busca (Header), um carrossel e uma exibição dos agentes filtrados por nome.
    - A funcao filteredData filtra os agentes com base no texto de entrada do usuário, comparando o valor com displayName de cada agente. 
    -  O useEffect faz a requisição a API do Valorant para obter a lista de agentes e armazenar no estado data.

---

Componentes importantes:

I) AgentCard.jsx: 
   - recebe propriedades como name, classe, description, profile, e abilities e exibe um cartão com essa info. Classe esta em pt-br para evitar conflitos.

II) Header.jsx: 
    - Usado para o campo de entrada que atualiza o estado do filtro de busca na página principal

III) Carousel.jsx:
    -  O carrossel foi implementado sem bibliotecas externas e contém as informações básicas dos agentes, como name, profile, classe, e ícones das abilities. 

---

Layout e design:
   - incialmente tentei usar o TailWind, mas acabei usando apenas em algus testes e elementos chaves. Todo o css está em módulos na pasta Styles.
   - Por mais que o projeto não possua nenhuma media Queries, usei em todo css apenas unidades relativas, deixando o projeto "semi" responsivo para vários usuários.  


