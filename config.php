<?php
    $conn = new mysqli("localhost","root","","comment");
    if ($conn->connect_error) {
        die("connection Failed!" .$conn->connect_error);
    }

?>