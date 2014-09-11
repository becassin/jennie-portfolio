<article id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?>">
  <div class="node-inner">
    <header>
        <?php if (!$page): ?>
      <h2<?php print $title_attributes; ?>><a href="<?php print $node_url; ?>"><?php print $title; ?></a></h2>
      <?php endif; ?>
  
      <?php print $user_picture; ?>
          
      <?php if ($display_submitted): ?>
        <span class="submitted"><?php print $date; ?> — <?php print $name; ?></span>
      <?php endif; ?>
    </header>
    <div class="content">
      <?php 
        // We hide the comments and links now so that we can render them later.
        hide($content['comments']);
        hide($content['links']);
        for ($i = 0; $i <= sizeof($content['field_thumbs']['#items'])-1; $i++) {
          $j = $i + 1;
          $file_uri = $content['field_thumbs'][$i]['entity']['field_collection_item'][$j]['field_image']['#object']->field_image['und'][0]['uri'];
          $target_id = $content['field_thumbs'][$i]['entity']['field_collection_item'][$j]['field_link']['#object']->field_link['und'][0]['target_id'];
      ?>
      <a class="homepage_thumb" href="/node/<?php echo $target_id ?>">
      <?php
          $hero_image = array(
            'style_name' => 'homepage__180x180_',
            'path' => $file_uri,
            'width' => '',
            'height' => '',
            );
          print theme('image_style',$hero_image);
        }

       ?>
       </a>
    </div>
    <?php if (!empty($content['links']['terms']) || !empty($content['links'])): ?>
      <footer>
      <?php if (!empty($content['links']['terms'])): ?>
        <div class="terms"><?php print render($content['links']['terms']); ?></div>
      <?php endif;?>
      
      <?php if (!empty($content['links'])): ?>
        <div class="links"><?php print render($content['links']); ?></div>
      <?php endif; ?>
      </footer>
    <?php endif; ?>
  </div> <!-- /node-inner -->
</article> <!-- /node-->
<?php print render($content['comments']); ?>