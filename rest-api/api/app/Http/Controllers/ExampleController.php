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
        //     $results = DB::insert('insert into productos (id, name,sort,description,image) values (?, ?,?,?,?)', [1, 'Dayle',1,'DESCRIPTION','assets/imgs.png']);
        //    return 'Connected to the DB: ' . $results ;
        $results = DB::table('productos')->get();
        return $results;
        }
        else{
            return 'error';
        }

    }
    //
}
