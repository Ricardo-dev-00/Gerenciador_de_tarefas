# Gerenciador de Tarefas (React Avançado EBAC)

Este projeto foi desenvolvido como parte do módulo "React avançado: hooks, performance e compartilhamento de dados" do curso da EBAC.

## Funcionalidades
- Adicionar, remover e marcar tarefas como concluídas
- Filtrar tarefas (todas, concluídas, pendentes)
- Persistência automática das tarefas no localStorage
- Interface responsiva e visual moderno
- Efeito de folha de caderno como background

## Tecnologias e conceitos aplicados
- **React 18**
- **Context API** para estado global
- **Hooks customizados** para reuso de lógica
- **useReducer** para controle de estado complexo
- **useMemo** e **React.memo** para performance
- **useEffect** para persistência no localStorage
- **CSS responsivo** e overlay customizado

## Como rodar o projeto
1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse em [http://localhost:5173](http://localhost:5173)

## Estrutura de pastas
```
├── src
│   ├── assets/img/back-folha.jpg
│   ├── components
│   ├── context
│   ├── hooks
│   ├── App.jsx
│   ├── index.css
│   ├── index.html
│   └── main.jsx
├── package.json
├── vite.config.mjs
└── README.md
```

## Prints
Adicione prints da aplicação funcionando para valorizar seu trabalho!

---

Desenvolvido para o curso EBAC | Módulo React Avançado
