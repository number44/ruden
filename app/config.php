<?php
function geomat_init() {
     $blocks = array(
        
        // "ds-navbar",
        // "ds-container",
     );
    // get all directories in blocks folder
    $dirs = scandir(__DIR__ . '/blocks');
    foreach($dirs as $block) {
        register_block_type( __DIR__ . '/blocks/' .  $block .'/build' );
    }
 }
 add_action( 'init', 'geomat_init' );

 add_action('init', function() {
	remove_theme_support('core-block-patterns');
    unregister_block_pattern_category( 'posts' );
    unregister_block_pattern_category( 'call-to-action' );
});
