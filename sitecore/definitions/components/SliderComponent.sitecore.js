// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the SliderComponent component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: 'SliderComponent',
    icon: SitecoreIcon.DocumentTag,
    fields: [ 
    { name: 'arialabelledby', type: CommonFieldTypes.SingleLineText },
    { name: 'disabled', type: CommonFieldTypes.Checkbox },
    { name: 'disableSwap', type: CommonFieldTypes.Checkbox },
    { name: 'isRtl', type: CommonFieldTypes.Checkbox },
    { name: 'max', type: CommonFieldTypes.Number },
    { name: 'min', type: CommonFieldTypes.Number },
    { name: 'name', type: CommonFieldTypes.SingleLineText },
    { name: 'step', type: CommonFieldTypes.Number },
    { name: 'tabIndex', type: CommonFieldTypes.Number },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}