<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package mnk
 */
?>
            </div><!-- .content-wrap -->
        </div><!-- #content -->

        <footer id="footer" class="site-footer">
            <div class="site-info">
                <a href="<?php echo esc_url( __( 'https://wordpress.org/', 'mnk' ) ); ?>">
                    <?php
                        /* translators: %s: CMS name, i.e. WordPress. */
                        printf( esc_html__( 'Proudly powered by %s', 'mnk' ), 'WordPress' );
                    ?>
                </a>

                <span class="sep"> | </span>

                <?php
                    printf( esc_html__( 'Theme Development by %1$s.', 'mnk' ), '<a href="https://minnekdigital.com/">Minnek</a>' );
                ?>
            </div><!-- .site-info -->

            <div id="copyrights">
                <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?></p>
            </div>
        </footer>
    </div><!-- #wrapper -->

    <?php wp_footer(); ?>
</body>
</html>
