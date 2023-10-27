<?php
$conn = mysql_connect("localhost", "joeuser", "somepass")
  or die(mysql_error());
mysql_select_db("testDB", $conn) or die(mysql_error());
$verify_topic = "select 

<html>
  <head>
    <title>Test</title>
  </head>
  <body>
    <?php print $displayBlock; ?>
  </body>
</html>
