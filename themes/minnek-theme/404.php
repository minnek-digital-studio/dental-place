<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package mnk
 */

get_header();
?>

    <main id="primary" class="site-main">
        <section class="error-404 not-found">
            <header class="page-header">
                <h1 class="page-title">
                    <?php esc_html_e( 'Oops! That page can&rsquo;t be found.', 'mnk' ); ?>
                </h1>
            </header><!-- .page-header -->

            <div class="page-content">
                <p>
                    <?php esc_html_e( 'It looks like nothing was found at this location. Maybe try one of the links below or a search?', 'mnk' ); ?>
                </p>

                <?php
                getmnkearch_form();

                the_widget( 'WP_Widget_Recent_Posts' );
                ?>

                <div class="widget widget_categories">
                    <h2 class="widget-title"><?php esc_html_e( 'Most Used Categories', 'mnk' ); ?></h2>
                    <ul>
                        <?php
                        wp_list_categories(
                            array(
                                'orderby'    => 'count',
                                'order'      => 'DESC',
                                'show_count' => 1,
                                'title_li'   => '',
                                'number'     => 10,
                            )
                        );
                        ?>
                    </ul>
                </div><!-- .widget -->

                <?php
                /* translators: %1$s: smiley */
                $mnk_archive_content = '<p>' . sprintf( esc_html__( 'Try looking in the monthly archives. %1$s', 'mnk' ), convertmnkmilies( ':)' ) ) . '</p>';

                the_widget( 'WP_Widget_Archives', 'dropdown=1', "after_title=</h2>$mnk_archive_content" );
                ?>
            </div><!-- .page-content -->
        </section><!-- .error-404 -->
    </main><!-- #main -->

<?php
get_footer();
