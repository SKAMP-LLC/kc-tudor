<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "site-content" div.
 *
 * @package WordPress
 * @subpackage Tudor
 * @since Tudor 1.0
 */

?>
  <!DOCTYPE html>
  <html <?php language_attributes(); ?> class="no-js">

  <head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-152386556-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-152386556-1');
    </script>
    <title>Kemono Cafe | A Furry Webcomic Community</title>
    <meta name="description" content="Kemono Cafe is a furry webcomic community with a unique webcomic of its own. The members of the community can contribute characters to a world-between-worlds setting, visiting the actual Kemono Cafe in the mystical land of Fable.">
    <meta name="keywords" content="webcomic list, webcomic, webcomics, art, anime, digital, digital art, kemono, kemono cafe, furry, furry art, furry comic, furry comic community, furry comics, furry webcomic, furry webcomic community, furry webcomics, manga, action, comedy, humor, drama, slice of life, chalo, chalodillo, mastergodai, Kelvin Challenger, Avencri, Nekonny, freelancemanga, Cervelet, laslindas, las lindas, knighthood, addictive science, tina of the south, imew, i mew, paprika, caribbean blue, practice makes perfect, rascals, rascals webcomic,  the eye, the eye of ramalach">
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="/favicon.ico?" />
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <?php if ( is_singular() && pings_open( get_queried_object() ) ) : ?>
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
    <?php endif; ?>
    <?php wp_head(); ?>
  </head>

  <link href="https://fonts.googleapis.com/css?family=Lato:400,700|Roboto+Slab:400,700" rel="stylesheet"> 

  <body <?php body_class(); ?>>
    <div id="page" class="site">
      
      <header id="masthead" class="site-header" role="banner">
        <div class="site-header-main">

          <!-- Brown Header Rule -->
          <div class="brown-header-rule"></div>

          <!-- Header / Banner -->
          <?php if ( get_header_image() ) : ?>
          <div class="header-image">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
              <img class="u-full-width" src="<?php header_image(); ?>" srcset="<?php echo esc_attr( wp_get_attachment_image_srcset( get_custom_header()->attachment_id ) ); ?>"
                alt="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>">
            </a>
          </div>
          <?php endif; ?>

          <!-- Primary Navigation & Social Menu -->
          <?php if ( has_nav_menu( 'primary' ) || has_nav_menu( 'social' ) ) : ?>
          <div id="site-header-menu" class="site-header-menu">
            <?php if ( has_nav_menu( 'primary' ) ) : ?>
            <nav id="site-navigation" class="main-navigation" role="navigation" aria-label="<?php esc_attr_e( 'Primary Menu', 'tudor' ); ?>">
              <?php
                  wp_nav_menu( array(
                    'theme_location' => 'primary',
                    'menu_class'     => 'primary-menu',
                  ) );
                ?>
            </nav>
            <?php endif; ?>

            <?php if ( has_nav_menu( 'social' ) ) : ?>
            <nav id="social-navigation" class="social-navigation" role="navigation" aria-label="<?php esc_attr_e( 'Social Links Menu', 'tudor' ); ?>">
              <?php
                  wp_nav_menu( array(
                    'theme_location' => 'social',
                    'menu_class'     => 'social-links-menu',
                    'depth'          => 1,
                    'link_before'    => '<span class="screen-reader-text">',
                    'link_after'     => '</span>',
                  ) );
                ?>
            </nav>
            <?php endif; ?>
          </div>
          <?php endif; ?>
        </div>
      </header>
      
      <div id="content" class="site-content">
