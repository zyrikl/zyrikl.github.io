<html>
  <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
  <script type="text/javascript" id="MathJax-script" async
      src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js">
  </script>
  <form action="index.php" method="REQUEST">
    <textarea style="resize: none;" rows="20" cols="40" name="post"></textarea>
    <input type="text" name="name" placeholder="name" />
    <input type="submit" value="Post" />
  </form>
  <?php 
    error_reporting(E_ERROR | E_PARSE);
    date_default_timezone_set('US/Eastern');
    $postvalue = $_REQUEST['post'];
    $postname = $_REQUEST['name'];
    $t = "<div class='one'><p>" . strip_tags($postvalue) . "</p><a>" . strip_tags($postname) . " on " . date("h:i:s A") . "</a></div>";
    if ($postvalue == null) {
      echo "Nothing filled out.";
    } else {
      if ($postname == null) {
        $postname = "Anonymous";
      } else {
        $postname = $postname;
      }
      echo $t;
      file_put_contents('index.php', $t, FILE_APPEND );
      // header("Location: https://d0db15ce-b8ad-4a23-a48d-e39c6bb29b37-00-56ir3gil43hw.worf.replit.dev/fr/index.php");
      // die();
    }
  ?>
  <style>
    .one {
      box-shadow: 1px 1px 3px 2px;
      padding: 20px;
      margin: 10px;
    }
  </style>
</html>
