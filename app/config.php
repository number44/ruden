
<?php

/**
 * Blocks
 * @return void
 */
 function lesio_blocks_init() {
    $blocks = array(
        // "Static/lesio-image",
        // "Static/lesio-navbar",
        // "Static/lesio-social",
        // "Dynamic/pages-links",
         // "Static/promo-one",
        // "Static/promo-two",
        // "Static/promo-three",		
        // "Static/promo-four",
    );
        foreach($blocks as $block) {
            register_block_type( __DIR__ . '/Blocks/' .  $block .'/build' );
        }
 }
 add_action( 'init', 'lesio_blocks_init' );

 /**
  * Crud
  */

/**
 * getUsersName
 */

//add_action( 'init', 'myplugin_register_template' );
 

