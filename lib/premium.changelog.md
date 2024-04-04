# Change Log
All notable changes to this project will be documented in this file

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## 2.0.0
 - Change log missing

## 1.19.1
 - Change log missing

## 1.19.0-rc.3
### Fixed
 - FIO-5036: fixed an issue where sketchpad preview drawing sometimes does not display after switching between view and edit submission pages

## 1.19.0-rc.2
### Fixed
 - CDN test url if formio version contains RC.

## 1.19.0-rc.1
### Added
 - FIO-4418: Enable API Driven Data Tables
 - FIO-4357: Combine the background and the drawing in read-only mode (including PDFs)

### Fixed
 - UIP-313: Fixes logic with action to change 'hidden' component property not working

### Changed
 - Upgrade dayjs@1.10.7, @types/sinon@10.0.10, chai@4.3.6, ts-sinon@2.0.2, vanilla-picker@2.12.1, @types/chai@4.3.0, @types/mocha@9.1.0, ts-node@10.4.0, webpack@5.68.0, webpack-cli@4.9.2

## 1.18.0-rc.2
### Added
 - FIO-4417: Add Transforms to DataSource Component
 - FIO-4539: Fixes portal app crushed in ie11

## 1.18.0-rc.1
### Changed
 - Changes for ACC 0.6.0

### Added
 - Adding XML, CSV, and JSON file parsers for the file upload component.

### Fixed
 - FIO-3983: Scrollbar is causing column value to not show the full value
 - FIO-4415: Data Table: Controls in a layout control does not show in table view
 - FIO-4437: disable SignRequest component

## 1.17.2-rc.2
### Fixed
 - FIO-4339: Fixes editing submissions with signrequest component on them

## 1.17.2-rc.1
### Changed
 - add SignRequestSignature component
 - refactor signrequest

## 1.17.1
### Changed
 - Official Release

## 1.17.1-rc.1
### Fixed
 - Some issues with Sign Request.
 - A crash issue with Data Table.

## 1.17.0
### Changed
 - Official Release

## 1.17.0-rc.17
### Fixed
 - FIO-3940: fixed an issue where only the last one tagpad component works correctly when there are more than one tagpad in a webform
 - FIO-2860: refactor signrequest

## 1.17.0-rc.16
### Fixed
 - FIO-3934: Changing the circle size on Sketchpad
 - FIO-4000: Browser stops responding when drop components inside the Data Table

## 1.17.0-rc.14
### Fixed
 - DataTable: fix conditionals and logic

### Changed
 - FIO-3616: next generation rules update

## 1.17.0-rc.13
### Fixed
 - FIO-3231, FIO-3628, FIO-3629: DataTable Inline editing

## 1.17.0-rc.12
### Fixed
 - Bring back data table compoenent.

## 1.17.0-rc.11
### Fixed
 - FIO-3409, FIO-3068, FIO-3076, FIO-3077, FIO-3080, FIO-3061, FIO-3231: Data Table fixes.

## 1.17.0-rc.10
### Fixed
 - FIO-3224: Enable ability to raise events from the grid

### Changed
 - Upgrade formiojs@4.14.0-rc.12

## 1.17.0-rc.9
### Fixed
 - FIO-3065, FIO-3051, FIO-3057, FIO-3241, FIO-3045, FIO-3063, FIO-3075, FIO-3238, FIO-3079, FIO-3078, FIO-3060 and FIO-3056: Data Table Issues
 - FIO-2673: Added more tests.

## 1.17.0-rc.8
### Fixed
 - FIO-3010: remove unique validation setting from Dynamic Wizard
 - FIO-3023: fix Dynamic Wizard 'Minimum Length' and 'Maximum Length' settings
 - FIO-3008: fix no components display on the page with DW in edit mode while clicking on the error in the Error list
 - FIO-3098: Data Table | Fix formatting
 - FIO-1317: Migrated NextGen Rules Engine from 5.x to the separated premium module.
 - FIO-3088: fixed an issue where fetched data is never set when DataSource is inside a nested form
 - FIO-3008: add test for no components display on the page with DW in edit mode while clicking on the error in the Error list
 - FIO-3023: fix conditional visibility of Dynamic Wizard with 'Minimum Length' and 'Maximum Length' settings

