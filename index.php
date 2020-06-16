<?php get_header(); ?>

      <!-- SHOWCASE -->

      <div class="ptext container">
        <div id="slidein">
          <h1>Welcome to <?php bloginfo('name'); ?></h1>
          <p id="welcome"><?php bloginfo('description') ?></p>
        </div>
      </div>
    </div>

    <!-- PORTFOLIO -->
    <section id="portfolio">
      <div class="container">

      <?php 
      // if(have_posts()) : 
      ?>

        <div class="heading">
          <h1>projects</h1>
        </div>
        <?php
        //  while(have_posts()) : the_post();
          ?>
        <!-- <div class="row"> -->
          <!-- <div class="col-md-6"> -->
              <!-- <div class="gutter-fix"> -->
                  <?php 
                    // if( has_post_thumbnail() ):
                        // echo get_the_post_thumbnail();
                    // endif; 
                    ?>
              <!-- </div> -->
          <!-- </div> -->
          <!-- <div class="col-md-6"> -->
            <!-- <p> -->
              <?php
              // the_content();
               ?>
            <!-- </p> -->
          <!-- </div> -->
        <!-- </div> -->


       
      <?php 
    // endwhile; 
    ?>
      <?php 
    // else: 
    ?>
      <?php 
      // __('Nothing found'); 
      ?>
      <?php 
    // endif;
     ?>
    
        <div class="row">
          <div class="col-md-6">
            <a target="_blank" href="https://www.relok.de/">
              <div class="gutter-fix">
                <img class="imgs" src="<?php bloginfo('template_url'); ?>/images/relok.jpg" alt="" />
              </div>
            </a>
          </div>
          <div class="col-md-6">
            <p>
              Large B2B marketplace for construction companies in Germany. I was
              the sole front-end developer on this project, from design to
              launch.
            </p>
          </div>
        </div>

        <hr/>


        <div class="row">
          <div class="col-md-6">
            <a
              target="_blank"
              href="https://eloquent-tereshkova-b0a725.netlify.com/"
            >
              <div class="gutter-fix">
                <img class="imgs" src="<?php bloginfo('template_url'); ?>/images/skyview.jpg" alt="" />
              </div>
            </a>
          </div>
          <div class="col-md-6">
            <p>
              An app for amateur astronomers that tells you if the weather
              conditions in your area are suitable for sky viewing. It gives a
              graph of cloud cover, humidity, and wind speed for the next 5
              nights.
            </p>
          </div>
        </div>

        <hr />

        <div class="row">
          <div class="col-md-6">
            <a target="_blank" href="https://silly-mcnulty-d65d60.netlify.com/">
              <div class="gutter-fix">
                <img class="imgs" src="<?php bloginfo('template_url'); ?>/images/bitcoin.jpg" alt="" />
              </div>
            </a>
          </div>
          <div class="col-md-6">
            <p>
              A React app that calculates profit or loss from trading bitcoin.
              It takes a date and the amount of bitcions bought, and returns the
              percentage and the total dollar value.
            </p>
          </div>
        </div>
        <!-- 
        <hr />

        <div class="row">
          <div class="col-md-6">
            <a href="https://modest-nightingale-fb1861.netlify.com/">
              <div class="gutter-fix">
                <img class="imgs" src="images/realestate.jpg" alt="" />
              </div>
            </a>
          </div>
          <div class="col-md-6">
            <p>
              A fake real estate website made that lists properties that can be
              filtered based on several different parameters
            </p>
          </div>
        </div> -->
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about" class="container">
      <h1>About</h1>
      <div class="row">
        <div class="col-md-6">
          <div class="face-image">
            <img src="<?php bloginfo('template_url'); ?>/images/face.jpeg" alt="" />
          </div>
        </div>
        <div class="col-md-6">
          <p>
            My educational background is in physics and astronomy, and I have a
            first class honours degree in Astronomy and Planetary science. I can
            work with React, Vue, HTML/CSS, SASS, Bootstrap, JavaScript and Git.
          </p>
        </div>
      </div>
    </section>

    <!-- CONTACT -->

    <section id="contact">
      <div class="container">
        <h1>Contact</h1>
        <div class="row">
          <div class="col-md-6">
            <p>
              <i class="fa fa-envelope" aria-hidden="true"></i
              >jgillan@protonmail.com
            </p>
            <p><i class="fa fa-phone" aria-hidden="true"></i>01781 363 326</p>
            <p>
              <a href="https://github.com/Johngn">
                <i class="fa fa-github" aria-hidden="true"></i>
              </a>
              <a href="https://www.linkedin.com/in/john-gillan-a7682a151/">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </p>
          </div>
          <div class="col-md-6">
            <p>Leave a message:</p>
            <form data-netlify="true" name="contact" method="POST">
              <div class="form-row">
                <div class="col">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    placeholder="Name"
                    required
                  />
                </div>
                <div class="col">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <br />
              <div class="form-group">
                <textarea
                  id="message"
                  class="form-control"
                  name="message"
                  rows="3"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <input
                id="btn"
                type="submit"
                name="submit"
                class="btn btn-dark"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </section>

<?php get_footer(); ?>