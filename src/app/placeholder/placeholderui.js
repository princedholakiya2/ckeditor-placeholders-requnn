import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

const PLACEHOLDER = 'placeholder';

export default class PlaceholderUI extends Plugin {

  init() {
    const editor = this.editor;
    const t = editor.t;

    // Add bold button to feature components.
    editor.ui.componentFactory.add(PLACEHOLDER, locale => {
      const command = editor.commands.get(PLACEHOLDER);
      const view = new ButtonView(locale);

      view.set({
        // label: t('Bold'),
        label: 'Placeholders',
        withText: true
      });

      view.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled');

      // Execute command.
      this.listenTo(view, 'execute', () => editor.execute(PLACEHOLDER));

      return view;
    });
  }
}