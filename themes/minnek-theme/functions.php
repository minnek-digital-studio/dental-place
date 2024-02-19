<?php
/**
 * Functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package mnk
 */


if ( ! defined( 'MNK_VERSION' ) ) {
    define( 'MNK_VERSION', '1.0.0' );
}

require get_template_directory() . '/includes/custom-header.php';
require get_template_directory() . '/includes/template-tags.php';
require get_template_directory() . '/includes/template-functions.php';
require get_template_directory() . '/includes/customizer.php';

add_action( 'after_setup_theme', 'mnk_theme_setup' );
add_action( 'after_setup_theme', 'mnk_content_width', 0 );
add_action( 'after_setup_theme', 'mnk_custom_header_setup' );
add_action( 'widgets_init', 'mnk_widgets_init' );
add_action( 'wp_enqueue_scripts', 'mnk_theme_scripts' );
add_action( 'customize_register', 'mnk_customize_register' );
add_action( 'customize_preview_init', 'mnk_customize_preview_js' );
add_action( 'wp_head', 'mnk_pingback_header' );

add_filter( 'body_class', 'mnk_body_classes' );

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function mnk_theme_setup() {
    /**
     * Make theme available for translation.
     * Translations can be filed in the /languages/ directory.
     */
    load_theme_textdomain( 'mnk', get_template_directory() . '/languages' );

    // Add default posts and comments RSS feed links to head.
    add_theme_support( 'automatic-feed-links' );

    /**
     * Let WordPress manage the document title.
     * By adding theme support, we declare that this theme does not use a
     * hard-coded <title> tag in the document head, and expect WordPress to
     * provide it for us.
     */
    add_theme_support( 'title-tag' );

    /**
     * Enable support for Post Thumbnails on posts and pages.
     *
     * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
     */
    add_theme_support( 'post-thumbnails' );

    // This theme uses wp_nav_menu() in one location.
    register_nav_menus(
        array(
            'menu-1' => esc_html__( 'Primar Menu', 'mnk' ),
        )
    );

    /**
     * Switch default core markup for search form, comment form, and comments
     * to output valid HTML5.
     */
    add_theme_support(
        'html5',
        array(
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
            'style',
            'script',
        )
    );

    // Set up the WordPress core custom background feature.
    add_theme_support(
        'custom-background',
        apply_filters(
            'mnk_custom_background_args',
            array(
                'default-color' => 'ffffff',
                'default-image' => '',
            )
        )
    );

    // Add theme support for selective refresh for widgets.
    add_theme_support( 'customize-selective-refresh-widgets' );

    /**
     * Add support for core custom logo.
     *
     * @link https://codex.wordpress.org/Theme_Logo
     */
    add_theme_support(
        'custom-logo',
        array(
            'height'      => 250,
            'width'       => 250,
            'flex-width'  => true,
            'flex-height' => true,
        )
    );
}

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function mnk_content_width() {
    $GLOBALS['content_width'] = apply_filters( 'mnk_content_width', 640 );
}

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function mnk_widgets_init() {
    register_sidebar(
        array(
            'name'          => esc_html__( 'Sidebar', 'mnk' ),
            'id'            => 'sidebar-1',
            'description'   => esc_html__( 'Add widgets here.', 'mnk' ),
            'before_widget' => '<section id="%1$s" class="widget %2$s">',
            'after_widget'  => '</section>',
            'before_title'  => '<h2 class="widget-title">',
            'after_title'   => '</h2>',
        )
    );
}

/**
 * Enqueue scripts and styles.
 */
function mnk_theme_scripts() {
    wp_enqueue_style(
        'theme-styles',
        get_template_directory_uri() . '/assets/css/theme.css',
        array(),
        MNK_VERSION,
        false
    );

    wp_enqueue_script(
        'theme-scripts',
        get_template_directory_uri() . '/assets/js/main.js',
        array(),
        MNK_VERSION,
        true
    );

    wp_enqueue_script(
        'theme-navigation',
        get_template_directory_uri() . '/assets/js/navigation.js',
        array(),
        MNK_VERSION,
        true
    );

    if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
        wp_enqueue_script( 'comment-reply' );
    }
}
