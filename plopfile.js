module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'src/templates/Component.tsx.tmpl',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'src/templates/Component.test.tsx.tmpl',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.module.scss',
        templateFile: 'src/templates/Component.module.scss.tmpl',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.story.tsx',
        templateFile: 'src/templates/Component.story.tsx.tmpl',
      },
    ],
  })
  plop.setGenerator('style', {
    description: 'Create a style',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the style?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/styles/{{name}}.scss',
        templateFile: 'src/templates/Style.scss.tmpl',
      },
    ],
  })
}
