<?php
function exception_error_handler($errno, $errstr, $errfile, $errline ) {
    throw new ErrorException($errstr, 0, $errno, $errfile, $errline);
}
set_error_handler("exception_error_handler");

$NUM_OF_ATTEMPTS = 5;
$attempts = 0;

do {

    try
    {
        executeCode();
    } catch (Exception $e) {
        $attempts++;
        sleep(1);
        continue;
    }

    break;

} while($attempts < $NUM_OF_ATTEMPTS);

function executeCode(){
    echo "Hello world!";
}	
?>