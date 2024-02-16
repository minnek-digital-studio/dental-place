<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package _s
 */
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <a class="skip-link screen-reader-text" href="#primary">
        <?php esc_html_e( 'Saltar al contenido', 'mnk' ); ?>
    </a>

    <header id="header" class="site-header">
        <nav id="menu" class="main-navigation">
            <?php
            // Display the navigation menu
            wp_nav_menu(array(
                'theme_location' => 'primary-menu',
                'menu_id'        => 'primary-menu',
                'container' => 'ul',
            ));
            ?>
        </nav>
    </header>

    <div id="content">
        <div class="site-main">
