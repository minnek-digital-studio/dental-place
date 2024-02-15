<?php get_header(); ?>

    <div id="primary" class="content-area">
        <main id="main" class="site-main">
            <?php
            if (have_posts()) {
                while (have_posts()) {
                    the_post();
                    the_content();
                }
            } else {
                printf(
                    '<p>%s</p>',
                    __('No se encontró contenido.', 'mnk')
                );
            }
            ?>
        </main>
    </div>

<?php get_footer(); ?>
