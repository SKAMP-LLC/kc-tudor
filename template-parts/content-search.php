<?php
/**
 * The template part for displaying results in search pages
 *
 * @package WordPress
 * @subpackage KC Tudor
 * @since KC Tudor 1.0
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
  <div class="search-results">
    <header class="entry-header">
      <?php the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' ); ?>
    </header><!-- .entry-header -->

    <?php tudor_post_thumbnail(); ?>
  </div>
</article><!-- #post-## -->
