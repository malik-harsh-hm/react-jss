// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the SvgIconComponent component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: 'SvgIconComponent',
    icon: SitecoreIcon.DocumentTag,
    fields: [ 
    { name: 'className', type: CommonFieldTypes.SingleLineText },
    { name: 'htmlColor', type: CommonFieldTypes.SingleLineText },
    { name: 'inheritViewBox', type: CommonFieldTypes.Checkbox },
    { name: 'shapeRendering', type: CommonFieldTypes.SingleLineText },
    { name: 'titleAccess', type: CommonFieldTypes.SingleLineText },
    { name: 'viewBox', type: CommonFieldTypes.SingleLineText },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}