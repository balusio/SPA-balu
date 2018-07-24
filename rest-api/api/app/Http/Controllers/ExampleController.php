<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
class ExampleController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }
    
    public function checkDb(){
        if (DB::connection()->getDatabaseName())
        {
            $results = DB::select("SELECT * FROM productos");
           return 'Connected to the DB: ' . $results ;
        }
        else{
            return 'error';
        }

    }
    //
}
