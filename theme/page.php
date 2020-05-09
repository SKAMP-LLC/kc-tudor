<?php
/**
 * The template for displaying pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages and that
 * other "pages" on your WordPress site will use a different template.
 *
 * @package WordPress
 * @subpackage Tudor
 * @since Tudor 1.0
 */

get_header(); ?>

<div id="primary" class="content-area">
	<main id="main" class="site-main" role="main">
		<?php
      while ( have_posts() ) : the_post();
        if(is_page('Characters'))
          get_template_part( 'template-parts/content', 'page-cast' );
        else if(is_page('World'))
          get_template_part( 'template-parts/content', 'page-world' );
        else if(is_page('About'))
          get_template_part( 'template-parts/content', 'page-about' );
        else if(is_page('KatBox Inn'))
          get_template_part( 'template-parts/content', 'page-katboxinn' );
        else
          get_template_part( 'template-parts/content', 'page' );
      endwhile;
		?>

	</main>

	<?php get_sidebar( 'content-bottom' ); ?>

</div>

<?php get_footer(); ?>
