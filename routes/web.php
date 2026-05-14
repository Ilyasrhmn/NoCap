<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::inertia('/drops', 'drops')->name('drops');
Route::inertia('/product', 'product')->name('product');
Route::inertia('/membership', 'membership')->name('membership');
Route::inertia('/about', 'about')->name('about');
Route::inertia('/contact', 'contact')->name('contact');
Route::inertia('/store', 'store')->name('store');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
