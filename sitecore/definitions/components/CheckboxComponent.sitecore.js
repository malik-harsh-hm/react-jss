// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the CheckboxComponent component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: 'CheckboxComponent',
    icon: SitecoreIcon.DocumentTag,
    fields: [ 
    { name: 'checked', type: CommonFieldTypes.Checkbox },
    { name: 'defaultChecked', type: CommonFieldTypes.Checkbox },
    { name: 'disabled', type: CommonFieldTypes.Checkbox },
    { name: 'disableRipple', type: CommonFieldTypes.Checkbox },
    { name: 'id', type: CommonFieldTypes.SingleLineText },
    { name: 'indeterminate', type: CommonFieldTypes.Checkbox },
    { name: 'required', type: CommonFieldTypes.Checkbox },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}