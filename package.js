Package.describe({
  name: 'em0ney:drop',
  version: '0.0.1',
  summary: 'Creating dropdowns and other popups attached to elements on the page',
  git: 'https://github.com/thesaucecode/meteor-drop.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'drop.js', 
    'drop-theme-arrows.css'
  ], 'client');


});
