<?php
/**
 * The template for the Tudor World Page
 *
 * @package WordPress
 * @subpackage Tudor
 * @since Tudor 1.0
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
  <div class="about-page">
    <section class="video">
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
      ?>
    </section>
  </div>
</article>
