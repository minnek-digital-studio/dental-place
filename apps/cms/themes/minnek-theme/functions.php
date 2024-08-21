<?php
if (!defined('MNK_VERSION')) {
    define( 'MNK_VERSION', '1.0.0' );
}

if (!defined('REDIRECT_URL')) {
    define( 'REDIRECT_URL', 'https://www.minnekdigital.com' );
}

if (!function_exists('a_custom_redirect') ) {
    function a_custom_redirect() {
        header("Location: ", REDIRECT_URL);
        die();
    }
}

if (!function_exists('a_theme_setup') ) {
    function a_theme_setup() {
        add_theme_support( 'post-thumbnails' );
    }
    add_action( 'after_setup_theme', 'a_theme_setup' );
}

// esto viene de un plugin de pago
if(class_exists('ACF')) {
    if (function_exists('acf_add_options_page')) {
        $page = acf_add_options_page(array(
            'page_title'    => 'Website Settings',
            'menu_title'    => 'Website Settings',
            'menu_slug'     => 'website-settings',
            'capability'    => 'edit_posts',
            'redirect'      => true
        ));

        $sub_page = acf_add_options_sub_page(array(
            'page_title'    => 'General Settings',
            'menu_title'    => 'General',
            'parent_slug'   => 'website-settings',
        ));

        acf_add_options_page(array(
            'page_title'    => 'Blocks',
            'menu_title'    => 'Blocks',
            'menu_slug'     => 'blocks',
            'capability'    => 'edit_posts',
            'redirect'      => true
        ));

        acf_add_options_sub_page(array(
            'page_title'   => 'Header',
            'menu_title'   => 'Header',
            'parent_slug'  => 'blocks',
        ));

        acf_add_options_sub_page(array(
            'page_title'   => 'Footer',
            'menu_title'   => 'Footer',
            'parent_slug'  => 'blocks',
        ));

        acf_add_options_sub_page(array(
            'page_title'   => 'Cookies',
            'menu_title'   => 'Cookies',
            'parent_slug'  => 'blocks',
        ));

        acf_add_options_sub_page(array(
            'page_title'   => 'About',
            'menu_title'   => 'About',
            'parent_slug'  => 'blocks',
        ));

    }
}

if(!function_exists('a_mime_types')) {
    function a_mime_types($mimes) {
        $mimes['svg'] = 'image/svg+xml';
        return $mimes;
    }
    add_filter('upload_mimes', 'a_mime_types');
}

if (!function_exists('a_add_image_size')) {
    function a_add_image_size() {
        add_image_size('custom-medium', 300, 9999);
        add_image_size('custom-tablet', 600, 9999);
        add_image_size('custom-large', 1200, 9999);
        add_image_size('custom-large-crop', 1200, 1200, true);
        add_image_size('custom-desktop', 1600, 9999);
        add_image_size('custom-full', 2560, 9999);
    }
    add_action('after_setup_theme', 'a_add_image_size');
}

if (!function_exists('a_custom_image_size_names')) {
    function a_custom_image_size_names($sizes) {
        return array_merge($sizes, array(
            'custom-medium' => __('Custom Medium', 'mnk'),
            'custom-tablet' => __('Custom Tablet', 'mnk'),
            'custom-large' => __('Custom Large', 'mnk'),
            'custom-large-crop' => __('Custom Large Crop', 'mnk'),
            'custom-desktop' => __('Custom Desktop', 'mnk'),
            'custom-full' => __('Custom Full', 'mnk')
        ));
    }
    add_filter('image_size_names_choose', 'a_custom_image_size_names');
}

add_filter('use_block_editor_for_post', '__return_false', 10);
add_filter('use_block_editor_for_post_type', '__return_false', 10);

if (!function_exists('a_custom_navigation_menus')) {
    function a_custom_navigation_menus() {
        $locations = array(
            'header_menu' => __('Header Menu', 'mnk'),
            'footer_menu' => __('Footer Menu', 'mnk'),
        );
        register_nav_menus($locations);
    }
    add_action('init', 'a_custom_navigation_menus');
}

// if (!function_exists('a_register_custom_post_types')) {
//     function a_register_custom_post_types() {
//         $singular_name = __('Project', 'mnk');
//         $plural_name = __('Projects', 'mnk');
//         $slug_name = 'mnk-projects';
//
//         register_post_type($slug_name, array(
//             'label' => $singular_name,
//             'public' => true,
//             'capability_type' => 'post',
//             'map_meta_cap' => true,
//             'has_archive' => false,
//             'query_var' => $slug_name,
//             'supports' => array('title', 'revisions', 'thumbnail'),
//             'labels' => a_get_custom_post_type_labels($singular_name, $plural_name),
//             'menu_icon' => 'dashicons-images-alt2',
//             'show_in_rest' => true,
//             'show_in_graphql' => true,
//             'publicly_queryable' => true,
//             'graphql_single_name' => $singular_name,
//             'graphql_plural_name' => $plural_name,
//         ));
//     }
//     add_action('init', 'a_register_custom_post_types');
// }


