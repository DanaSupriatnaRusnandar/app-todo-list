<?php

use Illuminate\Database\Seeder;
use App\Todo;

class TodoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Todo::create([
            'name' => 'Belajar Laravel',
            'note' => 'Memahami Cara Kerja API & Routing Laravel',
            'due_date' => '2020-02-20',
            'status' => false
        ]);
        Todo::create([
            'name' => 'Belajar Vue.js',
            'note' => 'Memahami Manajemen State & Routing',
            'due_date' => '2020-02-22',
            'status' => true
        ]);
    }
}
