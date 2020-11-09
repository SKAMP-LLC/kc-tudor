<?php
/**
 * The template for displaying archive pages
 *
**/
get_header(); ?>

  <div class="archive-template">
  <?php if ( have_posts() ) : ?>
    <header class="page-header">
      <?php
        the_archive_description( '<div class="taxonomy-description">', '</div>' );
      ?>
    </header><!-- .page-header -->

    <a href="https://www.topwebcomics.com/vote/25775 "><img class="twc" src="https://kemono.cafe/wp-content/uploads/2020/11/kc-vote-banner.gif" alt=""></a>
    <h1>Kemono Cafe</h1>

    <div class="article-container">
    <?php
    // Start the Loop.
    while ( have_posts() ) : the_post();

      /*
      * Include the Post-Format-specific template for the content.
      * If you want to override this in a child theme, then include a file
      * called content-___.php (where ___ is the Post Format name) and that will be used instead.
      */
      get_template_part( 'template-parts/content', get_post_format() );

    // End the loop.
    endwhile;

    // Previous/next page navigation.
    the_posts_pagination( array(
      'prev_text'          => __( 'Previous page', 'tudor' ),
      'next_text'          => __( 'Next page', 'tudor' ),
      'before_page_number' => '<span class="meta-nav screen-reader-text">' . __( 'Page', 'tudor' ) . ' </span>',
    ) );

    // If no content, include the "No posts found" template.
    else :
    get_template_part( 'template-parts/content', 'none' );

    endif;
    ?>
    </div>
  </div>