if (!function_exists('a_register_services_custom_post_types')) {
    function a_register_services_custom_post_types() {
        $singular_name = __('Service', 'dental');
        $plural_name = __('Services', 'dental');
        $slug_name = 'dental-services';

        register_post_type($slug_name, array(
            'label' => $singular_name,
            'public' => true,
            'capability_type' => 'post',
            'map_meta_cap' => true,
            'has_archive' => false,
            'query_var' => $slug_name,
            'supports' => array('title', 'revisions', 'thumbnail'),
            'labels' => a_get_custom_post_type_labels($singular_name, $plural_name),
            'menu_icon' => 'dashicons-images-alt2',
            'show_in_rest' => true,
            'show_in_graphql' => true,
            'publicly_queryable' => true,
            'graphql_single_name' => $singular_name,
            'graphql_plural_name' => $plural_name,
            'hierarchical' => true,
        ));
    }
    add_action('init', 'a_register_services_custom_post_types');
}

if (!function_exists('a_register_case_studies_custom_post_types')) {
    function a_register_case_studies_custom_post_types() {
        $singular_name = __('Case Study', 'dental');
        $plural_name = __('Case Studies', 'dental');
        $slug_name = 'dental-case-studies';

        register_post_type($slug_name, array(
            'label' => $singular_name,
            'public' => true,
            'capability_type' => 'post',
            'map_meta_cap' => true,
            'has_archive' => false,
            'query_var' => $slug_name,
            'supports' => array('title', 'revisions', 'thumbnail'),
            'labels' => a_get_custom_post_type_labels($singular_name, $plural_name),
            'menu_icon' => 'dashicons-images-alt2',
            'show_in_rest' => true,
            'show_in_graphql' => true,
            'publicly_queryable' => true,
            'graphql_single_name' => 'caseStudy',
            'graphql_plural_name' => 'caseStudies',
            'hierarchical' => true,
        ));
    }
    add_action('init', 'a_register_case_studies_custom_post_types');
}

if (!function_exists('a_register_call_to_action_custom_post_types')) {
    function a_register_call_to_action_custom_post_types() {
        $singular_name = __('Call to Action', 'dental');
        $plural_name = __('Call to Actions', 'dental');
        $slug_name = 'call-to-actions';

        register_post_type($slug_name, array(
            'label' => $singular_name,
            'public' => true,
            'capability_type' => 'post',
            'map_meta_cap' => true,
            'has_archive' => false,
            'query_var' => $slug_name,
            'supports' => array('title', 'revisions', 'thumbnail'),
            'labels' => a_get_custom_post_type_labels($singular_name, $plural_name),
            'menu_icon' => 'dashicons-images-alt2',
            'show_in_rest' => true,
            'show_in_graphql' => true,
            'publicly_queryable' => true,
            'graphql_single_name' => 'callToAction',
            'graphql_plural_name' => 'callToActions',
            'hierarchical' => true,
        ));
    }
    add_action('init', 'a_register_call_to_action_custom_post_types');
}

if (!function_exists('a_register_team_custom_post_types')) {
    function a_register_team_custom_post_types() {
        $singular_name = __('Team', 'dental');
        $plural_name = __('Teams', 'dental');
        $slug_name = 'dental-team';

        register_post_type($slug_name, array(
            'label' => $singular_name,
            'public' => true,
            'capability_type' => 'post',
            'map_meta_cap' => true,
            'has_archive' => false,
            'query_var' => $slug_name,
            'supports' => array('title', 'revisions', 'thumbnail'),
            'labels' => a_get_custom_post_type_labels($singular_name, $plural_name),
            'menu_icon' => 'dashicons-images-alt2',
            'show_in_rest' => true,
            'show_in_graphql' => true,
            'publicly_queryable' => true,
            'graphql_single_name' => $singular_name,
            'graphql_plural_name' => $plural_name,
            'hierarchical' => true,
        ));
    }
    add_action('init', 'a_register_team_custom_post_types');
}

if (!function_exists('a_get_custom_post_type_labels')) {
    function a_get_custom_post_type_labels($singular_name, $plural_name) {
        $labels = array(
            'name' => $plural_name,
            'singular_name' => $singular_name,
            'add_new' => sprintf( __('Add %s', 'mnk'), $singular_name),
            'add_new_item' => sprintf( __('Add New %s', 'mnk'), $singular_name),
            'edit' => sprintf( __('Edit %s', 'mnk'), $singular_name),
            'edit_item' => sprintf( __('Edit %s', 'mnk'), $singular_name),
            'new_item' => sprintf( __('New %s', 'mnk'), $singular_name),
            'view' => sprintf( __('View %s', 'mnk'), $singular_name),
            'view_item' => sprintf( __('View %s', 'mnk'), $singular_name),
            'search_items' => sprintf( __('Search %s', 'mnk'), $plural_name),
            'not_found' => sprintf( __('No %s found', 'mnk'), $plural_name),
            'not_found_in_trash' => sprintf( __('No %s found in trash', 'mnk'), $plural_name),
            'parent' => sprintf( __('Parent %s', 'mnk'), $singular_name),
            'menu_name' => $plural_name
        );
        return $labels;
    }
}

?>
