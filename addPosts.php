<?php
$conn = mysql_connect("localhost", "joeuser", "somepass")
  or die(mysql_error());
mysql_select_db("testDB", $conn) or die(mysql_error());
$verify_topic = "select textOfPost from forum_topics where
  topic_id = $_GET[topic_id]";
$verify_topic_res = mysql_query($verifty_topic, $conn)
  or die(mysql_error());
$topic_title = stripslashes(mysql_result($verify_topic_res,0,"textOfPost"));
?>

<html>
  <head>
    <title>Test</title>
  </head>
  <body>
    <?php print $displayBlock; ?>
  </body>
</html>
