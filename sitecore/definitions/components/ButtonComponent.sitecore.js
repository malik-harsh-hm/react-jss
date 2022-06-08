// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the ButtonComponent component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: 'ButtonComponent',
    icon: SitecoreIcon.DocumentTag,
    fields: [ 
    { name: 'className', type: CommonFieldTypes.SingleLineText },
    { name: 'disabled', type: CommonFieldTypes.Checkbox },
    { name: 'disableElevation', type: CommonFieldTypes.Checkbox },
    { name: 'disableFocusRipple', type: CommonFieldTypes.Checkbox },
    { name: 'disableRipple', type: CommonFieldTypes.Checkbox },
    { name: 'focusVisibleClassName', type: CommonFieldTypes.SingleLineText },
    { name: 'fullWidth', type: CommonFieldTypes.Checkbox },
    { name: 'href', type: CommonFieldTypes.SingleLineText },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}