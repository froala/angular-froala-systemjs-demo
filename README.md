# Angular Froala SystemJS - Demo
A quick starter to use angular-froala-wysiwyg with SystemJS

#### Add angular-froala-wysiwyg

- install `angular-froala-wysiwyg`

```bash
npm install angular-froala-wysiwyg --save
```

- open `src/index.html` and add

```html
<link rel="stylesheet" href="node_modules/froala-editor/css/froala_editor.pkgd.min.css">
<link rel="stylesheet" href="node_modules/froala-editor/css/froala_style.min.css">
```

- open `src/app/app.module.ts` and add

```typescript
// Import all Froala Editor plugins.
// import 'froala-editor/js/plugins.pkgd.min.js';

// Import a single Froala Editor plugin.
// import 'froala-editor/js/plugins/align.min.js';

// Import a Froala Editor language file.
// import 'froala-editor/js/languages/de.js';

// Import Angular2 plugin.
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
...

@NgModule({
   ...
   imports: [FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(), ... ],
   ...
})
```

- open `src/app/app.component.ts` file and add to the template

```html
<div [froalaEditor]>Hello, Froala!</div>
```

- 

#### Run app

```bash
npm run start
```
