<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Tudor
 * @since Tudor 1.0
 */

get_header(); ?>

<?php
    get_template_part( 'template-parts/content', 'carousel' );
?>

<section class="content">
  <?php get_sidebar(); ?>
  <div id="primary">
    <main id="main" class="site-main" role="main">
      <div class="divider divider-news"></div>

      <?php if ( have_posts() ) : ?>

      <?php if ( is_home() && ! is_front_page() ) : ?>
      <header>
        <h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1>
      </header>
      <?php endif; ?>

      <div class="article-container">
        <?php
            while ( have_posts() ) : the_post();
              get_template_part( 'template-parts/content', get_post_format() );
            endwhile;

            the_posts_pagination( array(
              'prev_text'          => __( 'Previous page', 'tudor' ),
              'next_text'          => __( 'Next page', 'tudor' ),
              'before_page_number' => '<span class="meta-nav screen-reader-text">' . __( 'Page', 'tudor' ) . ' </span>',
            ) );
              
          else :
            get_template_part( 'template-parts/content', 'none' );

          endif;
          ?>
      </div><!-- .article-container -->
      <script type="text/javascript" src="https://www.comicad.net/r/6Bcj0095JF/"></script>
    </main><!-- .site-main -->
  </div><!-- .content-area -->
</section>

<?php get_footer(); ?>
