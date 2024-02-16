<?php

add_action( 'wp_enqueue_scripts', 'mnk_theme_name_scripts' );

function mnk_theme_scripts() {
    wp_enqueue_style(
        'theme-styles',
        get_template_directory_uri() . '/assets/css/theme.css',
        array(),
        filemtime(get_template_directory() . '/assets/css/theme.css'),
        false
    );

    wp_enqueue_script(
        'theme-scripts',
        get_template_directory_uri() . '/assets/js/main.js',
        array(),
        '1.0.0',
        true
    );
}
