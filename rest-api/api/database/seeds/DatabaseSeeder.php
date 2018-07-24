<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call('UsersTableSeeder');
        $path = 'asses/random-image.png';
        $data = [
        [
            'name'=> 'name 1',
            'sort'=> 1,
            'description'=>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis in tortor vitae convallis. Mauris non lacus massa. Donec pulvinar placerat tristique. Fusce mauris nisi, iaculis nec dui nec, mollis vestibulum risus. Proin a congue nisl. Nam mattis enim fringilla, tristique neque pulvinar, phaz',
            'image' => $path
        ],
        [
            'name'=> 'name 2',
            'sort'=> 2,
            'description'=>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis in tortor vitae convallis. Mauris non lacus massa. Donec pulvinar placerat tristique. Fusce mauris nisi, iaculis nec dui nec, mollis vestibulum risus. Proin a congue nisl. Nam mattis enim fringilla, tristique neque pulvinar, phaz',
            'image' => $path

            
        ],
        [
            'name'=> 'name 3',
            'sort'=> 3,
            'description'=>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis in tortor vitae convallis. Mauris non lacus massa. Donec pulvinar placerat tristique. Fusce mauris nisi, iaculis nec dui nec, mollis vestibulum risus. Proin a congue nisl. Nam mattis enim fringilla, tristique neque pulvinar, phaz',
            'image' => $path
            
        ],
        [
            'name'=> 'name 4',
            'sort'=> 4,
            'description'=>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis in tortor vitae convallis. Mauris non lacus massa. Donec pulvinar placerat tristique. Fusce mauris nisi, iaculis nec dui nec, mollis vestibulum risus. Proin a congue nisl. Nam mattis enim fringilla, tristique neque pulvinar, phaz',
            'image' => $path

            
        ],
        [
            'name'=> 'name 5',
            'sort'=> 5,
            'description'=>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis in tortor vitae convallis. Mauris non lacus massa. Donec pulvinar placerat tristique. Fusce mauris nisi, iaculis nec dui nec, mollis vestibulum risus. Proin a congue nisl. Nam mattis enim fringilla, tristique neque pulvinar, phaz',
            'image' => $path

            
        ],
        [
            'name'=> 'name 6',
            'sort'=> 6,
            'description'=>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis in tortor vitae convallis. Mauris non lacus massa. Donec pulvinar placerat tristique. Fusce mauris nisi, iaculis nec dui nec, mollis vestibulum risus. Proin a congue nisl. Nam mattis enim fringilla, tristique neque pulvinar, phaz',
            'image'=> $path

        ],
        [
            'name'=> 'name7',
            'sort'=>7,
            'description'=>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis in tortor vitae convallis. Mauris non lacus massa. Donec pulvinar placerat tristique. Fusce mauris nisi, iaculis nec dui nec, mollis vestibulum risus. Proin a congue nisl. Nam mattis enim fringilla, tristique neque pulvinar, phaz',
            'image'=> $path
        ],
        [
            'name'=> 'name8',
            'sort'=>8,
            'description'=>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis in tortor vitae convallis. Mauris non lacus massa. Donec pulvinar placerat tristique. Fusce mauris nisi, iaculis nec dui nec, mollis vestibulum risus. Proin a congue nisl. Nam mattis enim fringilla, tristique neque pulvinar, phaz',
            'image'=> $path
        ],
        [
            'name'=> 'name9',
            'sort'=>9,
            'description'=>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis in tortor vitae convallis. Mauris non lacus massa. Donec pulvinar placerat tristique. Fusce mauris nisi, iaculis nec dui nec, mollis vestibulum risus. Proin a congue nisl. Nam mattis enim fringilla, tristique neque pulvinar, phaz',
            'image'=> $path
        ],
        [
            'name'=> 'name10',
            'sort'=>10,
            'description'=>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis in tortor vitae convallis. Mauris non lacus massa. Donec pulvinar placerat tristique. Fusce mauris nisi, iaculis nec dui nec, mollis vestibulum risus. Proin a congue nisl. Nam mattis enim fringilla, tristique neque pulvinar, phaz',
            'image'=> $path
        ],
       
        ];
        DB::table('productos')->insert($data);

    }
}
