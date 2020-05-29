<?php
/**
 * The template for the Tudor Archive Page
 *
 * @package WordPress
 * @subpackage Tudor
 * @since Tudor 1.0
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
  <div class="archive-page">
    <div class="sort-container">
      <section>
        <h2>Archives by Month:</h2>
        <ul>
          <?php wp_get_archives('type=monthly'); ?>
        </ul>
      </section>

      <section>
        <h2>Archives by Category:</h2>
        <ul>
          <?php wp_list_categories(); ?>
        </ul>
      </section>
    </div>
    <?php get_search_form(); ?>
  </div>
</article>
