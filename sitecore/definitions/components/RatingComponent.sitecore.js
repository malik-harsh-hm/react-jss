// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the RatingComponent component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: 'RatingComponent',
    icon: SitecoreIcon.DocumentTag,
    fields: [ 
    { name: 'className', type: CommonFieldTypes.SingleLineText },
    { name: 'defaultValue', type: CommonFieldTypes.Number },
    { name: 'disabled', type: CommonFieldTypes.Checkbox },
    { name: 'highlightSelectedOnly', type: CommonFieldTypes.Checkbox },
    { name: 'max', type: CommonFieldTypes.Number },
    { name: 'name', type: CommonFieldTypes.SingleLineText },
    { name: 'readOnly', type: CommonFieldTypes.Checkbox },
    { name: 'value', type: CommonFieldTypes.Number },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}