## 1.17.0-rc.7
### Fixed
 - FIO-3044: Data Table | Unable to make an update when I edit a submission

## 1.17.0-rc.6
### Fixed
 - FIO-3048 | FIO-3049 | FIO-3066: Fix Data Table to work properly with Wizard, Selected Boxes and Address

## 1.17.0-rc.5
### Fixed
 - FIO-1504: Data Table | Column ordering | Values formatting | Improve Filtering
## 1.16.4-rc.1
### Fixed
 - FIO-2907: Added alt text to sketchpad images

## 1.16.3
### Changed
 - No changes. Released 1.16.3-rc.2 as official release.

## 1.16.3-rc.2
### Changed
 - Upgrade formiojs@4.13.3-rc.7

## 1.16.3-rc.1
### Fixed
 - FIO-3088: fixed an issue where fetched data is never set when DataSource is inside a nested form

## 1.16.2
### Changed
 - No changes. Released 1.16.2-rc.1 as official release.
 - Upgrade formiojs@4.13.2

## 1.16.2-rc.1
### Changed
 - All master changes with datatable removed.

## 1.17.0-rc.4
### Changed
 - FIO-1504: Data Table | Column ordering
 - FIO-2553: add test for DynamicWizard

### Fixed
 - FIO-2710: Fix sketchpad image size in modal window

## 1.17.0-rc.3
### Changed
 - FIO-1504: Data Table | Add remove all

## 1.17.0-rc.2

## 1.16.1
### Changed
 - No changes. Released 1.16.1-rc.6 as official release.

## 1.16.1-rc.6
### Fixed
 - FIO-2913: exclude cases when the root can be undefined

## 1.16.1-rc.5
### Fixed
 - fix editMode setting in projects
 - FIO-2908: fix form submission with Sketcpad inside EditGrid and Dynamic Wizard.

## 1.16.1-rc.4
### Fixed
 - FIO-2881: move DynamicWizard display logic to the render method to avoid problems with filling Selects

## 1.16.1-rc.3
### Changed
 - Included all latest changes on "master" branch except DataTable component.

## 1.16.1-rc.1
### Fixed
 - FIO-2701: Fixes an issue where all the rows of Dynamic Wizard are deleted when reset value
 - FIO-2692: do not call observe for cases when the Tagpad is hidden on the summary page when submitting
 - FIO-2738: fix changingMode setting for the DynamicWizard
 - FIO-2747: replace hook for correct work of nested forms

### Changed
 - Upgrade formiojs@4.13.2-rc.2

## 1.16.0
### Changed
 - Upgrade formiojs@4.13.0

## 1.16.0-rc.11
### Fixed
 - FIO-2692: fix attachComponents call of last component on save

### Changed
 - Upgrade formiojs@4.13.0-rc.28

## 1.16.0-rc.10
### Fixed
 - FIO-2690-2698: fix focusing for DynamicWizard
 - FIO-2679: Fixes an issue when the DataSource component was made several requests instead of one.
 - FIO-2701: Fixes an issue where after resetting DynamicWizrad value, an error appears
 - FIO-2699: fix display of a disabled DynamicWizard after its appearance by condition
 - FIO-1269: dynamic wizard json template minifying fix
 - FIO-2702: fix DynamicWizard display when there are no components inside

### Changed
 - Upgrade formiojs@4.13.0-rc.27

## 1.16.0-rc.9
### Fixed
 - FIO-2673: fix root search for wizards nested in the webform

### Changed
 - Upgrade formiojs@4.13.0-rc.26

## 1.16.0-rc.8
### Fixed
 - Fix cancel line changes while editing
 - FIO-2553: add circleci config and tests for dynamicWizard

