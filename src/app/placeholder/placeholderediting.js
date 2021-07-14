import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import AttributeCommand from './attributecommand';

const PLACEHOLDER = 'placeholder';

export default class PlaceholderEditing extends Plugin {

  init() {
    const editor = this.editor;
    // Allow bold attribute on text nodes.
    editor.model.schema.extend('$text', { allowAttributes: PLACEHOLDER });


    editor.conversion.attributeToElement({
      model: PLACEHOLDER,
      view: 'placeholder',
      upcastAlso: [
        'placeholder',
        {
          styles: {
            'font-weight': 'bold',
            'color': 'red'
          }
        }
      ]
    });

    // Create bold command.
    editor.commands.add(PLACEHOLDER, new AttributeCommand(editor, PLACEHOLDER));
  }
}