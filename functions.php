 <?php 
  require_once dirname(__FILE__) . "/app/config.php";
  require_once dirname(__FILE__) . "/vendor/autoload.php";
if(!function_exists("lesio_theme_support")) :
    function lesio_theme_support(){
        add_theme_support( "wp-block-styles" );
        add_editor_style( "style.css" );
    }

endif;
add_action( "after_setup_theme","lesio_theme_support");

/** Scripts and styles */
if(!function_exists("lesio_scripts_and_styles")) :

function lesio_scripts_and_styles(){

    $jsonString = file_get_contents(get_template_directory_uri() . '/dist/manifest.json');
    $data = json_decode($jsonString, true);
    $jsScript = $data["index.html"]["file"];
    $cssScript = $data["index.css"]["file"];

    wp_enqueue_style( "lesio-style", get_stylesheet_uri(  ), array(),wp_get_theme()->get("Version") );
    wp_enqueue_style( "lesio-style-block", get_template_directory_uri() . '/dist/' . $cssScript );
    wp_enqueue_script(
        'lesio-scripts', // Script handle
        get_template_directory_uri() . '/dist/' . $jsScript, // Script source
        array(), // Dependencies
        '1.0', // Script version
        true // Load script in footer
    );


}
endif;
add_action(  "wp_enqueue_scripts", "lesio_scripts_and_styles" );

 if(!function_exists("lesio_enqueue_editor_assets")):
 function lesio_enqueue_editor_assets() {
     $jsonString = file_get_contents(get_template_directory_uri() . '/dist/manifest.json');
     $data = json_decode($jsonString, true);
     $cssScript = $data["index.css"]["file"];

     wp_enqueue_script(
         'lesio-editor-script', // Script handle
         get_template_directory_uri() . '/assets/js/block.js'  , // Script source
         array(), // Dependencies
         '1.0', // Script version
         true // Load script in footer
     );
 }
 endif;
//  add_action( 'enqueue_block_editor_assets', 'lesio_enqueue_editor_assets' );
 add_theme_support("align-wide");


 if(!function_exists("disable_default_block_patterns")):
 function disable_default_block_patterns() {
 }
 endif;
 add_action( 'init', 'disable_default_block_patterns' );

//  if(!function_exists("enqueue_block_scripts")) :
//     function enqueue_block_scripts() {
//         wp_enqueue_script(
//           'my-paragraph-block',
//           get_template_directory_uri() . '/blocks/my-paragraph.js',
//           array('wp-blocks', 'wp-components', 'wp-element', 'wp-editor'),
//           filemtime(get_template_directory() . '/blocks/my-paragraph.js')
//         );
//       }
// endif; -->