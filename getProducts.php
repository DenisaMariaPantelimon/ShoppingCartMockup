<?php
    require 'connect.php';
    
    function getProducts(){
        connectToDatabase();
        $collection = $db->products;

        return $collection;
    }

    getProducts();
?>