## 1.16.0-rc.7
### Changed
 - Updated formiojs@4.13.0-rc.24

## 1.16.0-rc.6
### Fixed
 - FIO-2635: fix focusing on fields for pages with DynamicWizard

### Changed
 - Upgrade dependencies.

## 1.16.0-rc.5
### Fixed
 - FIO-1393:: Fixes an issue where Dynamic Wizard tooltips are rendered wrongly
 - FIO-2636: Fixes an issue where Tagpad's data preview maps values to the wrong labels.
 - FIO-1554: hide edit and delete buttons after disabling in the Dynamic Wizard component
 - FIO-2629: fix intermediate save in the DynamicWizard and errors in console.

## 1.16.0-rc.4
### Fixed
 - FIO-2585: Sketchpad doesn't work with SVG
 - FIO-2548: Tagpad changes

## 1.16.0-rc.3
### Fixed
 - Fix/dynamic wizard inside nested wizard
 - FIO-2497: fixed an issue where values for invisible components display in dynamic wizard row summary
 - FIO-1555: fixed an issue where unique validation error does not appear for components inside dynamic wizard and it is not possible to navigate to a component with error from the wizard errors` alert
 - FIO-1544: fixed an issue where dynamic wizard data is not fully saved after resetting parent wizard
 - FIO-1557, FIO-1554: Dynamic Wizard fixes
 - FIO-1349: Fixes an issue when DataSource component got Uncaught (in promise) error with bad response from the server.
 - FIO-1454: Tagpad: add option to specify custom dot label
 - FJS-1461: Fixes an issue where it is possible to Cancel Wizard form in readOnly mode

## 1.16.0-rc.2
### Fixed
 - FIO-1258: fix hiding the panel using the logic on which the DynamicWizard
 - FIO-1257: fix dynamically applying logic inside the current row
 - PDF-148: Tag Pad circles and Sketchpad drawings are not showing correctly

## 1.16.0-rc.1
### Changed
 - Linking 1.16.x to 4.13.x renderer.

### Fixed
 - FJS-1445: Fixed issues with Sketchpad, when the image size is set up automatically or manually

## 1.15.5-rc.1
### Fixed
 - FIO-1258: fix hiding the panel using the logic on which the DynamicWizard
 - FIO-1257: fix dynamically applying logic inside the current row

## 1.15.4
### Changed
 - Upgrade formiojs@4.12.7

## 1.15.4-rc.3
### Fixed
 - FIO-1258: fix validations for the DynamicWizard
 - FJS-1445: Fixed issues with Sketchpad, when the image size is set up automatically or manually
 - Upgrade formiojs@4.12.7-rc.2

## 1.15.4-rc.2
### Fixed
 - FJS-1402: Fixes issues with Tagpad, where it cause console errors, unexpected validation errors or does not save data properly
 - Displaying the DynamicWizard component when it is on the first page.
 - Upgrade formiojs@4.12.7-rc.1

## 1.15.4-rc.1
### Changed
 - Bad release where we pulled in 4.13.x without upgrading 1.16.x

## 1.15.3
### Fixed
 - FJS-1412: Changes a table view of Sketchpad's data to '[Complex Data]'

### Changed
 - Upgrade formiojs@4.12.4

## 1.15.3-rc.1
### Changed
 - Upgrade formiojs@4.12.4-rc.2

## 1.15.2
### Fixed
 - Fixes for the DynamicWizard component

### Changed
 - Upgrade formiojs@4.12.2

## 1.15.2-rc.4
### Changed
 - Upgrade formiojs@4.12.2-rc.8

## 1.15.2-rc.3
### Changed
 - Upgrade formiojs@4.12.2-rc.6

## 1.15.2-rc.2
### Fixed
 - FJS-1447: Fixes an issue where dots values are shown on the next line in preview

### Changed
 - Upgrade formiojs@4.12.2-rc.5

## 1.15.2-rc.1
### Fixed
 - FJS-1446: Fixes an issue where Sketchpad's data is not saved on the server
 - FJS-1235: Makes Sketchpad component fit the window's size when it set to autoSize
### Added
 - [Feat]: Adds ability to disallow caching DataSource requests
### Changed
 - Upgrade formiojs@4.12.2-rc.3

## 1.15.1
### Changed
 - Upgrade formiojs@4.12.1

## 1.15.1-rc.16
### Changed
 - Upgrade formiojs@4.12.1-rc.28

## 1.15.1-rc.15
### Fixed
 - FOR-2699: now passing groupId and groupPermissions to file upload
 - FJS-1352: fix button actions for the DynamicWizard component in IE

### Changed
 - Upgrade formiojs@4.12.1-rc.26

## 1.15.1-rc.14
### Fixed
 - FJS-1400: Fixes an issue where Width and Height options don't affect Tagpad's size
 - FJS-1421: fix the DynamicWizard component display logic

### Changed
 - Upgrade formiojs@4.12.1-rc.25

## 1.15.1-rc.13
### Fixed
 - FJS-1347: ignore modalEdit for the DynamicWizard component
 - FJS-1353: fix Logic for the DynamicWizard component

## 1.15.1-rc.12
### Fixed
 - FJS-1353: fix Logic for the DynamicWizard component
 - FJS-1362: fix attachComponents method for the DynamicWizard component
 - FJS-1399: Fixes an issue where modal cannot be opened when Sketchpad has defaultValue
 - Fix: fixes for the DynamicWizard component

### Added
 - Adding a refresh on event for the Data Source component.

## 1.15.1-rc.11
### Fixed
 - FJS-1351: fix validations for the DynamicWizard component
 - FJS-1377: remove 'No' option from the DynamicWizard
 - FJS-1355: add disableSiblings flag for the DynamicWizard
 - FJS-1348: remove the DynamicWizard component from the Webform builder
 - FJS-1360: make the row template for the DynamicWizard component more customizable
 - FJS-1374: Fixes an issue where Tagpad breaks when the component was not found in getComponent

### Changed
 - Upgrade formiojs@4.12.1-rc.19

## 1.15.1-rc.10
### Changed
 - Upgrade formiojs@4.12.1-rc.18
 - Reduced build size by using lodash from formiojs, and also including directly from root formiojs.

### Fixed
 - Fixes an issue where refresh on blur does not work in there are no components with Blur validation
 - FJS-1336, FJS-1337: Created custom build for using on the server
 - Fixes for DynamicWizard display
 - FJS-1346-1358: fix editForm for DynamicWizard

## 1.15.1-rc.9
### Changed
 - FJS-1313: Fixes an issue when Submit the form without unfolding the Panels incдude the Scetchpad was failed.
 - Fixed an issue where coordinates are incorrect on touch event when Sketchpad is inside collapsible Panel
 - FJS-1116: fixes for the DynamicWizard component
 - FJS-1325, FJS-1235: Fixed an issue where image is greater than window height and issue where image has 0x0 size when in the 2nd Tab

## 1.15.1-rc.8
### Changed
 - Upgrade formiojs@4.12.1-rc.14
### Fixed
 - FJS-1116: fix DynamicWizard component display

## 1.15.1-rc.7
### Changed
 - Upgrade formiojs@4.12.1-rc.10
### Fixed
 - FJS-1196: added Refresh on Component Blur option to DataSource

## 1.15.1-rc.6
### Changed
 - Upgrade formiojs@4.12.1-rc.9

## 1.15.1-rc.5
### Changed
 - Upgrade formiojs@4.12.1-rc.8

## 1.15.1-rc.4
### Changed
 - Upgrade formiojs@4.12.1-rc.8
### Changed
 - PDF-148: Rescale submission dots for different resolutions
 - FJS-1116: add AddWizardPage component

## 1.15.1-rc.3
### Changed
 - Upgrade formiojs@4.12.1-rc.7

## 1.15.1-rc.2
### Changed
 - Upgrade formiojs@4.12.1-rc.5

## 1.15.1-rc.3
### Changed
 - Upgrade formiojs@4.12.1-rc.4
### Fixed
 - FJS-1235: Fixes multiple issues with scaling/added autoSize option
 - FJS-1122: fixes an issue where very long strings make tagpad look weird on View tab

## 1.15.0
### Changed
 - Upgrade formiojs@4.12.0


## 1.15.0-rc.12
### Changed
 - Upgrade formiojs@4.12.0-rc.19


## 1.15.0-rc.11
### Fixed
- Upgrade formio.js@4.12.0-rc.18


## 1.15.0-rc.10
### Fixed
 - Include resize-observer-polyfill as a dependency.

## 1.15.0-rc.9
### Fixed
- Upgrade formio.js@4.12.0-rc.16

## 1.15.0-rc.8
### Fixed
 - FJS-1204: DataSource - 'Form Int' is not triggering data source unless you refresh browser
 - Upgrade formio.js@4.12.0-rc.15

## 1.15.0-rc.7
### Fixed
- Upgrade formio.js@4.12.0-rc.14

## 1.15.0-rc.6
### Fixed
- Upgrade formio.js@4.12.0-rc.13

## 1.15.0-rc.5
### Fixed
- Upgrade formio.js@4.12.0-rc.11

## 1.15.0-rc.4
### Fixed
- Upgrade formio.js@4.12.0-rc.10

## 1.15.0-rc.3
### Fixed
- Upgrade formio.js@4.12.0-rc.5

## 1.15.0-rc.2
### Fixed
- Upgrade formio.js@4.12.0-rc.4

## 1.15.0-rc.1
### Fixed
 - FJS-1094 (Addatech): Fixes an issue where a Tag Pad inside of Tabs is not showing dots at the correct coordinates
 - Upgrade formio.js@4.12.0-rc.4

### Changed
 - FJS-1067: Adds the feature to DataSource component where the post body can be specified
 - Dots template feature improvement

## 1.14.2-rc.8
### Changed
 - Upgrade formio.js@4.11.2-rc.5

## 1.14.2-rc.7
### Changed
 - Upgrade formio.js@4.11.2-rc.4

## 1.14.2-rc.6
### Changed
 - Upgrade formio.js@4.11.2-rc.4

## 1.14.2-rc.5
### Changed
 - Upgrade formio.js@4.11.2-rc.2

## 1.14.2-rc.4
### Changed
 - Upgrade formio.js@4.11.2-rc.1

## 1.14.2-rc.3
### Changed
 - Upgrade formio.js@4.11.2-rc.1

## 1.14.2-rc.2
### Changed
 - Upgrade formio.js@4.11.2-rc.1

## 1.14.2-rc.1
### Changed
 - Upgrade formio.js@4.11.2-rc.1

## 1.14.1
### Changed
 - Upgrade formio.js@4.11.1

## 1.14.1-rc.5
### Changed
 - Upgrade formio.js@4.11.1-rc.9

## 1.14.1-rc.4
### Changed
 - Upgrade formio.js@4.11.1-rc.8

## 1.14.1-rc.3
### Changed
 - Upgrade formio.js@4.11.1-rc.6

## 1.14.1-rc.2
### Changed
 - Upgrade formio.js@4.11.1-rc.3

## 1.14.1-rc.1
### Changed
 - Upgrade formio.js@4.11.1-rc.1

## 1.14.0
### Changed
 - Upgrade formio.js@4.11.0

## 1.13.6
### Fixed
 - FJS-1017-C: fixed dataSource dependant fields data display in readOnly and edit mode
 - FJS-1030: fixed sketchpad data display on large image in view and edit tab
 - FJS-1030: fixed sketchpad losing data when closing the modal using cancel btn

## 1.13.5
### Changed
 - Upgrade formio.js@4.10.5

## 1.13.5-rc.7
### Changed
 - Upgrade formio.js@4.10.5-rc.5

## 1.13.5-rc.6
### Changed
 - Upgrade formio.js@4.10.5-rc.4

## 1.13.3
### Changed
 - FJS-962: prevented getting data from data source in readOnly
 - LN 574 - Extended Data Source component to populate it with data from indexeddb
 - Setting formio.js to 4.10.2 and moving to devDependencies and peerDependencies.

## 1.13.3-rc.7
### Changed
 - Upgrade formio.js@4.10.3-rc.6

## 1.13.3-rc.6
### Changed
 - Upgrade formio.js@4.10.3-rc.5

## 1.13.3-rc.5
### Changed
 - Upgrade formio.js@4.10.3-rc.4

## 1.13.3-rc.4
### Changed
 - Upgrade formio.js@4.10.3-rc.3

## 1.13.3-rc.1
### Changed
 - Upgrade formio.js@4.10.3-rc.1

## 1.13.2
### Changed
 - Upgrade formio.js@4.10.2

## 1.13.0
### Changed
 - Upgrade formio.js@4.10.0

## 1.13.0-rc.6
### Changed
 - Upgrade formio.js@4.10.0-rc.13

## 1.13.0-rc.5
### Changed
 - Upgrade formio.js@4.10.0-rc.12

## 1.13.0-rc.4
### Changed
 - Upgrade formio.js@4.10.0-rc.11

## 1.13.0-rc.3
### Fixed
 - Fixed export for storage providers.

### Added
 - Added support for email templates

## 1.12.7
### Fixed
 - Fixed tagpad submission/editing/data display inside dataGrid/editGrid

## 1.12.6
### Fixed
 - Fixed conditional logic does not work wth Sketchpad

## 1.12.5
### Changed
 - Add dot value template
 - Fixed displaying tagpad's data in pdf documents
 - Fixed displaying sketchpad data in pdf

## 1.12.4
### Changed
 - Removed CodeReader from export since it breaks IE11.

## 1.12.1 - 1.12.3
### Fixed
 - Export and dependency problems that keep templates from loading.

## 1.12.0
### Fixed
 - Template problem with Sketchpad.

### Added
 - Added info about the dot containing an error to the validation errors alert

## 1.11.0
### Fixed
 - Fixed dots are not shown in view/dot form is not shown in edit
 - Fixed sketchpad toolbar styles

### Added
 - Code reader

## 1.10.0
### Fixed
 - Formio.js importing issues when using library as distribution.
 - Sketchpad: Fixed label is not hidden in modal preview with hideLabel setting
 - Sketchpad + Tagpad: Fixed drawing is shown as an overlay when the modal closed
 - Sketchpad: Fixed redo on the very first drawn element
 - Sketchpad + Tagpad: Fixed edit forms

### Changed
 - Upgrade formio.js@4.9.16

## 1.9.0
### Changed
 - Upgrade formio.js@4.9.12
 - Adding premium.css to dist folder.

## 1.8.0
### Fixed
 - IE issues with the Sketchpad and Tagpad features.
 - Upgrade formiojs@4.9.11

## 1.7.0
### Fixed
 - Directory names to be the correct casing.

## 1.5.0
### Fixed
 - Bugs in build process for sketchpad and tagpad.

## 1.4.0
### Something

## 1.3.0
### Added
 - Sketchpad
 - Tagpad

## 1.2.3
### Changed
 - Upgrade formio.js to 4.9.0-rc.3
 - Security upgrades

## 1.2.0
### Changed
 - Upgrade formio.js to 4.8.0-rc.1

### Added
 - Option to forward headers with the DataSource component.
 -

## 1.1.0
### Changed
 - Fixed the builds to work with IE11.

## 1.0.3
### Changed
 - Datasource group changed to premium.

## 1.0.2
### Added
 - Readme.

## 1.0.1
### Changed
 - Build process to output es5

### Added
 - Webpack build for direct embedding.

## 1.0.0
### Added
 - Initial release
