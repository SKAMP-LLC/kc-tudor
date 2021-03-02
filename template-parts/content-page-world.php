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
  <div class="world-page">
    <header>
      Fable
    </header>
    <div class="map"></div>
    <div class="patrons emote-wrapper">
      <header>
        Honorary Fable Residents
      </header>
      <div class="jobs">
        <emote character="stratus" emotion="happy" side="left" name="Stratus Wind">
          Singer
        </emote>
        <emote character="huzhao" emotion="smile" side="right" name="Huzhao">
          Martial Arts Instructor & Medicine Woman
        </emote>
        <emote character="shaze" emotion="inquisitive" side="left" name="Shaze">
          Still deciding...
        </emote>

        <hr />
        <div class="patreon">
          <span>Would you like to move to Fable?<span><br />
          <span>Consider supporting us on <a href="https://www.patreon.com/KemonoCafe">Patreon!</a><span>
        </div>
      </div>
    </div>
    <header>
      Locations
    </header>
    <div class="locations">
      <div class="location loc-1">
        <div class="image"></div>
        <h1>Fable Station</h1>
        <p>Home to the Escapade and the only way in or out of town. Those who walk the track are never seen again!</p>
      </div>
      <div class="location loc-2">
        <div class="image"></div>
        <h1>Kemono Cafe</h1>
        <p>You are here! And it's a good thing, too. Sandy really needs the customers.</p>
      </div>
      <div class="location loc-3">
        <div class="image"></div>
        <h1>Jill's Mill</h1>
        <p>Jill lives just at the border of the impenetrable Illusion Forest. Be careful if you smell pie... She can be territorial.</p>
      </div>
      <div class="location loc-4">
        <div class="image"></div>
        <h1>Dreamer's Dock </h1>
        <p>One of the loneliest places in town. No ships come or go... But at least it is Kona's favorite fishing spot.</p>
      </div>
      <div class="location loc-5">
        <div class="image"></div>
        <h1>Bookend Isle</h1>
        <p>Named as Fable's easternmost point, swimming out to bookend and back is one of the oldest Fable traditions.</p>
      </div>
      <div class="location loc-6">
        <div class="image"></div>
        <h1>Pageturner Ranch</h1>
        <p>Renamed as a pun by Maxine when competitors arose. "Don't buy it if it's not a REAL Pageturner!" She'd say. </p>
      </div>
      <div class="location loc-7">
        <div class="image"></div>
        <h1>Mysterious Manor</h1>
        <p>An abandoned house of unknown origin and the center of many a spooky story in Fable. Not even the forest tries to reclaim it...</p>
      </div>
      <div class="location loc-8">
        <div class="image"></div>
        <h1>"The Mines"</h1>
        <p>Miners in Fable know not to go too deep. There's a good chance they'll wake up something they never want to see again.</p>
      </div>
    </div>
  </div>
</article>
