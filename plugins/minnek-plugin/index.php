<?php
/*
Plugin Name: Minnek Plugin
Plugin URI: https://minnekdigital.com/
Description: The base plugin for minnek developers.
Version: 1.0.0
Author: Minnek
Author URI: https://minnekdigital.com/
*/

function mnk_plugin_init() {
    add_shortcode('mnk_shortcode', 'mnk_shortcode_callback');
}

function mnk_shortcode_callback($atts, $content = null) {
    $output = '<div class="mnk-plugin">' . $content . '</div>';

    return $output;
}

add_action('init', 'mnk_plugin_init');
