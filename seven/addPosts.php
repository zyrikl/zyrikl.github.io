<?php
$conn = mysql_connect("localhost", "joeuser", "somepass")
  or die(mysql_error());
mysql_select_db("testDB", $conn) or die(mysql_error());
$verify_topic = "select textOfPost from forum_topics where
  topic_id = $_GET[topic_id]";
$verify_topic_res = mysql_query($verifty_topic, $conn)
  or die(mysql_error());
$topic_title = stripslashes(mysql_result($verify_topic_res,0,"textOfPost"));
$get_posts = "select post_id, post_text, date_format(post_create_time, '%b %e %Y at %r') as fmt_post_create_time, post_owner from forum_posts where topic_id = $_GET[topic_id] order by post_create_time asc";
$get_posts_res = mysql_query($get_posts,$conn) or die(mysql_error());
$display_block = "
<h3>Posts so far in $topic_title</h3>
<tr>
<th>Name of Poster</th>
<th>Actual Post</th>
</tr>
";
while ($posts_info = mysql_fetch_array($get_posts_res)) {
  $post_id = $posts_info['post_id'];
  $post_text = nl2br(stripslashes($posts_info['post_text']));
}
?>

<html>
  <head>
    <title>Test</title>
  </head>
  <body>
    <?php print $displayBlock; ?>
  </body>
</html>
