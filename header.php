<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="description" content="<?php bloginfo('description'); ?>" >
    <title><?php bloginfo('name') ?> |
        <?php wp_title(); ?>    
        <?php is_front_page() ? bloginfo('description') : wp_title(); ?>
    </title>
    <link
      href="https://fonts.googleapis.com/css?family=Lato|Montserrat|Spectral+SC"
      rel="stylesheet"
    />
    <link
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/bootstrap.css" />
    <link rel="shortcut icon" href="<?php bloginfo('template_url'); ?>/images/code1.jpeg" />
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" />
    <?php wp_head(); ?>
  </head>

  <body>
    <!-- NAVBAR -->
    <div class="pimg" id="home">
      <nav class="navbar navbar-expand fixed-top navbar-dark">
        <div class="">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a id="homeLink" class="nav-link" href="#home">Home</a>
              </li>
              <li class="nav-item">
                <a id="portfolioLink" class="nav-link" href="#portfolio"
                  >projects</a
                >
              </li>
              <li class="nav-item">
                <a id="aboutLink" class="nav-link" href="#about">about</a>
              </li>
              <li class="nav-item">
                <a id="contactLink" class="nav-link" href="#contact">contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>      
      
      <!-- SHOWCASE -->

      <div class="ptext container">
        <div id="slidein">
          <h1 class="showcase-h1"><?php bloginfo('name'); ?></h1>
          <p class="showcase-p" id="welcome"><?php bloginfo('description') ?></p>
        </div>
      </div>
    </div>