<?php
    function connectToDatabase(){
        // $m = new MongoClient();
        $DB_CONNECTION_STRING="mongodb://localhost:27017";

        $manager = new MongoDB\Driver\Manager( $DB_CONNECTION_STRING );
        echo "Connection to database successfully <br>"; // to create new line
        //var_dump($manager);

        // select a database
        $db = $manager->ShoppingCart;
        echo "Database $db";

        return $db;
    }

    connectToDatabase();
?>
