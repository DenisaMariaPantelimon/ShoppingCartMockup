<?php
    require 'connect.php';

    // Get the posted data.
    $postdata = file_get_contents("php://input");

    if(isset($postdata) && !empty($postdata))
    {
    // Extract data as Array of objects
    $request = json_decode($postdata, true);
        
    // Create collection to store data
    $order = $db->order;

    for ($i = 0; $i < count($request); $i++) {
        // Validate data format
        if((int)$reques[$i]->id < 1 || (int)$reques[$i]->qty < 1 ||  
            (float)($reques[$i]->price) < 0 || (float)($reques[$i]->tax) < 0 )
        {
            return http_response_code(400);
        }
        else{
            $order->insert(array("productId" => $reques[$i]->productId, 
                                 "productName" => $reques[$i]->productName,
                                 "productCode" => $reques[$i]->productCode,
                                 "tax" => $reques[$i]->tax,
                                 "description" => $reques[$i]->description,
                                 "price" => $reques[$i]->price,
                                 "starRating" => $reques[$i]->starRating,
                                 "imageUrl" => $reques[$i]->imageUrl,
                                 "qty" => $reques[$i]->qty
                                ));
        }
    }

    return http_response_code(200);
}