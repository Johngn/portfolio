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
        <div class="heading">
          <h1>projects</h1>
        </div>

        <div class="row">
          <div class="col-md-6">
            <video class="relok-video" controls>
              <source
                src="<?php bloginfo('template_url'); ?>/videos/relok.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="col-md-6">
            <p>
              Large B2B marketplace for construction companies in Germany. I was
              the sole front-end developer on this project, from design to
              launch.
            </p>
          </div>
        </div>

        <hr />

        <div class="row">
          <div class="col-md-6">
            <a
              target="_blank"
              href="https://eloquent-tereshkova-b0a725.netlify.com/"
            >
              <div class="gutter-fix">
                <img
                  class="imgs"
                  src="<?php bloginfo('template_url'); ?>/images/skyview.jpg"
                  alt=""
                />
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
                <img
                  class="imgs"
                  src="<?php bloginfo('template_url'); ?>/images/bitcoin.jpg"
                  alt=""
                />
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

        <hr />

        <div class="row">
          <div class="col-md-6">
            <video class="single-planet-video" controls>
              <source
                src="<?php bloginfo('template_url'); ?>/videos/single_planet_1200.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="col-md-6">
            <video class="single-planet-video" controls>
              <source
                src="<?php bloginfo('template_url'); ?>/videos/double_planet2_600.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>          
        </div>
        <div class="row">
            <div class="col-md-6">
              <p>
                Hydrodynamical simulation of a planet spinning on its own axis. The planet is composed of 1200 particles, each with its own velocity, density, pressure and energy. The differential equations of state were integrated forward by steps to produce the results shown. The simulation relies on smoothed-particle hydrodynamics, which reduces the computational complexity of the task by restricting each particles influence to only those others that are closest to it. The code can be found <a href="https://github.com/Johngn/planetcollider">here</a>.
              </p>
            </div>
            <div class="col-md-6">
              <p>
                In this case the same technique was used to simulate two planets colliding. Each planet consists of 600 particles each acting under the influece of those closest to it. A nearest neighbour search was done before a cubic-spine smoothing function weighted the influence of each particle depending on which conditions were satisfied.
              </p>
            </div>
          </div>
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