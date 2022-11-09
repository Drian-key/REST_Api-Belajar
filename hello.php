<?php

require_once __DIR__ . '/vendor/autoload.php';

use DrianTcho\Data\Jumlah;
use DrianTcho\Data\People;

$people = new People('Drian');

$Jumlah = new Jumlah(10);

echo $people->sayHello('wawan') . PHP_EOL;

echo $Jumlah->JumlahKan(12);