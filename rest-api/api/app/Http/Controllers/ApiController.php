<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class ApiController extends Controller{
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
        if (DB::connection()->getDatabaseName()){
            
            $results = DB::table('product')->orderBy('sort', 'asc')->get();
            return $results;
        }
        else{
            return 'error';
        }

    }

    public function updateSortItems(Request $request){
        return $request;
    }
}
