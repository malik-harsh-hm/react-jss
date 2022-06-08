// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the StepComponent component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: 'StepComponent',
    icon: SitecoreIcon.DocumentTag,
    fields: [ 
    { name: 'active', type: CommonFieldTypes.Checkbox },
    { name: 'className', type: CommonFieldTypes.SingleLineText },
    { name: 'completed', type: CommonFieldTypes.Checkbox },
    { name: 'disabled', type: CommonFieldTypes.Checkbox },
    { name: 'expanded', type: CommonFieldTypes.Checkbox },
    { name: 'last', type: CommonFieldTypes.Checkbox },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}