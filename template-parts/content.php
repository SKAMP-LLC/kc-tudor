<?php
/**
 * The template part for displaying content
 *
 * @package WordPress
 * @subpackage KC Tudor
 * @since KC Tudor 1.0
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

  <!-- Post Thumbnail / Featured Image -->
  <?php tudor_post_thumbnail(); ?>

  <?php if ( is_sticky() && is_home() && ! is_paged() ) : ?>
    <span class="sticky-post"><?php _e( 'Featured', 'tudor' ); ?></span>
  <?php endif; ?>

	<?php the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' ); ?>
	<?php tudor_excerpt(); ?>
	<?php tudor_entry_meta(); ?>
</article><!-- #post-## -->
