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

  <section class="carousel">
    <div class="control previous_slot"></div>
    <div class="siema">
      <div class="comic_slot slot_0"
        data-title="iMew"
        data-rating="All Ages"
        data-description="This is the desc for iMew"
      >
        <a href="">Comic Slot</a>
      </div>
      <div class="comic_slot slot_1"
        data-title="Paprika"
        data-rating="Mature"
        data-description="This is the desc for Paprika"
      >
        <a href="">Comic Slot</a>
      </div>
      <div class="comic_slot slot_2"
        data-title="Caribbean Blue"
        data-rating="Hoo now!"
        data-description="This is the desc for CB"
      >
        <a href="">Comic Slot</a>
      </div>
      <div class="comic_slot slot_3"
        data-title="PMP"
        data-rating="Zomg..."
        data-description="This is the desc for PMP"
      >
        <a href="">Comic Slot</a>
      </div>
      <div class="comic_slot slot_0"
        data-title="iMew"
        data-rating="All Ages"
        data-description="This is the desc for iMew"
      >
        <a href="">Comic Slot</a>
      </div>
      <div class="comic_slot slot_1"
        data-title="Paprika"
        data-rating="Mature"
        data-description="This is the desc for Paprika"
      >
        <a href="">Comic Slot</a>
      </div>
      <div class="comic_slot slot_2"
        data-title="Caribbean Blue"
        data-rating="Hoo now!"
        data-description="This is the desc for CB"
      >
        <a href="">Comic Slot</a>
      </div>
      <div class="comic_slot slot_3"
        data-title="PMP"
        data-rating="Zomg..."
        data-description="This is the desc for PMP"
      >
        <a href="">Comic Slot</a>
      </div>
    </div>
    <div class="control next_slot"></div>
  </section>

  <section class="sandy-says">
    <div class="sandy"></div>
    <div class="speech_bubble">
      <span class="title">Comic Title</span>
      <span class="rating">All Ages</span>
      <p class="description">Lorem Ipsum</p>
      <div class="arrow"></div>
    </div>
  </section>

  <section class="two-column">
    <?php get_sidebar(); ?>
    <div id="primary" class="content-area">
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

        <div class="divider divider-more-news"></div>
        <div class="ad-banner"></div>

        </main><!-- .site-main -->
      </div><!-- .content-area -->
    </section><!-- .two-column -->

<?php get_footer(); ?>
