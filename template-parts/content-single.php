<?php
/**
 * The template part for displaying single posts
 *
 * @package WordPress
 * @subpackage KC Tudor
 * @since KC Tudor 1.0
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
  <div class="can-content">
    <script type="text/javascript" src="https://www.comicad.net/r/L3x3kMtpYY/"></script>
  </div>

  <hr />

	<header class="entry-header">
		<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
	</header><!-- .entry-header -->

	<?php tudor_excerpt(); ?>

  <div class="entry-content">
		<?php
			the_content();

			wp_link_pages( array(
				'before'      => '<div class="page-links"><span class="page-links-title">' . __( 'Pages:', 'tudor' ) . '</span>',
				'after'       => '</div>',
				'link_before' => '<span>',
				'link_after'  => '</span>',
				'pagelink'    => '<span class="screen-reader-text">' . __( 'Page', 'tudor' ) . ' </span>%',
				'separator'   => '<span class="screen-reader-text">, </span>',
			) );

			if ( '' !== get_the_author_meta( 'description' ) ) {
				get_template_part( 'template-parts/biography' );
			}
		?>
	</div>

  <hr />

  <div class="patreon-banner">
    <a href="https://www.patreon.com/KemonoCafe"></a>
  </div>

  <div class="can-content">
    <script type="text/javascript" src="https://www.comicad.net/r/25UaiAuEGF/"></script>
  </div>
</article><!-- #post-## -->
